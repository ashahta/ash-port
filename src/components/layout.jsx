import React from "react";
import styled from "styled-components"

const StyledDiv = styled.div`
    margin: 3rem auto;
    maxWidth: 650;
    padding: 0 1rem
`

// const ListLink = (props) => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

export default function Layout({children}) {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}