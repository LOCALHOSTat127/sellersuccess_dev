import "./stylesheets/app.css";
import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Cpolicy from "./Pages/CookeiPolicy/Cpolicy";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="sellersuccess__webapp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<h1>About us</h1>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<Cpolicy />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
