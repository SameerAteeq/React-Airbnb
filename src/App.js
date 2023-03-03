import Home from "./components/home/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/login/index.js";
import Signup from "./components/Auth/signup/index.js";
import { Toaster } from "react-hot-toast";
import BecomeHost from "./components/become-host/index.js";
import Navbar from "./components/navbar/index.js";
import Room from "./components/room/index.js";
import ProfileHome from "./components/profileHome/index.js";
import PlaceDetail from "./components/profileHome/placeDetail/index.js";
import Wishlist from "./components/profileHome/wishlist/index.js";
function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <div className="flex flex-col h-full">
          {/* <Navbar /> */}
          <Routes>
            <Route path="/">
              <Route index element={<ProfileHome />} />
              <Route path="/:id" element={<PlaceDetail />} />
              <Route path="/become-a-host" element={<BecomeHost />} />
              <Route path="overview" element={<Home />} />
              <Route path="/:id/:tab" element={<Room />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
