import React, {useState} from "react"
import { Button, Dimmer, Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import styled from "styled-components"
import About from "../pages/about"
import Projects from "../pages/projects"
import Resume from "../pages/resume"

const StyledDiv = styled.div`
  padding: 250px;
  font-size: 18px
`

export default function Dimmed({view, goHome}) {
 const [active, setActiveItem] = useState(true);

// button selection dims page to show content & to close the dimmed pop-up
  const handleClose = () => {
    setActiveItem(false)
    goHome()
  }

  const getContent = view => {
      if (view === "about") {
        return <About />
      }
      if (view === "projects") {
        return <Projects />
      }
      if (view === "resume") {
        return <Resume />
      }
    }

  return (
    <div>
      <Dimmer active={active} page>
        <StyledDiv>
          <Button icon onClick={handleClose}>
            <Icon name="window close outline" />
          </Button>
          {getContent(view)}
        </StyledDiv>
      </Dimmer>
    </div>
  )
}
