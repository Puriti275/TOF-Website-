//const mysql = require('mysql2'); --> this is commonjs syntax
/*importing mysql to run queries from the database */
import mysql from 'mysql2'

/*environment variables allow us to configure and hide things easier
everyone who uses this application will have to have their
own version of the .env file

this file will never be committed into git
*/

import dotenv from 'dotenv'
dotenv.config()

import stripeClient from 'stripe'
const stripe = stripeClient(process.env.STRIPE_PRIVATE_KEY)

//using a pool to login to our database from mysql
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

//module.exports = pool --> more commonjs syntax

//just returns all users in the users table
export async function getUsers() {
    const [rows] = await pool.query("SELECT * FROM users")
    return rows
}

export async function getUser(id) {
    const [rows] = await pool.query(`
        SELECT * 
        FROM users
        WHERE userID = ?
        `, [id])
    return rows[0]
}

export async function createUser(session) {
    const result = await pool.query(`
        INSERT INTO users (firstName, lastName, email, address, city, zip, state)
        VALUES (?,?,?,?,?,?,?)
        `, [session.customer_details.name,
            "", 
            session.customer_details.email, 
            session.customer_details.address.line1,
            session.customer_details.address.city,
            session.customer_details.address.postal_code,
            session.customer_details.address.state])
        
        return result 
        /*{
            firstName: session.customer_details.name,
            lastName: "",
            email: session.customer_details.email,
            address: session.customer_details.address,
            city: session.customer_details.address.city,
            zip: session.customer_details.address.postal_code,
            state: session.customer_details.address.state
        }
        */
}

export async function createOrder(session, line_items) {
    //creating orders in order_items table
    let price = 55

    const hoodieVariants = [
        'TOF Hoodie, Small',
        'TOF Hoodie, Medium',
        'TOF Hoodie, Large'
    ]

    for(const item of line_items) {
        if(hoodieVariants.includes(item.price.product.name)) {
            price = 65
        }
        else {
            price = 55
        }

        await pool.query(`
            INSERT INTO order_items (stripeID, product, quantity, unit_price, orderedBy)
            VALUES (?,?,?,?,?)
            `, [session.id, 
                item.price.product.name, 
                item.quantity, 
                price,
                session.customer_details.name])
    }
}

export async function createPayment(session, line_items) {
    const result = await pool.query(`
        INSERT INTO payments (price, donation, recurring, stripeID, email, fullName, status)
        VALUES (?,?,?,?,?,?,?)
        `, [session.amount_total / 100, 
            false, 
            false,  
            session.id, 
            session.customer_details.email, 
            session.customer_details.name,
            session.payment_status])

        //creating users in users table
        
        createOrder(session, line_items)

        const [rows] = await pool.query(`
            SELECT * FROM users
            WHERE email = (?)
            `, [session.customer_details.email])

        if(rows.length === 0) {
            await createUser(session)
        }

        return {
            price: session.amount_total,
            product: session.metadata.productName,
            donation: false,
            recurring: false,
            status: session.payment_status,
            stripeID: session.id,
            email: session.customer_details.email,
            fullName: session.customer_details.name
        }
}

export async function deleteUser(email) {
    const result = await pool.query(`
        DELETE FROM users
        WHERE email = ?
        `, [email])
    console.log("Deleted user with email " + email)
    return result;
}

/*const user = await getUser(1)
console.log(user)
*/

//const result = await createUser('test1', 'test1', 'test1', 'test1', 'test1', '1')
//console.log(result)

//deleteUser('test1')