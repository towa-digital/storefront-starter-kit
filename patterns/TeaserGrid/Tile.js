import classNames from 'classnames'
import { useConfiguration } from '../../utils'
import { Copytext, Heading, Button, ConditionalLink } from '..'

function Content(props) {
  const { heading = '', text = '', link = '' } = props

  if (heading == '' && text == '') return null

  return (
    <div className="teaser-grid__content">
      {heading && (
        <Heading element="span" weight="semi-bold">
          {heading}
        </Heading>
      )}

      {text && <Copytext>{text}</Copytext>}

      {link && <Button variant="icon-only" icon="chevron-right" />}
    </div>
  )
}

export default function Tile(props) {
  const { getImageLink } = useConfiguration()
  const {
    image = {},
    content = {},
    link = '',
    className = '',
    position,
  } = props
  const { src = '', alt = '' } = image

  const options = { source: src, format: 'auto' }

  if (position === 'left') {
    options.height = 738
  }

  const imageLink = getImageLink(options)

  const classes = classNames('teaser-grid__tile', className)

  return (
    <ConditionalLink href={link} fallbackElement="div" className={classes}>
      <picture>
        <img data-src={imageLink} alt={alt} />
      </picture>

      <Content {...content} link={link} />
    </ConditionalLink>
  )
}
