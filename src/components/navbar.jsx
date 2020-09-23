import React, { useState } from "react";
import { Menu } from "semantic-ui-react"
import {Link} from "gatsby"
import styled from "styled-components"
import ProfileImg from "../ProfileImg.png"

const StyledMenu = styled(Menu)`
  background: cornflowerblue
  `
const StyledImg = styled.img`
  max-height: 100px
`
export default function NavBar() {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <StyledMenu size="medium">
      <Link to="/">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        ><StyledImg src={ProfileImg} alt="circular profile image of Ashleigh Ah Ta"/></Menu.Item>
      </Link>
      <Menu.Menu position="right">
      <Link to="/about/">
        <Menu.Item
          name="about me"
            active={activeItem === "about"}
            fitted="vertically"
          onClick={handleItemClick}
        />
      </Link>
      <Link to="/projects/">
        <Menu.Item
          name="projects"
            active={activeItem === "projects"}
            fitted="vertically"
          onClick={handleItemClick}
        />
      </Link>
      <Link to="/resume/">
        <Menu.Item
          name="resume"
          active={activeItem === "resume"}
          onClick={handleItemClick}
        />
        </Link>
        </Menu.Menu>
    </StyledMenu>
  )

}