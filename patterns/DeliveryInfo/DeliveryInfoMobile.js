import { useTranslation } from '../../utils'
import { useState } from 'react'
import Dropdown from '../core/Dropdown'
import { sanitizePrice, shippingPriceKeys } from './utils'

const DeliveryInfoMobile = ({ countries }) => {
  const { t } = useTranslation()
  const [currentCountry, setCurrentCountry] = useState(countries[0])
  const transformedCountries = countries.map((country, index) => ({
    label: t(`COUNTRY_${country.code}`),
    value: country.code,
    index: index,
  }))

  return (
    <div className="delivery-info-mobile">
      <Dropdown
        id="DeliveryInfoMobileDropDown"
        name="delivery-info-mobile-dropdown"
        className="delivery-info-mobile__dropdown"
        options={transformedCountries}
        onChange={(country) => setCurrentCountry(countries[country.index])}
      />
      <DeliveryInfoTableMobile country={currentCountry} />
    </div>
  )
}

const DeliveryInfoTableMobile = ({ country }) => {
  const { t } = useTranslation()

  return (
    <div>
      <table className="delivery-info-table  delivery-info-table--mobile">
        <tbody className="delivery-info-table__body">
          {country.shipping.map((price, i) => (
            <tr
              key={`${country.code}_${shippingPriceKeys[i]}`}
              className="delivery-info-table__row"
            >
              <td className="delivery-info-table__column">
                {t(`DELIVERY_INFO_${shippingPriceKeys[i]}`)}
              </td>
              <td className="delivery-info-table__column  delivery-info-table__price">
                {sanitizePrice(price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!country.tax && (
        <span className="delivery-info-table__tax-free">
          {t('DELIVERY_INFO_TAX_FREE')}
        </span>
      )}

      {country.nif && (
        <span className="delivery-info-table__nif-required">
          {t('DELIVERY_INFO_NIF_REQUIRED')}
        </span>
      )}
    </div>
  )
}

export default DeliveryInfoMobile
