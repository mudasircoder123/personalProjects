import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './Main.jsx';
import './index.css';
import ProductById from "./ProductById.jsx";
import SearchProducts from "./SearchProducts.jsx";
import Cart from "./Cart.jsx";
const App2 = () => {
return(
<>
<BrowserRouter>
<Routes>
<Route path="/" element={<Main/>}/>
<Route path="/product/:id" element={<ProductById />} />
<Route path="/search/:searchTerm" element={<SearchProducts/>}/>
<Route path="/cart" element={<Cart/>}/>
</Routes>
</BrowserRouter>
</>
)
};
export default App2;