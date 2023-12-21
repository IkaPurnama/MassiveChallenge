import React, { useState } from 'react';
import "./index.css";
import { Box } from "@mui/material";

const Team = () => {
  const [unreadMessages, setUnreadMessages] = useState(5); // Assuming 5 unread messages initially

  const markAsRead = () => {
    setUnreadMessages(0);
  };

  const handleNotificationClick = () => {
    setUnreadMessages(unreadMessages - 1);
  };

  return (
    <Box m="20px">
      <div className="content">
      <div className="notificationContainer">
        <header>
          <div className="notificationHeader">
            <h4>Notification</h4>
          </div>
          <p id="mark-as-read" onClick={markAsRead}>Tandai telah dibaca</p>
        </header>
        <main>
          {[...Array(unreadMessages)].map((_, index) => (
            <div className="notificationCard unread" key={index} onClick={handleNotificationClick}>
              <img src="../../public/assets/users.png" alt="" />
              <div className="description">
                <p>Raisya telah mendaftar tiket pendakian</p>
                <p id="notif-time">1 menit yang lalu</p>
              </div>
            </div>
          ))}
        </main>
      </div>
      </div>
    </Box>
  );
};

export default Team;
