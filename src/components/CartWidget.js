import cart from './Logo/cart.png';

const CartWidget = ({totalQuantity, totalPrice}) => {
    return (
        <div >
            <img src={cart}  alt="logo"   width="30px"   />
            Cantidad de productos: {totalQuantity} .... Precio total: ${totalPrice}
        </div>
            
    );
};

export default CartWidget;