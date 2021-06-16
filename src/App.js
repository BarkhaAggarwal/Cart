import { render } from '@testing-library/react';
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';



class App extends React.Component {
  constructor(){
    super();
    this.state ={
       products:[{
        price: 999,
        title: ' Mobile Phone',
        qty: 1,
        img :'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        id: 1
       },
       {  price: 99,
        title: 'Watch',
        qty: 10,
        img :'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        id: 2
       },
       {
        price: 10000,
        title: 'Laptop',
        qty: 3,
        img :'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
        id: 3
     }

       ]
    }
}
 
handleIncreaseQuantity=(product)=>{
    const{products} = this.state;
    const index= products.indexOf(product);
    products[index].qty +=1;

    this.setState({
         products
    })
 }

 handleDeleteProduct=(id)=>{
     const{products}= this.state;
     const items= products.filter((item)=> item.id !== id );

     this.setState({
         products: items
     })
 }

   
handleDecreaseQuantity=(product)=>{
    const{products} = this.state;
    const index= products.indexOf(product);
    
    if( products[index].qty===0){
        return;
    }
        
    products[index].qty -=1;

    this.setState({
         products
    })
 }
 getCartCount=()=>{
   const {products}= this.state;
  
   let count =0;
   
   products.forEach((product)=>{
     count+= product.qty;
   })

   return count;
 }
 
 getCartTotal =()=>{
  const {products}= this.state;

  let cartTotal=0;

  products.map((product)=>{
    cartTotal= cartTotal+ product.qty* product.price;
  })

  return cartTotal;
}


  render() {
    const {products}= this.state;

  return (
    <div className="App">
      <Navbar count ={this.getCartCount()}/>
    <Cart 
    products= {products}
     onIncreaseQuantity={this.handleIncreaseQuantity}
     onDecreaseQuantity={this.handleDecreaseQuantity}
     onDeleteProduct = {this.handleDeleteProduct}
    
    />
    <div style={ {padding:10, fontSize: 20}}>Total : {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
