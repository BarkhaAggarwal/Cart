
import React from 'react';



// increaseQuantity= () =>{
    //console.log("this" ,this.state);

    //SET STATE FORM 1
    // this.setState({
    //     qty: this.state.qty+1
    // });

    ///SET STATE FORM 2 -if previous state require use this 
//     this.setState((prevState)=>{
//         return{
//             qty: prevState.qty+1
//         }
//     });
// }

// decreaseQuantity =()=>{
//     const {qty} = this.state;
//     if (qty===0){
//         return;
//     }
//     this.setState({
//         qty: this.state.qty-1
//     });
// }

const CartItem =(props)=>{

        const{price, title, qty} = props.product;
        const { product , onIncreaseQuantity, onDecreaseQuantity ,  onDeleteProduct} = props;
        return(
            <div className='cart-item'>
             <div className="left-block">
              <img  style={styles.image} src={product.img}/>
             </div>
             <div className="right-block">
                 <div style={ {fontSize: 25}}>{title}</div>
                 <div style={{color: '#777'} }>Rs: {price}</div>
                 <div style={ {color: '#777'}}>Qty:{qty}</div>
                 <div className="cart-item-actions">
                     {/* Buttons */}
                     <img  
                     alt="increase" 
                     className="action-icons" 
                     src="https://image.flaticon.com/icons/png/512/709/709484.png" 
                     onClick={()=> onIncreaseQuantity(product)}
                     />
                     <img  
                     alt="decrease" 
                     className="action-icons" 
                     src="https://image.flaticon.com/icons/png/512/659/659892.png" 
                     onClick={()=> onDecreaseQuantity(product)}
                     />
                     <img  
                     alt="delete" 
                     className="action-icons" 
                     src="https://image.flaticon.com/icons/png/512/1345/1345874.png" 
                     onClick={ ()=>  onDeleteProduct(product.id)}
                     />

                 </div>
             </div>


            </div>


        );

      
 
    
}

const styles={
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'

    }
}






export default CartItem;