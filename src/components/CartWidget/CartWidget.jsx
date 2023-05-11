import carrito from '../../../public/carrito-de-compra.png'


const CartWidget = () => {

    return (
        <div>
            <img className='carrito' src={carrito}/>
            <span>0</span>
        </div>
    )
}

export default CartWidget