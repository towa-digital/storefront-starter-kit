import { useEffect, useState } from 'react'
import DeliveryInfoMobile from './DeliveryInfoMobile'
import DeliveryInfoTable from './DeliveryInfoTable'

function DeliveryInfo({ countries }) {
  const [width, setWidth] = useState(0)
  const isMobile = width <= 768

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return (
    <section className="delivery-info">
      {isMobile ? (
        <DeliveryInfoMobile countries={countries} />
      ) : (
        <DeliveryInfoTable countries={countries} />
      )}
    </section>
  )
}

export default DeliveryInfo
export { default as deliveryInfoVariants } from './variants.js'
