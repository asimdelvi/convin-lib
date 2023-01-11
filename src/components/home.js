import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveVideos } from "../features/videoLib/videoSlice";
import { VideoCard } from "./videoCard.js";
import { BucketSelect } from "./bucketSelect";
import { Typography } from "antd";

const { Title } = Typography;

export function Home() {
  const { videos } = useSelector((state) => state.video);
  const { bucket } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveVideos());
  }, [dispatch]);

  return (
    <div>
      <Title level={2}>videoLibrary</Title>
      <BucketSelect />
      <div>
        {videos.map((video) => {
          if (video.bucket === bucket || bucket === "all") {
            return (
              <VideoCard
                key={video.id}
                id={video.id}
                name={video.name}
                url={video.videoURL}
                bucket={video.bucket}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
