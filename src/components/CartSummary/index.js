import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalAmount = cartList.reduce(
        (total, product) => total + product.price * product.quantity,
        0,
      )

      return (
        <div className="cart-summary">
          <h1 className="order-total">
            Order Total :{' '}
            <span className="order-total-price">RS {totalAmount}/- </span>
          </h1>
          <p className="items-p">{cartList.length} Items in cart</p>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
