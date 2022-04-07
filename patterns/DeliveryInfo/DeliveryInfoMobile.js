import { useTranslation } from '../../utils'
import { useState } from 'react'
import Dropdown from '../core/Dropdown'

const DeliveryInfoMobile = ({ countries }) => {
  const { language } = useTranslation()
  const [currentCountry, setCurrentCountry] = useState(countries[0])
  const transformedCountries = countries.map((country, index) => ({
    label: country.name[language],
    value: country.name[language],
    index: index,
  }))

  const headings = {
    en: {
      countries: 'Country',
      packageUpTo40: 'Package up to 40 €',
      packageFrom40: 'Package from 40 €',
      bulkyGoods: 'Bulky Goods (e.g. skis, boards, sleds, SUPs)',
      bikes: 'Bikes',
      expressPackage: 'Express Package',
      expressBulkyGoods: 'Express Bulky Goods (e.g. Skis)',
      expressBikes: 'Express Bikes',
    },
    de: {
      countries: 'Land',
      packageUpTo40: 'Paket bis 40 €',
      packageFrom40: 'Paket über 40 €',
      bulkyGoods: 'Sperrgut (z.B. Ski, SUPs, Boards, Bobs, Schlitten...)',
      bikes: 'Fahrrad',
      expressPackage: 'Express Paket',
      expressBulkyGoods: 'Express Sperrgut (z.B. Ski)',
      expressBikes: 'Express Fahrrad',
    },
  }

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
        headings={headings}
        language={language}
      />
    </div>
  )
}

const DeliveryInfoMobileCard = ({ country, headings, language }) => {
  return (
    <div className="delivery-info-mobile-card">
      <div className="delivery-info-mobile-card-entry">
        <span>{headings[language].packageUpTo40}</span>
        <span>{country.shipping.packageUpTo40}</span>
      </div>
      <div className="delivery-info-mobile-card-entry">
        <span>{headings[language].packageFrom40}</span>
        <span>{country.shipping.packageFrom40}</span>
      </div>
      <div className="delivery-info-mobile-card-entry">
        <span>{headings[language].bulkyGoods}</span>
        <span>{country.shipping.bulkyGoods}</span>
      </div>
      <div className="delivery-info-mobile-card-entry">
        <span>{headings[language].bikes}</span>
        <span>{country.shipping.bikes}</span>
      </div>
      <div className="delivery-info-mobile-card-entry">
        <span>{headings[language].expressPackage}</span>
        <span>{country.shipping.expressPackage}</span>
      </div>
      <div className="delivery-info-mobile-card-entry">
        <span>{headings[language].expressBulkyGoods}</span>
        <span>{country.shipping.expressBulkyGoods}</span>
      </div>
      <div className="delivery-info-mobile-card-entry">
        <span>{headings[language].expressBikes}</span>
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
