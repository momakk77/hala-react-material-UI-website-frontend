import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Photo from "./pages/Photo";


function App() {
  return (
    <>
      {/* <Link to={"/about"}>
      
      </Link> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="photo/:id" element={<Photo />}/>
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
