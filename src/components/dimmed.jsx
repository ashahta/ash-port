import React,{useState} from "react"
import { Header, Button, Dimmer, Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"

export default function Dimmed() {
  const [active, setActiveItem] = useState(false);

// button selection dims page to show content & to close the dimmed pop-up
  const handleClose = () => setActiveItem(false)

  return (
    <div>
      {active && (
        <Dimmer active={active} onClickOutside={handleClose} page>
          <Button icon onClick={handleClose}>
            <Icon name="window close outline" />
          </Button>
            <Header.Subheader>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              ipsum sed felis posuere sodales. Nulla tristique placerat elit
              eget mattis. Praesent at odio bibendum, aliquet mi ac, faucibus
              urna. Pellentesque mattis odio a laoreet scelerisque. Nullam
              tincidunt massa in posuere vestibulum. Morbi sit amet lorem orci.
              Nulla aliquam eleifend mauris, vitae ornare neque facilisis ut.
              Sed elementum, est at mollis pretium, dolor lacus euismod ligula,
              sit amet aliquet dolor ante a purus. Praesent lobortis semper diam
              nec pellentesque. Suspendisse pharetra nec odio eget dictum. Ut
              sit amet faucibus lorem. Nulla velit mauris, egestas non arcu
              vitae, luctus sagittis velit. Donec iaculis cursus felis et
              convallis. Mauris id dapibus augue. Vestibulum auctor tellus quam,
              at elementum quam semper eu. Curabitur et convallis velit. Cras
              ultrices facilisis leo, quis elementum nisl cursus id. Proin a
              malesuada massa, nec dignissim urna. Ut tempus ultricies dolor, in
              tempus augue posuere non. Maecenas varius in nulla et sodales.
              Curabitur ut lacinia nulla. Sed finibus volutpat lacus vitae
              facilisis. Quisque sollicitudin at orci eu semper. Curabitur
              placerat accumsan ultrices. Curabitur aliquam urna id nibh mattis,
              vel sollicitudin sapien euismod. Phasellus malesuada nec arcu non
              porta. Duis eu massa non libero volutpat volutpat et ac turpis. Ut
              a viverra lacus, non euismod leo. Aenean eleifend congue quam at
              consequat. Integer tincidunt in augue et tristique. Integer
              ultricies sem vel metus facilisis, et fringilla nisl viverra. In
              lacinia congue est vel vehicula. Donec congue id diam sed
              tincidunt. Etiam tortor metus, ullamcorper et lobortis vel,
              suscipit ut elit. Quisque pharetra ligula non metus volutpat, nec
              commodo massa viverra. Sed mattis nisl velit, ut cursus nibh
              posuere nec.
            </Header.Subheader>
        </Dimmer>
      )}
    </div>
  )
}
