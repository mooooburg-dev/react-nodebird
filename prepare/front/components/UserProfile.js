import React, { useCallback } from "react";
import { Avatar, Button, Card } from "antd";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logoutAction());
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

export default UserProfile;
