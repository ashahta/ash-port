import React from "react";
import { Link } from "gatsby";
import ProfileImg from "../ProfileImg.png"
import styled from "styled-components"

const StyledImg = styled.img`
  max-height: 100px;
`
const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({children}) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <StyledImg src={ProfileImg} />
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
          <ListLink to="/resume/">Resume</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}