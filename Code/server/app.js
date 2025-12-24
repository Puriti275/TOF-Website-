import express from 'express'
import dotenv from 'dotenv'

import {createUser, createPayment } from '../server/database.js'

dotenv.config()

const app = express()

import stripe from 'stripe'

const Stripe = new stripe(process.env.STRIPE_PRIVATE_KEY)

app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature']

    let event
    try {
        event = stripe.webhooks.constructEvent(
            req.body, 
            sig, 
            process.env.STRIPE_WEBHOOK_SECRET
        )
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`)
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object
        const line_items = await Stripe.checkout.sessions.listLineItems(
            session.id, 
            { expand: ['data.price.product'], limit: 100 }
            )
        const items = line_items.data
        //const sessionID = event.data.object.id

        //const session1 = stripe.checkout.sessions.retrieve(session.id, {expand: ['line_items']})

        try {
            //const line_items = Stripe.checkout.sessions.listLineItems
            const result = createPayment(session, items)
            res.status(201)
            console.log("Payment created")
            
        } catch (err) {
            return res.status(500).send(`Database Error: ${err.message}`)
        }
        //mysql api
    }

    res.json({ received: true })
})

app.use(express.json())

import cors from 'cors'

app.use(cors( {
     origin: [
        "http://localhost:5500",
        "www.tof24.org"
    ],
     method: ["POST" ]
    }))

const storeItems = new Map([
    [1, {priceInCents: 6500, name: 'TOF Hoodie, Small'}],
    [2, {priceInCents: 6500, name: 'TOF Hoodie, Medium'}],
    [3, {priceInCents: 6500, name: 'TOF Hoodie, Large'}],
    [4, {priceInCents: 5500, name: 'TOF Sweatshirt, Small'}],
    [5, {priceInCents: 5500, name: 'TOF Sweatshirt, Medium'}],
    [6, {priceInCents: 5500, name: 'TOF Sweatshirt, Large'}]
])

app.post('/create-checkout-session', async (req, res) => {
    try {
       const lineItems = req.body.items
       .filter(item => item.quantity > 0)
       .map(item =>  {
        const storeItem = storeItems.get(item.id)
        return {
            price_data: {
                currency: 'usd',
                product_data: { name: storeItem.name },
                unit_amount: storeItem.priceInCents,
            },
            quantity: item.quantity
        }
       })
        
        if (lineItems.length === 0) {
            return res.status(400).json({ error: "Cart is empty" })
        }

        const storeItemsQty = lineItems.quantity
        const session = await Stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            shipping_address_collection: { allowed_countries: ['US'] },
            customer_creation: 'always',
            line_items: lineItems,
            expand: ['line_items'],
            metadata: {
                hoodieSmallQty: storeItemsQty,
                hoodieMediumQty: storeItemsQty,
                hoodieLargeQty: storeItemsQty,
                sweatshirtSmallQty: storeItemsQty,
                sweatshirtMediumQty: storeItemsQty,
                sweatshirtLargeQty: storeItemsQty,
                productName: storeItems.name
            },
            success_url: `${process.env.CLIENT_URL}/index.html`,
            cancel_url: `${process.env.CLIENT_URL}/merch.html`
        })
        res.json({ url: session.url })
    } catch (e) {
        console.error(e)
        res.status(500).json({ error: e.message })
    }
})

/*
app.post('/checkout-session-completed', async (req, res) => {
    const session = req.body
    const payment = await createPayment(session)
    res.status(201)
    console.log("Payment created")
})
*/


/*
app.get("/users", async (req, res) => {
    const users = await getUsers()
    res.send(users)
})

app.get("/users/:id", async (req, res) => {
    const id = req.params.id
    const user = await getUser(id)
    res.send(user)
})

app.post("/users", async (req, res) => {
    const {firstName, lastName, email, city, address, zipcode } = req.body
    const user = await createUser(firstName, lastName, email, city, address, zipcode)
    res.status(201).send(user)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
*/

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})

