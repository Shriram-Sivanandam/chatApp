import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';

import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

function sidebar() {
    return (
        <div>
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerIcons">
                    <IconButton>
                        <DonutLargeIcon className="sidebar__icon"/>
                    </IconButton>

                    <IconButton>
                        <ChatIcon className="sidebar__icon"/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon className="sidebar__icon"/>
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input placeholder="search chat..." type="text"></input>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
            </div>
        </div>
    )
}

export default sidebar
