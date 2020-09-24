import React, {useState} from "react"
import { Dimmer, Image, Button } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import ProfileImg from "../ProfileImg.png"
import styled from "styled-components"

const CenteredDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


export default function Hover() {
  const [active, setActiveItem] = useState(false);

  // hover over picture shows button options
  const handleShow = () => setActiveItem(true)
  const handleHide = () => setActiveItem(false)

  const handleOpen = () => setActiveItem(true)

  const content = (
    <div>
      <Button.Group>
        <Button
          content="About"
          onClick={handleOpen}
          basic
          inverted
          color="grey"
        />
        <Button
          content="Projects"
          onClick={handleOpen}
          basic
          inverted
          color="grey"
        />
        <Button
          content="Resume"
          onClick={handleOpen}
          basic
          inverted
          color="grey"
        />
      </Button.Group>
    </div>
  )

  return (
    <CenteredDiv>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={handleShow}
          onMouseLeave={handleHide}
          size="massive"
        src={ProfileImg}
        circular
        />
    </CenteredDiv>
  )
}
