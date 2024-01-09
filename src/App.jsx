// import Home from "./sections/Home";
// import About from "./sections/About";
// import Promo from "./sections/Promo";
// import Services from "./sections/Services";
// // import Cart from "./sections/Cart";

// import Teams from "./sections/Teams";
// import Products from "./sections/Products";
// import Contacts from "./sections/Contacts";
// import Layout from "./component/layout/Layout";

// import ScrollBottom from "./component/layout/ScrollBottom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Layout>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/promo" element={<Promo />} />
//           <Route path="/services" element={<Services />} />
//           {/* <Cart/> */}
//           <Route path="/teams" element={<Teams />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/contacts" element={<Contacts />} />
//           <Route path="/scroll-bottom" element={<ScrollBottom />} />
//         </Routes>
//       </BrowserRouter>
//       </Layout>
//     </>
//   );
// }

// export default App;

import Home from "./sections/Home"
import About from "./sections/About"
import Promo from "./sections/Promo"
import Services from "./sections/Services"
// import Cart from "./sections/Cart"

import Teams from "./sections/Teams"
import Products from "./sections/Products"
import Contacts from "./sections/Contacts"
import Layout from "./component/layout/Layout"

import ScrollBottom from "./component/layout/ScrollBottom"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  return (
  
    <>
     <Layout>      
        <Home/>
       <About/>
       <Promo/>
       <Services/>
       {/* <Cart/> */}
       <Teams/>
       <Products/>
       <Contacts/>
       <ScrollBottom/>
     </Layout>
    </>
    
  )
}

export default App