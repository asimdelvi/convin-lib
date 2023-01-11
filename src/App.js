// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { retrieveVideos } from "./features/videoLib/videoSlice";
import { VideoCard } from "./components/videoCard.js";
import { NewVideo } from "./components/newVideo.js";
import { Typography } from "antd";

const { Title } = Typography;

function App() {
  const { videos } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveVideos());
  }, [dispatch]);

  return (
    <div>
      <Title level={2}>videoLibrary</Title>
      <div>
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            name={video.name}
            url={video.videoURL}
            bucket={video.bucket}
          />
        ))}
      </div>
      <div>
        <div>Add New Video</div>
        <NewVideo />
      </div>
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
