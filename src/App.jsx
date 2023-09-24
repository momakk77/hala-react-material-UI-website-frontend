import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Photo from "./pages/Photo";
import  Menu  from "./pages/Menu"


function App() {
  return (
    <>
      {/* <Link to={"/about"}>
      
      </Link> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="photo/:id/:category" element={<Photo />} />
          <Route path="menu" element={<Menu />} />
          <Route path="/" element={<Layout />}>
            <Route path="collection" element={<Collection />} />
            <Route path="about" element={<About />} />
            {/* <Route path='articles' element = {<Articles />}/> */}
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
