import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Layout, Home, About, Contact, Skills } from "./comps/Portal";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes location={useLocation()} key={useLocation().pathname}>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1 className="m-auto">404</h1>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
