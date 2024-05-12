import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Home, About, Contact, Skills } from "./comps/Portal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1 className="m-auto">404</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
