import { useEffect } from "react";
import './Product.css'
import { useDispatch, useSelector } from "react-redux";
import { add } from '../store/cartSlice'
import { getProducts } from '../store/productSlice'
const Product = () => {

  const dispatch = useDispatch()
  const { data:products } = useSelector(state=> state.products)

  useEffect(() => {
    //dispatch action for fetch products
    dispatch(getProducts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


 const addToCart = (prod)=>{
    //dispatch an action
    dispatch(add(prod))
 }


  return (
    <div>
      <div className="row">
        {
            products.map((prod)=>{
                return (
                    <div key={prod.id} className="card">
                        <div>
                        <div className="image-div">
                            <img src={prod.image} alt="products_img" />
                        </div>
                        <div className="card-body">
                            <h3>{prod.title}</h3>
                            <p>{prod.description}</p>
                            <p>${prod.price}</p>
                            <button onClick={()=> addToCart(prod)}>Add to cart</button>
                        </div>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default Product;
