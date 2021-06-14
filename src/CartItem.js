
import React from 'react';
class CartItem extends React.Component{

increaseQuantity= () =>{
    //console.log("this" ,this.state);

    //SET STATE FORM 1
    // this.setState({
    //     qty: this.state.qty+1
    // });

    ///SET STATE FORM 2 -if previous state require use this 
    this.setState((prevState)=>{
        return{
            qty: prevState.qty+1
        }
    });
}

decreaseQuantity =()=>{
    const {qty} = this.state;
    if (qty===0){
        return;
    }
    this.setState({
        qty: this.state.qty-1
    });
}

    render () {
        console.log('this.props' , this.props)
        const{price, title, qty} = this.props.product;
        return(
            <div className='cart-item'>
             <div className="left-block">
              <img  style={styles.image}/>
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
                     onClick={this.increaseQuantity}
                     />
                     <img  
                     alt="decrease" 
                     className="action-icons" 
                     src="https://image.flaticon.com/icons/png/512/659/659892.png" 
                     onClick={this.decreaseQuantity}
                     />
                     <img  
                     alt="delete" 
                     className="action-icons" 
                     src="https://image.flaticon.com/icons/png/512/1345/1345874.png" />

                 </div>
             </div>


            </div>


        );

      
    }
    
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