import Slider from 'react-slick'
import { useState, useRef } from 'react'
import DiscoveryImageSliderCard from '../DiscoveryImageSliderCard'

function DiscoveryImageSlider(props) {
  const sectionRef = useRef(null)
  const sliderRef = useRef(null)

  const {
    image = {},
    discoveryItems = [],
    heading = 'Gin Tonic Tipp des Monats',
  } = props

  const [setSlideIndex] = useState(0)

  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '200px',
    focusOnSelect: true,
    slidesToShow: 1,

    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    beforeChange: (current, next) => setSlideIndex(next),
  }

  return (
    <section ref={sectionRef} className="discovery-image-slider">
      <h2 className="discovery-image-heading">{heading}</h2>
      <div className="discovery-image-slider-container">
        <div>
          {discoveryItems.map((discoveryItem, i) => {
            return (
              <span
                className="discovery-image-spot"
                key={`discovery-slide-${i}`}
                onClick={() => sliderRef.slick('slickGoTo', i)}
              >
                {i + 1}
              </span>
            )
          })}

          <img className="discovery-image" src={image}></img>
        </div>
        <div className="products discovery-image-slider-wrapper">
          <Slider ref={sliderRef} {...settings}>
            {discoveryItems.map((discoveryItem, i) => {
              return (
                <DiscoveryImageSliderCard
                  className="product-item"
                  key={`discovery-slide-${i}`}
                  product={discoveryItem.product}
                />
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default DiscoveryImageSlider
export { default as discoveryImageSliderVariants } from './variants.js'
