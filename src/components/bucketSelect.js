import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeBucket } from "../features/videoLib/videoSlice";

export const BucketSelect = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.video);
  const bucketList = [{ value: "all", label: "all" }];

  for (const video of videos) {
    if (!bucketList.find((b) => b.value === video.bucket)) {
      bucketList.push({
        value: video.bucket,
        label: video.bucket,
      });
    }
  }

  return (
    <>
      <Select
        defaultValue="all"
        style={{
          width: 120,
        }}
        onChange={(value) => {
          dispatch(changeBucket(value));
        }}
        options={bucketList}
      />
    </>
  );
};
