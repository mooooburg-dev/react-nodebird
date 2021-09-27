import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Avatar, Button, Card } from "antd";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          쨱짹
          <br />8
        </div>,
        <div key="follow">
          팔로잉
          <br />8
        </div>,
        <div key="follower">
          팔로워
          <br />8
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>DRM</Avatar>} title="drawyourmind" />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

UserProfile.propTypes = {
  setIsLoggedIn: PropTypes.node.isRequired,
};

export default UserProfile;
