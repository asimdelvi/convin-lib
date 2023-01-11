import React, { useState } from "react";
import { Input, Card, Button } from "antd";
import { useDispatch } from "react-redux";
import { addNewVideo } from "../features/videoLib/videoSlice";

export const NewVideo = () => {
  const [name, setName] = useState("");
  const [video, setVideo] = useState("");
  const [bucket, setBucket] = useState("");

  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(addNewVideo({ name, videoURL: video, bucket }));
    setName("");
    setBucket("");
    setVideo("");
  };

  return (
    <Card style={{ width: 400 }}>
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="videoURL"
        value={video}
        onChange={(e) => setVideo(e.target.value)}
      />
      <Input
        placeholder="Bucket"
        value={bucket}
        onChange={(e) => setBucket(e.target.value)}
      />
      <Button type="primary" onClick={onClickHandler}>
        Create
      </Button>
    </Card>
  );
};
