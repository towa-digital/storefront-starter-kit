import Slider from 'react-slick'
import { useState, useRef } from 'react'
import classNames from 'classnames'
import ProductTile from '../core/ProductList/ProductTile'

function DiscoveryImageSlider(props) {
  const sectionRef = useRef(null)
  const sliderRef = useRef(null)
  const {
    image = {},
    discoveryItems = [],
    heading = 'Gin Tonic Tipp des Monats',
  } = props

  const [slideIndex, setSlideIndex] = useState(0)

  const settings = {
    className: 'center',
    focusOnSelect: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlideIndex: 0,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section ref={sectionRef} className="discovery-image-slider">
      <h2 className="discovery-image-slider-heading">{heading}</h2>
      <div className="discovery-image-slider-container">
        <div className="discovery-image-slider-image-spot-container">
          {discoveryItems.map((discoveryItem, i) => {
            const spotClasses = classNames('discovery-image-slider-spot', {
              ['discovery-image-slider-spot__active']: slideIndex === i,
            })
            return (
              <span
                className={spotClasses}
                key={`discovery-image-slider-slide-${i}`}
                style={{
                  top: `${discoveryItem.top}%`,
                  left: `${discoveryItem.left}%`,
                }}
                onClick={() => sliderRef.current.slickGoTo(i)}
              >
                {i + 1}
              </span>
            )
          })}
          <img
            className="discovery-image-slider-spot-image"
            src={image}
            alt={'Discovery Image'}
          ></img>
        </div>
        <div className="discovery-image-slider-wrapper">
          <Slider ref={sliderRef} {...settings}>
            {discoveryItems.map((discoveryItem, i) => {
              const spotClasses = classNames(
                'discovery-image-slider-spot discovery-image-slider-index',
                {
                  ['discovery-image-slider-spot__active']: slideIndex === i,
                }
              )
              return (
                <div key={`spot-${i}`}>
                  <span className={spotClasses}>{i + 1}</span>
                  <ProductTile
                    {...discoveryItem.product}
                    isLazyLoad={false}
                  ></ProductTile>
                </div>
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
