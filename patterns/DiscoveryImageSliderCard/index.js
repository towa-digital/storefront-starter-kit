function DiscoveryImageSliderCard(props) {
  const { product = {} } = props

  return (
    <div className="discovery-image-slider-card">
      <img className="discovery-image-slider-card-image" src={product.image} />
      <div>
        <span>{product.title}</span>
        <span>{product.brand}</span>
        <p>{product.description}</p>
        <span>{product.price}</span>
        <button className="discovery-image-button">Add to cart</button>
      </div>
    </div>
  )
}

export default DiscoveryImageSliderCard
export { default as discoveryImageSliderCardVariants } from './variants.js'
