import { Component } from 'react'
import { ConditionalLink } from '../..'
import Image from './image'
import Title from './title'
import Overlay from './overlay'
class DuoTeaser extends Component {
  render() {
    const { leftTile = {}, rightTile = {} } = this.props

    return (
      <section className="duo-teaser-box">
        <section className="duo-teaser">
          <ConditionalLink
            href={leftTile.link}
            className="duo-teaser__container"
          >
            <div className="duo-teaser__image-wrapper">
              <Image {...leftTile.image} />
              <Title {...leftTile} />
            </div>
            <Overlay {...leftTile.description} />
          </ConditionalLink>
        </section>

        <section className="duo-teaser duo-teaser--right">
          <ConditionalLink
            href={rightTile.link}
            className="duo-teaser__container"
          >
            <div className="duo-teaser__image-wrapper">
              <Image {...rightTile.image} />
              <Title {...rightTile} />
            </div>
            <Overlay {...rightTile.description} />
          </ConditionalLink>
        </section>
      </section>
    )
  }
}

export default DuoTeaser
export { default as duoTeaserVariants } from './variants.js'
