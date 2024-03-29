import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

const Notification = ({ type, message }) => {
    const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const handleClose = ()=> {
    dispatch(uiActions.showNotification({open:false}));
  }
  return (
    notification.open && (
      <div>
        <Alert onClose={handleClose} severity={type}>{message}</Alert>
      </div>
    )
  );
};

export default Notification;
