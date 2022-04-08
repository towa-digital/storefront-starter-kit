import DeliveryInfoTable from './DeliveryInfoTable'
import DeliveryInfoMobile from './DeliveryInfoMobile'

const DeliveryInfo = ({ countries }) => (
  <section className="delivery-info">
    <div className="delivery-info__table">
      <DeliveryInfoTable countries={countries} />
    </div>

    <div className="delivery-info__mobile">
      <DeliveryInfoMobile countries={countries} />
    </div>
  </section>
)

export default DeliveryInfo
export { default as deliveryInfoVariants } from './variants.js'
