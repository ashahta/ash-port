import React, {useState} from "react"
import { Button, Dimmer, Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import styled from "styled-components"
import About from "../pages/about"
import Projects from "../pages/projects"
import Resume from "../pages/resume"

const StyledDiv = styled.div`
  margin: 3rem auto;
  maxwidth: 650;
  padding: 0 1rem;
`

export default function Dimmed({view}) {
 const [active, setActiveItem] = useState(true);

// button selection dims page to show content & to close the dimmed pop-up
  const handleClose = () => setActiveItem(false)

  return (
    <div>
        <Dimmer
          active={active}
          onClickOutside={handleClose}
          page
        >
          <Button icon onClick={handleClose}>
            <Icon name="window close outline" />
          </Button>

        </Dimmer>
    </div>
  )
}
