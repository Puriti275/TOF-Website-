let hoodieQuantity = 0;
let sweatshirtQuantity = 0;
let price = 0;
let hoodiePrice = 0;
let sweatshirtPrice = 0;
let hoodieSizes = [0, 0, 0];
let sweatshirtSizes = [0, 0, 0];

const hoodieSmallCart = document.getElementById("hoodie-small-cart");
const hoodieMediumCart = document.getElementById("hoodie-medium-cart");
const hoodieLargeCart = document.getElementById("hoodie-large-cart");

const hoodieSmall = document.getElementById("hoodie-small");
const hoodieMedium = document.getElementById("hoodie-medium");
const hoodieLarge = document.getElementById("hoodie-large");

const sweatshirtSmallCart = document.getElementById("sweatshirt-small-cart");
const sweatshirtMediumCart = document.getElementById("sweatshirt-medium-cart");
const sweatshirtLargeCart = document.getElementById("sweatshirt-large-cart");

const sweatshirtSmall = document.getElementById("sweatshirt-small");
const sweatshirtMedium = document.getElementById("sweatshirt-medium");
const sweatshirtLarge = document.getElementById("sweatshirt-large");

var pop = document.getElementById("pop");
var add = document.getElementById("add");

document.getElementById("merch-cart").style.display = "none";

function cartOpen() {
    document.getElementById("merch-cart").style.display = "block";
}

function cartClose() {
    document.getElementById("merch-cart").style.display = "none";
}

function addHoodieToCart() {
    hoodieQuantity++;
    price += 65;
    hoodiePrice += 65;

    if(hoodieSmall.checked || hoodieSmallCart.checked) {
        hoodieSizes[0]++;
        document.getElementById("hoodie").innerHTML = "Quantity: " + hoodieSizes[0] + " smalls, " + hoodieSizes[1] + " mediums, " + hoodieSizes[2] + " larges, $65 each";
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Items | $" + price;
        document.getElementById("TOF-Hoodie").innerHTML = "TOF Hoodie: " + "$" + hoodiePrice;
        add.play()
    }
    else if(hoodieMedium.checked || hoodieMediumCart.checked) {
        hoodieSizes[1]++;
        document.getElementById("hoodie").innerHTML = "Quantity: " + hoodieSizes[0] + " smalls, " + hoodieSizes[1] + " mediums, " + hoodieSizes[2] + " larges, $65 each";
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Items | $" + price;
        document.getElementById("TOF-Hoodie").innerHTML = "TOF Hoodie: " + "$" + hoodiePrice;
        add.play()
    }
    else if(hoodieLarge.checked || hoodieLargeCart.checked) {
        hoodieSizes[2]++;
        document.getElementById("hoodie").innerHTML = "Quantity: " + hoodieSizes[0] + " smalls, " + hoodieSizes[1] + " mediums, " + hoodieSizes[2] + " larges, $65 each";
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Items | $" + price;
        document.getElementById("TOF-Hoodie").innerHTML = "TOF Hoodie: " + "$" + hoodiePrice;
        add.play()
    }


    //document.getElementById("hoodie").innerHTML = "Quantity: " + hoodieQuantity + ", $65 each";
    
    /*
    if(sweatshirtQuantity + hoodieQuantity === 1) {
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Item | $" + price;
    }
    else {
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Items | $" + price;
    }
    document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Items | $" + price;
    document.getElementById("TOF-Hoodie").innerHTML = "TOF Hoodie: " + "$" + hoodiePrice;
    */
}

function addSweatshirtToCart() {
    sweatshirtQuantity++;
    price += 55;
    sweatshirtPrice += 55;

    if(sweatshirtSmall.checked || sweatshirtSmallCart.checked) {
        sweatshirtSizes[0] += 1;
        document.getElementById("sweatshirt").innerHTML = "Quantity: " + sweatshirtSizes[0] + " smalls, " + sweatshirtSizes[1] + " mediums, " + sweatshirtSizes[2] + " larges, $55 each";
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Items | $" + price;
        document.getElementById("TOF-Sweatshirt").innerHTML = "TOF Sweatshirt: " + "$" + sweatshirtPrice;
        add.play()
    }
    else if(sweatshirtMedium.checked || sweatshirtMediumCart.checked) {
        sweatshirtSizes[1] += 1;
        document.getElementById("sweatshirt").innerHTML = "Quantity: " + sweatshirtSizes[0] + " smalls, " + sweatshirtSizes[1] + " mediums, " + sweatshirtSizes[2] + " larges, $55 each";
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Items | $" + price;
        document.getElementById("TOF-Sweatshirt").innerHTML = "TOF Sweatshirt: " + "$" + sweatshirtPrice;
        add.play()
    }
    else if(sweatshirtLarge.checked || sweatshirtLargeCart.checked) {
        sweatshirtSizes[2] += 1;
        document.getElementById("sweatshirt").innerHTML = "Quantity: " + sweatshirtSizes[0] + " smalls, " + sweatshirtSizes[1] + " mediums, " + sweatshirtSizes[2] + " larges, $55 each";
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Items | $" + price;
        document.getElementById("TOF-Sweatshirt").innerHTML = "TOF Sweatshirt: " + "$" + sweatshirtPrice;
        add.play()
    }
}

function removeHoodieFromCart() {
    if (hoodieQuantity === 0) {
        document.getElementById("hoodie").innerHTML = "Quantity: " + hoodieSizes[0] + " smalls, " + hoodieSizes[1] + " mediums, " + hoodieSizes[2] + " larges, $65 each";
    }
    else if(hoodieSmallCart.checked && hoodieSizes[0] != 0) {
        hoodieSizes[0]--;
        hoodieQuantity--;
        price -= 65;
        hoodiePrice -= 65;
        document.getElementById("hoodie").innerHTML = "Quantity: " + hoodieSizes[0] + " smalls, " + hoodieSizes[1] + " mediums, " + hoodieSizes[2] + " larges, $65 each";
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Items | $" + price;
        document.getElementById("TOF-Hoodie").innerHTML = "TOF Hoodie: " + "$" + hoodiePrice;
        pop.play()
    }
    else if(hoodieMediumCart.checked && hoodieSizes[1] != 0) {
        hoodieSizes[1]--;
        hoodieQuantity--;
        price -= 65;
        hoodiePrice -= 65;
        document.getElementById("hoodie").innerHTML = "Quantity: " + hoodieSizes[0] + " smalls, " + hoodieSizes[1] + " mediums, " + hoodieSizes[2] + " larges, $65 each";
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Items | $" + price;
        document.getElementById("TOF-Hoodie").innerHTML = "TOF Hoodie: " + "$" + hoodiePrice;
        pop.play()
    }
    else if(hoodieLargeCart.checked && hoodieSizes[2] != 0) {
        hoodieSizes[2]--;
        hoodieQuantity--;
        price -= 65;
        hoodiePrice -= 65;
        document.getElementById("hoodie").innerHTML = "Quantity: " + hoodieSizes[0] + " smalls, " + hoodieSizes[1] + " mediums, " + hoodieSizes[2] + " larges, $65 each";
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Items | $" + price;
        document.getElementById("TOF-Hoodie").innerHTML = "TOF Hoodie: " + "$" + hoodiePrice;
        pop.play()
    }

    /*
    if(hoodieQuantity == 0) {
        document.getElementById("hoodie").innerHTML = "Quantity: " + hoodieQuantity;
    }
    else if(hoodieQuantity + sweatshirtQuantity === 2) {
        hoodieQuantity -= 1;
        price -= 65;
        hoodiePrice -= 65;
        document.getElementById("hoodie").innerHTML = "Quantity: " + hoodieQuantity + ", $65 each";
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Item | $" + price;
        document.getElementById("TOF-Hoodie").innerHTML = "TOF Hoodie: " + "$" + hoodiePrice;
    }
    else {
        hoodieQuantity -= 1;
        price -= 65;
        hoodiePrice -= 65;
        document.getElementById("hoodie").innerHTML = "Quantity: " + hoodieQuantity + ", $65 each";
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Items | $" + price;
        document.getElementById("TOF-Hoodie").innerHTML = "TOF Hoodie: " + "$" + hoodiePrice;
    }
    */
}

function removeSweatshirtFromCart() {
    if(sweatshirtQuantity === 0) {
        document.getElementById("sweatshirt").innerHTML = "Quantity: " + sweatshirtSizes[0] + " smalls, " + sweatshirtSizes[1] + " mediums, " + sweatshirtSizes[2] + " larges, $55 each";
    }
    else if(sweatshirtSmallCart.checked && sweatshirtSizes[0] != 0) {
        sweatshirtSizes[0]--;
        sweatshirtQuantity--;
        price -= 55;
        sweatshirtPrice -= 55;
        document.getElementById("sweatshirt").innerHTML = "Quantity: " + sweatshirtSizes[0] + " smalls, " + sweatshirtSizes[1] + " mediums, " + sweatshirtSizes[2] + " larges, $55 each";
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Items | $" + price;
        document.getElementById("TOF-Sweatshirt").innerHTML = "TOF Sweatshirt: $" + sweatshirtPrice;
        pop.play()
    }
    else if(sweatshirtMediumCart.checked && sweatshirtSizes[1] != 0) {
        sweatshirtSizes[1]--;
        sweatshirtQuantity--;
        price -= 55;
        sweatshirtPrice -= 55;
        document.getElementById("sweatshirt").innerHTML = "Quantity: " + sweatshirtSizes[0] + " smalls, " + sweatshirtSizes[1] + " mediums, " + sweatshirtSizes[2] + " larges, $55 each";
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Items | $" + price;
        document.getElementById("TOF-Sweatshirt").innerHTML = "TOF Sweatshirt: $" + sweatshirtPrice;
        pop.play()
    }
    else if(sweatshirtLargeCart.checked && sweatshirtSizes[2] != 0) {
        sweatshirtSizes[2]--;
        sweatshirtQuantity--;
        price -= 55;
        sweatshirtPrice -= 55;
        document.getElementById("sweatshirt").innerHTML = "Quantity: " + sweatshirtSizes[0] + " smalls, " + sweatshirtSizes[1] + " mediums, " + sweatshirtSizes[2] + " larges, $55 each";
        document.getElementById("view-cart").innerHTML = "View Cart | " + (hoodieQuantity + sweatshirtQuantity) + " Items | $" + price;
        document.getElementById("TOF-Sweatshirt").innerHTML = "TOF Sweatshirt: $" + sweatshirtPrice;
        pop.play()
    }
}

function getCartData() {
    return [
        {id: 1, product: "hoodie", quantity: hoodieQuantity, size: hoodieSize},
        {id: 2, product: "sweatshirt", quantity: sweatshirtQuantity, size: sweatshirtSize}
    ];
}

function checkout() {
    fetch('http://localhost:8080/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            items: [
                {id: 1, quantity: hoodieSizes[0] },
                {id: 2, quantity: hoodieSizes[1] },
                {id: 3, quantity: hoodieSizes[2] },
                {id: 4, quantity: sweatshirtSizes[0] },
                {id: 5, quantity: sweatshirtSizes[1] },
                {id: 6, quantity: sweatshirtSizes[2] }
            ],
        })
    })
    .then(res => {
        if (res.ok) return res.json()
        else return res.json().then(json => Promise.reject(json))
    })
    /*.then(res => {
        items: Object.entries(cart).map(([id, quantity]) => {
            id: Number(id),
            quantity
        })
    })*/
    .then(({ url }) => {
        window.location = url
    })
    .catch(e => {
        console.error(e.error)
    })
}