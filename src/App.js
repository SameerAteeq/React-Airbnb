import { blogList } from "./data.js";
import { motion, Variants } from "framer-motion";
import Home from "./components/home/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Step1 from "./components/home/step1/index.js";
import Structure from "./components/home/step1/structure/index.js";
import PrivacyType from "./components/home/step1/privacyType/index.js";
import Location from "./components/home/step1/location/index.js";
import Floor from "./components/home/step1/floor/index.js";
import Step2 from "./components/home/step2/index.js";
import Animities from "./components/home/step2/amenities/index.js";
import Photos from "./components/home/step2/photos/index.js";
import Title from "./components/home/step2/title/index.js";
import Description from "./components/home/step2/description/index.js";
import Step3 from "./components/home/step3/index.js";
import Visibility from "./components/home/step3/visibility/index.js";
import Price from "./components/home/step3/price/index.js";
import Legal from "./components/home/step3/legal/index.js";
import Receipt from "./components/home/step3/receipt/index.js";
import Login from "./components/Auth/login/index.js";
import Signup from "./components/Auth/signup/index.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step1">
            <Route index element={<Step1 />} />
            <Route path="structure" element={<Structure />} />
            <Route path="privacy-type" element={<PrivacyType />} />
            <Route path="location" element={<Location />} />
            <Route path="floor-plan" element={<Floor />} />
          </Route>
          <Route path="/step2">
            <Route index element={<Step2 />} />
            <Route path="animities" element={<Animities />} />
            <Route path="photos" element={<Photos />} />
            <Route path="title" element={<Title />} />
            <Route path="description" element={<Description />} />
          </Route>
          <Route path="/step3">
            <Route index element={<Step3 />} />
            <Route path="visibility" element={<Visibility />} />
            <Route path="price" element={<Price />} />
            <Route path="legal" element={<Legal />} />
            <Route path="receipt" element={<Receipt />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
