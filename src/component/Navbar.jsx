import  { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const cartProducts = useSelector(state => state.cart)
  return (
    <div>

        <Link to={'/'}>products</Link>
        <Link to={'/cart'}>Cart {cartProducts.length}</Link>

    </div>
  )
}

export default Navbar