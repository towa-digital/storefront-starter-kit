import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from 'react-image-magnifiers'

import { Button } from '..'
import { useConfiguration } from '../../utils'

export default function Image(props) {
  const { getImageLink } = useConfiguration()
  const { title = '', images = [], magnifier_type = 'tap' } = props

  const imageLink = getImageLink({
    source: images[0],
    height: 400,
    format: 'auto',
  })

  return (
    <div className="product-detail-information__image">
      {magnifier_type === 'tap' && (
        <Magnifier
          imageSrc={imageLink}
          imageAlt={title}
          largeImageSrc={imageLink}
          mouseActivation={MOUSE_ACTIVATION.CLICK} // Optional
          touchActivation={TOUCH_ACTIVATION.TAP} // Optional
        />
      )}

      {magnifier_type === 'glass' && (
        <GlassMagnifier
          magnifierSize={'40%'}
          square={true}
          imageSrc={imageLink}
          imageAlt={title}
          largeImageSrc={imageLink}
        />
      )}

      {magnifier_type === 'side_by_side' && (
        <SideBySideMagnifier
          imageSrc={imageLink}
          imageAlt={title}
          largeImageSrc={imageLink}
          alwaysInPlace={false}
          overlayOpacity={0.6}
          switchSides={false}
          zoomPosition="left"
          zoomContainerBorder="1px solid #ccc"
          fillAvailableSpace={false}
          fillAlignTop={false}
          fillGapLeft={0}
          fillGapRight={10}
          fillGapTop={10}
          fillGapBottom={1}
        />
      )}

      <Button
        icon="search"
        variant="icon-only"
        className="product-detail-information__image-button"
      />
    </div>
  )
}
