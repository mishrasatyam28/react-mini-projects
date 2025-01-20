import React, { useState } from 'react'
import { MenuList } from './menu-list'
import { FaMinus, FaPlus } from 'react-icons/fa'

export const MenuItem = ({ item }) => {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]:!displayCurrentChildren[getCurrentLabel]
      })  
    }

  return (
      <li>
          <div style={{ display: "flex", gap:"10px" }} className="menu-item">
              <p>{item.label}</p>
              {
                  item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>{
                    displayCurrentChildren [item.label] ? <FaMinus color='#000' size={25}/> : <FaPlus color='#000' size={25}/>
                  }</span> : null
              }
              
          </div>
          {
              item && item.children && item.children.length > 0  && displayCurrentChildren[item.label]? 
                  <MenuList list={item.children} />
              : null

          }
    </li>
  )
}
