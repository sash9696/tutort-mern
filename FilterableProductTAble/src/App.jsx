import React, { useEffect, useState } from 'react';
import { getProductsData } from './api/products';
import { FilterableProductTable } from './components';

//break the app into pieces called as components
//we decide visual staes for each components
//we connect the components together


//step 1 => break the components into sub components
//single responsibilty principle => a component should ideally do onlt one thing
//if component size grows then divide sub components


//step 2 => build a stactic page in react
//static is only writing code and not logic
//build components, reue components , u can pass data s props to subcomponents
//top - down approach or bottom to up approach(big apps)

//step 3 => define a minimal state requirement

//DRY
// cart in ecomm store => array in a state
//number of items in the cart => compute on demand

//in our case these arre the pieces of data for this app
//list of products
//search text entered by user
//value of checkbox
//filtered products

//it should not be a state for these cases
//is it unchanged over time
//is it coming via props from parent
//can u compute on demand based on some other state or props

//list of products => state
//search text => state
//value of checkbox => state
//filtered products => not a state as it can be computed based on original list


//step 4 => where the state should live

//product table =>  needs to filter based on search text and checbox value
//search bar => needs to display that state search text and checbox value

//step 5 => user interactions



function App() {
  const [productsData, setProductsData] = useState([]);
  async function fetchProductsData(){

    const data = await getProductsData();
    // console.log(data)
    setProductsData(data);
  }

  //side effects => connecting an external system

  // useEffect(callback, depedencyArray(optional))

  useEffect(() => {
    fetchProductsData();

  }, [])

  return (
    <div>
      <h1>Search Products Table</h1>

      <FilterableProductTable products={productsData}  />

    </div>
  )
}

export default App