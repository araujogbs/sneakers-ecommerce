function menuOpen() {
    let menumobile = document.querySelector('.menumobile')
    if (menumobile.classList.contains('open')) {
        menumobile.classList.remove('open')
    }
    else {
        menumobile.classList.add('open')
    }
}

function cartOpen() {


    let cart = document.querySelector('.cart')
    if (cart.classList.contains('opencart')) {
        cart.classList.remove('opencart')
    }
    else {
        cart.classList.add('opencart')
    }
}

function cartOC() {
    let cartinvisible = document.querySelector('.subcart')
    if (cartinvisible.classList.contains('cartAP')) {
        cartinvisible.classList.add('cartAP')
    }
    else {
        cartinvisible.classList.add('cartAP')
    }
}

let btncart = document.querySelector("#addtocart")

btncart.addEventListener('click', () => {
    cartOC()
    addtoCart()
})



function cartClose() {
    let cartinvisible = document.querySelector('.subcart')
    if (cartinvisible.classList.contains('cartAP')) {
        cartinvisible.classList.remove('cartAP')
    }
    else {
        cartinvisible.classList.remove('cartAP')
    }
}








let quantity = Number(document.getElementById('quantity').innerText)


function add() {
    quantity = ++quantity
    return quantity

}

function updateadd() {
    document.getElementById('quantity').innerHTML = add(quantity)

}

function decrement() {
    if (quantity >= 1) {
        quantity = --quantity
        return quantity
    } else {
        return quantity = 0
    }
}

function updatedecrement() {

    document.getElementById('quantity').innerHTML = decrement(quantity)


}

function addtoCart() {


    document.getElementById('quantityproducts').innerHTML = quantity



    document.getElementById('totalprice').innerHTML = '$' + 125 * quantity + '.00'
}



let img1 = 'image-product-1.jpg'
let img2 = 'image-product-2.jpg'
let img3 = 'image-product-3.jpg'
let img4 = 'image-product-4.jpg'

function switchimg1(){ 
    document.getElementById('productphoto1').src = img1
}
function switchimg2(){ 
    document.getElementById('productphoto1').src = img2
}
function switchimg3(){ 
    document.getElementById('productphoto1').src = img3
}
function switchimg4(){ 
    document.getElementById('productphoto1').src = img4
}
