import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home";
import { NewVideo } from "./components/newVideo";
import { Video } from "./components/video";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/videos">All Videos</Link>
          <Link to="/videos/new">Add New Video</Link>
        </nav>
        <Routes>
          <Route path="/videos" element={<Home />}></Route>
          <Route path="/videos/:id" element={<Video />}></Route>
          <Route path="/videos/new" element={<NewVideo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }

export default App;
