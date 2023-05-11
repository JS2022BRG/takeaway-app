import { menuArray } from './data.js'

console.log(menuArray[2].id)

document.addEventListener('click', function(e){
    if(e.target.dataset.order){
        handleOrderClick(e.target.dataset.order)
    }
})

function getFeedHtml () {
    let menuHtml = ''

menuArray.forEach(function(item){
    menuHtml += 
    `
    <div class="order">
    <div class="order-logo">    
    ${item.emoji}
    </div>
    <div class="order-name">
    <h3 class="menu-h3">${item.name}</h3>
    <p class=""menu-ingredients>${item.ingredients}</p>
    <p class="menu-price">${item.price} $</p>
    <button class="order-btn" id="order-btn-${item.id}" data-order="${item.id}">+</button>
    </div>  
    </div>
    `
})
return menuHtml
}

console.log(`${menuArray[0].id}`)




/* Add event listener to + order button, make it render a list: Your order, item name, button: "remove", price, border-bottom, total price and "Complete order" button */

function render () {
    document.getElementById('main-menu').innerHTML = getFeedHtml();
}

render()

function handleOrderClick(item) {
    console.log('You clicked button with id ', item.id)
    const menuItem = menuArray.filter(function(item) {
        return item.id = item
    })[0]
console.log(menuItem)
}

const orderBtn = document.getElementById('order-btn')
orderBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log('btn clicked')
})