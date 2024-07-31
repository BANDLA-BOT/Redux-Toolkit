import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { remove } from "../store/cartSlice"

const Cart = () => {
    const cartProducts = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const removeFromCart = (id)=>{
        dispatch(remove(id))
    }
  return (
   <>
    <div>
    {
        cartProducts.map((prod)=>{
            return(
                <div key={prod.id}>
                    <img src={prod.image} alt="" />
                    <h3>{prod.title}</h3>
                    <p>{prod.price}</p>
                    <p>{prod.description}</p>
                    <button onClick={()=>removeFromCart(prod.id)}>Remove from Cart</button>
                </div>
            )
        })
    }
    </div>
   
   </>
  )
}

export default Cart