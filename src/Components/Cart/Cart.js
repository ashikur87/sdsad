import React from 'react';

const Cart = ({cart,handleRemove}) => {
    return (
        <div>
            order summary:{cart.length}
            {
                cart.map(shirt=><p key={shirt._id}>{shirt.name} <button onClick={()=>handleRemove(shirt._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;