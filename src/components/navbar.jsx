import React, { useState } from "react";
import { Menu } from "semantic-ui-react"
import {Link} from "gatsby"


export default function NavBar() {
  const [activeItem, setActiveItem] = useState();

  handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <Menu>
      <Menu.Item
        name='about'
        active={activeItem === 'about'}
        onClick={handleItemClick}
      >
        About Me
      </Menu.Item>

      <Menu.Item
        name='projects'
        active={activeItem === 'projects'}
        onClick={handleItemClick}
      >
        Projects
      </Menu.Item>

      <Menu.Item
        name='resume'
        active={activeItem === 'resume'}
        onClick={handleItemClick}
      >
        Resume
      </Menu.Item>

    </Menu>
  )

}