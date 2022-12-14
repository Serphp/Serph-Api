import Navbar from "../components/navbar";
import LayoutP from "../Layouts/LayoutP";

import { Routes, Route} from 'react-router-dom';
import Inicio from "../pages/Inicio";
import Contacto from "../pages/Contacto";
import Blog from "../pages/Blog";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer";


const App = () => {
  return (
    <>
    {/* ESTRUCTURA DE INICIO / HOME*/}
    <main className="container-sm">
    <Navbar />
      <Routes path="/" element={<LayoutP />}>
            <Route element={<Inicio />} index></Route>
            <Route element={<Contacto />} path="/Contacto"></Route>
            <Route element={<Blog />} path="/Blog"></Route>
            <Route element={<NotFound />} path="*"></Route>
      </Routes>

      <Footer/>
      </main>
    </>
  )
}

export default App;