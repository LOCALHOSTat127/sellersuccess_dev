import "./stylesheets/app.css";
import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Cpolicy from "./Pages/CookeiPolicy/Cpolicy";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import About from "./Pages/About/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="sellersuccess__webapp">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<Cpolicy />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
