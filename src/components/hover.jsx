import React, {useState} from "react"
import { Dimmer, Image, Button } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import ProfileImg from "../ProfileImg.png"
import styled from "styled-components"
import Dimmed from "../components/dimmed"

const CenteredDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Hover() {
  const [active, setActive] = useState(false)
  const [view, setView] = useState("home")
  // const [pageDim, setPageDim] = useState(false)

  // hover over picture shows button options
  const handleShow = () => setActive(true)
  const handleHide = () => setActive(false)

  // button selection opens page
  const handleOpen = view => setView(view)

  const goHome = () => setView("home")

  // const handlePageDimClose = () => setPageDim(false)

  const content = (
    <div>
      <Button.Group>
        <Button
          content="About"
          onClick={() => handleOpen("about")}
          basic
          inverted
          color="grey"
        />
        <Button
          content="Projects"
          onClick={() => handleOpen("projects")}
          basic
          inverted
          color="grey"
        />
        <Button
          content="Resume"
          onClick={() => handleOpen("resume")}
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
      {view !== 'home' &&
        <Dimmed
        view={view}
        goHome={goHome}
      />
      }
    </CenteredDiv>
  )
}
