import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

export const VideoCard = (props) => {
  let { name, url } = props;

  function getVideoId(url) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length === 11)
      return `https://img.youtube.com/vi/${match[7]}/hqdefault.jpg`;
    return false;
  }

  return (
    <Card
      style={{
        width: 200,
      }}
      cover={<img alt={name} src={getVideoId(url)} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta name={name} url={url} />
    </Card>
  );
};
