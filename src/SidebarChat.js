import React from 'react';
import './SidebarChat.css';

import { Avatar, IconButton } from '@material-ui/core';

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <IconButton>
                <Avatar />
            </IconButton>
            <div className="sidebarChat__text">
                <h2>name of chat</h2>
                <p>last sent message</p>
            </div>
        </div>
    )
}

export default SidebarChat
