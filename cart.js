let carts = document.querySelectorAll('.add');

let products = [
    {
        name: 'Blue Shirt',
        price: 15,
        tag: 'blue shirt',
        inCart: 0
    },
    {
        name: 'Puma Jacket',
        price: 35,
        tag: '17',
        inCart: 0
    },
    {
        name: 'Blue Jacket',
        price: 25,
        tag: 'blue jacket',
        inCart: 0
    },
    {
        name: 'Afican',
        price: 40,
        tag: 'african',
        inCart: 0
    },
    {
        name: 'Green Dress',
        price: 20,
        tag: 'card1',
        inCart: 0
    },
    {
        name: 'Blue shirt with bag',
        price: 110,
        tag: 'card2',
        inCart: 0
    },
    {
        name: 'White top and down',
        price: 75,
        tag: 'card3',
        inCart: 0
    },
    {
        name: 'White T-shirt and jeans',
        price: 80,
        tag: 'man',
        inCart: 0
    },
]


for (let i=0; i < carts.length; i++)
{
    carts[i].addEventListener('click', () => {
        cartNumber(products[i]);

        totalCost(products[i])
    })
}

function cartNumber(products)
{
    let productNumbers = localStorage.getItem('cartNumber');

    productNumbers = parseInt(productNumbers);

    if(productNumbers)
    {
        localStorage.setItem('cartNumber', productNumbers + 1);
    }
    else
    {
        localStorage.setItem('cartNumber', 1);
    }
   
    setItems(products);

}

function setItems(products)
{
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null)
    {
        if(cartItems[products.tag] == undefined)
        {
            cartItems = {
                ...cartItems,
                [products.tag]:products
            }
        } 
        cartItems[products.tag].inCart += 1;    
    }
   
    
    else
    {
        products.inCart = 1; 
    
        cartItems = 
        {
            [products.tag]:products
        }
    
    }
  
  
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

    function totalCost(product)
    {
       // console.log(product.price);
       let cartCost = localStorage.getItem('totalCost');
      
       console.log(cartCost);

       if(cartCost != null)
       
       {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
       }
       else{
        localStorage.setItem('totalCost', product.price);
       } 
    }


    function displayCart()
    {
        let cartItems= localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector('.product_body');
        let cartCost = localStorage.getItem('totalCost');

        console.log(cartItems);
        if(cartItems && productContainer)
        {
                productContainer.innerHTML = '';
                Object.values(cartItems).map(item => {
                    productContainer.innerHTML += ` 
                    <div.class='product_body'>
                        <img src= 'img/delete.png' class="delete">
                        <img src= 'img/${item.tag}.jpg' class="item"> <img src="img/${item.tag}.png" class='item'>
                        <p>${item.name}</p>
                    </div>
                    
                    <div class="price">
                        ${item.price}
                    </div>
                    <div class="quantity"> ${item.inCart}</div>
                    <div class="total"> ${item.inCart * item.price}.00
                    </div><br/>

                    `
                });

                productContainer.innerHTML += `
                <div class - "basketTotal">
                    <h4 class="bTT">
                    Basket Total
                    </h4>
                    <h4 class="bT">
                    $${cartCost}.00
                </div>
                `
        }
    }

    displayCart();