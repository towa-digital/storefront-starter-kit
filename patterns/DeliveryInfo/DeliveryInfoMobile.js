import { useTranslation } from '../../utils'
import { useState } from 'react'
import Dropdown from '../core/Dropdown'

const DeliveryInfoMobile = ({ countries }) => {
  const { language, t } = useTranslation()
  const [currentCountry, setCurrentCountry] = useState(countries[0])
  const transformedCountries = countries.map((country, index) => ({
    label: t(`COUNTRY_${country.code}`),
    value: country.code,
    index: index,
  }))

  return (
    <div>
      <Dropdown
        id="DeliveryInfoMobileDropDown"
        name="delivery-info-mbile"
        options={transformedCountries}
        onChange={(country) => setCurrentCountry(countries[country.index])}
      />
      <DeliveryInfoMobileCard
        country={currentCountry}
        language={language}
        t={t}
      />
    </div>
  )
}

const DeliveryInfoMobileCard = ({ country, t }) => {
  return (
    <div className="delivery-info-mobile-card">
      <div className="delivery-info-mobile-card-entry">
        <span>{t('DELIVERY_INFO_PACKAGE_UP_TO_40')}</span>
        <span>{country.shipping.packageUpTo40}</span>
      </div>
      <div className="delivery-info-mobile-card-entry">
        <span>{t('DELIVERY_INFO_PACKAGE_FROM_40')}</span>
        <span>{country.shipping.packageFrom40}</span>
      </div>
      <div className="delivery-info-mobile-card-entry">
        <span>{t('DELIVERY_INFO_BULKY_GOODS')}</span>
        <span>{country.shipping.bulkyGoods}</span>
      </div>
      <div className="delivery-info-mobile-card-entry">
        <span>{t('DELIVERY_INFO_BIKES')}</span>
        <span>{country.shipping.bikes}</span>
      </div>
      <div className="delivery-info-mobile-card-entry">
        <span>{t('DELIVERY_INFO_EXPRESS_PACKAGE')}</span>
        <span>{country.shipping.expressPackage}</span>
      </div>
      <div className="delivery-info-mobile-card-entry">
        <span>{t('DELIVERY_INFO_EXPRESS_BULKY_GOODS')}</span>
        <span>{country.shipping.expressBulkyGoods}</span>
      </div>
      <div className="delivery-info-mobile-card-entry">
        <span>{t('DELIVERY_INFO_EXPRESS_BIKES')}</span>
        <span>{country.shipping.expressBikes}</span>
      </div>
    </div>
  )
}

function DeliveryInfo({ countries }) {
  return <DeliveryInfoMobile countries={countries} />
}

export default DeliveryInfo
export { default as deliveryInfoVariants } from './variants.js'
