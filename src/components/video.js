import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Video = () => {
  const { id } = useParams();
  const { videos } = useSelector((state) => state.video);

  console.log(videos);
  let videoURL;

  for (const video of videos) {
    // eslint-disable-next-line eqeqeq
    console.log(video, video.id, id, video.id == id);
    // eslint-disable-next-line eqeqeq
    if (video.id == id) {
      videoURL = video.videoURL;
    }
  }

  function getVideoId(url) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length === 11)
      return `https://www.youtube.com/embed/${match[7]}`;
    return false;
  }

  console.log(videoURL);
  return (
    <iframe
      width="560"
      height="315"
      src={getVideoId(videoURL)}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
};
