import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { userStore } from "../store/user.store";
import { observer } from "mobx-react";

const HeaderMobX = observer(() => {
  return (
    <AppBar position="static">
      <Toolbar className="d-flex justify-content-between">
        <Typography variant="h4">Header</Typography>
        <Typography variant="caption">
          Username: {userStore.username} - <strong>{userStore.address}</strong>
        </Typography>
        <Typography variant="caption">
          UserID:  <strong>{userStore.userId}</strong>
        </Typography>
      </Toolbar>
    </AppBar>
  );
});

export default HeaderMobX;
