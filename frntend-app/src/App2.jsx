import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './Main.jsx';
import './index.css';
import ProductById from "./ProductById.jsx";
import SearchProducts from "./SearchProducts.jsx";
import Cart from "./Cart.jsx";
import ContactSection from "./Contact.jsx";
import RegisterForm from './SignUP.jsx'
import SignInForm from "./Login.jsx";
import ProtectedRoute from './ProtectedRoute';
import Checkout from './CheckOut.jsx'
import Order from "./order.jsx";
const App2 = () => {
return(
<>
<BrowserRouter>
<Routes>
<Route path="/" element={<RegisterForm/>}/>
<Route path="/home" element={<Main/>}/>
<Route path="/product/:id" element={<ProtectedRoute><ProductById /></ProtectedRoute>}/>
<Route path="/search/:searchTerm" element={<ProtectedRoute><SearchProducts/></ProtectedRoute>}/>
<Route path="/cart" element={ <ProtectedRoute> <Cart /> </ProtectedRoute>}/>
<Route path="/contact" element={ <ProtectedRoute><ContactSection/></ProtectedRoute>}/>
<Route path="/login" element={<SignInForm/>}/>
<Route path="/checkout" element={<Checkout/>} />
<Route path="/orders" element={<Order/>} />
</Routes>
</BrowserRouter>
</>
)
};
export default App2;