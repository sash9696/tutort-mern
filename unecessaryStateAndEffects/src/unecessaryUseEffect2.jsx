import React, { useEffect } from 'react'

//event listners

function ProductPage({product, addToCart}){

  //not necessary
  // useEffect(() => {

  //   if(product.isInCart){
  //     showNotification(`Added ${product.name} to the shopping cart!`)
  //   }
  // }, [product])

  function buyProduct(){
    addToCart(product);
    showNotification(`Added ${product.name} to the shopping cart!`)

  }


  function handleBuyClick(){
    buyProduct();
  }

  function handleCheckoutClick(){
    buyProduct();
    navigateTo('/checkout');
  }

}

function App() {


  return (
    <div>App</div>
  )
}

export default App