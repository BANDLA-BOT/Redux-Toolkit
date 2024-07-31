import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Cart from './component/Cart'
import RootElement from './RootElement'
const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootElement/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))



  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App