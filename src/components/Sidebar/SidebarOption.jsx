import React from 'react'

//* Style *// 
import style from './SidebarOption.module.css'

const SidebarOption = ({active, text, Icon}) => {
  return (
    <div className={`${style.sidebarOption} ${active && style.sidebarOption__active}`} >
      <Icon className={style.icon} />
      <h3>{text}</h3>
    </div>
  )
}

export default SidebarOption