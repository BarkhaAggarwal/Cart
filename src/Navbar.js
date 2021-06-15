
import React from 'react';

const Navbar =(props)=>{

    return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://img-premium.flaticon.com/png/512/2543/premium/2543369.png?token=exp=1623771632~hmac=ff6853d8889c7adfdc28c33cf3a71492 " alt="cart-icon"/>
                <span style={styles.cartCount}>3</span>
            </div>
        </div>
      


    );

}

   

      

const styles={
cartIcon: {
    height:32,
    marginRight: 20
},
nav:{
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
},
cartIconContainer:{
    position: 'relative'
},
cartCount:{
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right:0,
    top:-9

}
};
export default Navbar;