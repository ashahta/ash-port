import React from "react"
import styled from "styled-components"


const StyledDiv = styled.div`
    margin: 3rem auto;
    maxWidth: 650;
    padding: 0 1rem
`


export default function Layout({children}) {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}