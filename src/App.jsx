import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Collections from "./pages/Collections";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BulkOrder from "./pages/BulkOrder";

import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";


function App() {


const [loading,setLoading] = useState(true);



useEffect(()=>{


setTimeout(()=>{

setLoading(false);

},2000)


},[]);



if(loading){

return <Loader/>

}



return (

<BrowserRouter>

<ScrollToTop />

<Navbar />


<Routes>

<Route path="/" element={<Home />} />

<Route path="/collections" element={<Collections />} />

<Route path="/product/:id" element={<ProductDetails />} />

<Route path="/about" element={<About />} />

<Route path="/contact" element={<Contact />} />

<Route path="/bulk-order" element={<BulkOrder />} />


</Routes>


<Footer />


</BrowserRouter>

);

}


export default App;