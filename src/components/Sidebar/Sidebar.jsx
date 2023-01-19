import React from 'react'

//* Style *// 
import style from './Sidebar.module.css'

//* Components *//
import SidebarOption from './SidebarOption'

//* Icons *// 
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

const Sidebar = () => {
  return (
    <div className={style.sidebar} >
      <TwitterIcon className={style.sidebar__twitterIcon} />

      <SidebarOption active text='Home' Icon={HomeIcon} />
      <SidebarOption text='Explore' Icon={SearchIcon} />
      <SidebarOption text='Notification' Icon={NotificationsNoneIcon} />
      <SidebarOption text='Messages' Icon={MailOutlineIcon} />
      <SidebarOption text='Bookmarks' Icon={BookmarkBorderIcon} />
      <SidebarOption text='Lists' Icon={ListAltIcon} />
      <SidebarOption text='Profile' Icon={PermIdentityIcon} />
      <SidebarOption text='More' Icon={MoreHorizIcon} />

      <Button variant='outlined' fullWidth className={style.sidebar__tweetButton} >Tweet</Button>
    </div>
  )
}

export default Sidebar