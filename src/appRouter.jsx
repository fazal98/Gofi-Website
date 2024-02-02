import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import { About, Contact, Gallery,Home, Menu, } from "./pages";

const restaurantRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="menu/:categoryId" element={<Menu />} />
      <Route path="*" element={<div>404 not found</div>}/>
    </Route>
  )
);

export default restaurantRouter;