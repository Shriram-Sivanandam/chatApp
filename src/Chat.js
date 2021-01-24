import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="Chat__headerText">
                    <h3>room name</h3>
                </div>

                <div chat__headerRight>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__user">name of user</span>
                    This is a message message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__reciever">
                    <span className="chat__user">name of user</span>
                    This is a message message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">
                    <span className="chat__user">name of user</span>
                    This is a message message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>
        </div>
    )
}

export default Chat
