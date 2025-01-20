import React from 'react'
import './styles.css'
import { MenuList } from './menu-list'

export const TreeView = ({menus=[]}) => {
  return (
      <>
          <h1 style={{textAlign:"center"}}>11-Tree View</h1>
    <div className="tree-view-container">
          <MenuList list={menus}/>
    </div>     
    </>
  )
}
