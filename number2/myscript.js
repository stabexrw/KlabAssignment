const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000} ];

function getLowPriceProduct() {
 let price=1000000;
 let name="";
  for (let i = 0; i < item.length; i++) {
    if (item[i].price <= price) {
        price=item[i].price;
        name=item[i].name;
    }
  }
  console.log("the product that will be bought when you don\'t have much money,");
  console.log("  -----------------------------------------------------------")
  console.log("Product name: "+name);
  console.log("Product Price: "+price);
  
  }

function getExpensiveProduct() {
 let price=0;
  for (let i = 0; i < item.length; i++) {
    if (item[i].price >= price) {
        price=item[i].price;
    }
  }
  console.log("the Expensive Product is");
  console.log("  ----------------------")
  console.log("Product name: "+name);
  console.log("Product Price: "+price);
  }

function getFullProductPrice() {
 let fullprice=0;
  for (let i = 0; i < item.length; i++) {
        fullprice=Number(fullprice)+Number(item[i].price);
  }
  console.log("full price of all product combined is "+fullprice);
  
  }


function getFullProductPriceAboveTen() {
 let fullprice=0;
  for (let i = 0; i < item.length; i++) {
    if (item[i].price >= 10 ) {
        fullprice=Number(fullprice)+Number(item[i].price);
    }
  }
  console.log("full price of all product - under 10 dollar products is "+fullprice);
  
  }

  getLowPriceProduct();
  getExpensiveProduct();
  getFullProductPrice();
  getFullProductPriceAboveTen();