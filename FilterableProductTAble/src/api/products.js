export function getProductsData(){
    return new Promise((resolve, rej) => {
  
      const products = [
        {
          category: "Electronics", price:"₹40000", stocked:true, name:"Laptop"
        },
        {
          category: "Electronics", price:"₹100000", stocked:false, name:"Iphone"
        },
        {
          category: "Clothing", price:"₹1000", stocked:false, name:"Tshirt"
        },
        {
          category: "Clothing", price:"₹1000", stocked:true, name:"jeans"
        },
        {
          category: "Grocery", price:"₹400", stocked:true, name:"item1"
        },
        {
          category: "Grocery", price:"₹200", stocked:false, name:"item2"
        },
      ];
  
      setTimeout(() => {
        resolve(products)
      }, 100)
    })
  }