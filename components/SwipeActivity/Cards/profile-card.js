import { Card } from "antd";
import { HeartOutlined, CloseOutlined } from "@ant-design/icons";

const ProfileCard = ({ imgUrl, name,overView, handleSwipe, isShow }) => {
  const cardStyle = Object.assign(
    { width: 240, position: "absolute", transition: "opacity 1.5s" },
    isShow ? { opacity: 1 } : { opacity: 0 }
  );
  return (
    <Card
      className="profile-card"
      hoverable
      style={cardStyle}
      cover={<img alt="example" style={{ minHeight: 240 }} src={imgUrl} />}
      actions={[
        <CloseOutlined key="dislike" onClick={() => handleSwipe("dislike")} />,
        <HeartOutlined key="heart" onClick={() => handleSwipe("like")} />,
      ]}
    >
      {/* <Card.Meta title={`${imgURL}`} description={overView} /> */}
      <div className="additional">
      <p className="price">Price: 20$</p>
      <p>{`${overView}`}</p>
    </div>
    </Card>

    
  );
};

export default ProfileCard;