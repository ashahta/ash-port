import React, { useState } from "react";
import { Menu } from "semantic-ui-react"
import {Link} from "gatsby"


export default function NavBar() {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <Menu>
      <Link to="/about/">
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={handleItemClick}
        >
          About Me
        </Menu.Item>
      </Link>
      <Link to="/projects/">
        <Menu.Item
          name="projects"
          active={activeItem === "projects"}
          onClick={handleItemClick}
        >
          Projects
        </Menu.Item>
      </Link>
      <Link to="/resume/">
        <Menu.Item
          name="resume"
          active={activeItem === "resume"}
          onClick={handleItemClick}
        >
          Resume
        </Menu.Item>
      </Link>
    </Menu>
  )

}