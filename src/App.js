import "./stylesheets/app.css";
import Layout from "./Layout";
import Home from "./Pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="sellersuccess__webapp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<h1>About us</h1>} />
            <Route path="/services" element={<h1>Services</h1>} />
            <Route path="/contact" element={<h1>Contact us</h1>} />
            <Route path="*" element={<h1>Page Not Found!</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
