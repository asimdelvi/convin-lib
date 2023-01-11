import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card } from "antd";
import { deleteOneVideo } from "../features/videoLib/videoSlice";
const { Meta } = Card;

export const VideoCard = (props) => {
  let { id, name, url, bucket } = props;
  const dispatch = useDispatch();

  function getVideoId(url) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length === 11)
      return `https://img.youtube.com/vi/${match[7]}/hqdefault.jpg`;
    return false;
  }

  const onClickDelete = () => {
    dispatch(deleteOneVideo(id));
  };

  return (
    <Card
      hoverable
      style={{
        width: 200,
      }}
      cover={<img alt={name} src={getVideoId(url)} />}
      actions={[
        <DeleteOutlined key="delete" onClick={onClickDelete} />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta title={name} description={bucket} />
      <Link to={`/videos/${id}`}>{name}</Link>
    </Card>
  );
};
