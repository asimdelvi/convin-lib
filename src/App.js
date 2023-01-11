import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home";
import { NewVideo } from "./components/newVideo";
import { Video } from "./components/video";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="header">
          <h1>videoLib</h1>
          <div>
            <Link to="/videos">All Videos</Link>
            <Link to="/videos/new">Add New Video</Link>
          </div>
        </div>
        <Routes>
          <Route path="/videos" element={<Home />}></Route>
          <Route path="/videos/:id" element={<Video />}></Route>
          <Route path="/videos/new" element={<NewVideo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
