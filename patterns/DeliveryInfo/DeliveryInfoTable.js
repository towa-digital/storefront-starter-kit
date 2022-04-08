import { useTranslation } from '../../utils'
import { sanitizePrice, shippingPriceKeys } from './utils'

const DeliveryInfoTable = ({ countries }) => {
  const { t } = useTranslation()

  return (
    <table className="delivery-info-table  delivery-info-table--bordered">
      <thead className="delivery-info-table__header">
        <tr>
          <th className="delivery-info-table__column">
            {t('DELIVERY_INFO_COUNTRIES')}
          </th>
          {shippingPriceKeys.map((key) => (
            <th key={key} className="delivery-info-table__column">
              {t(`DELIVERY_INFO_${key}`)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="delivery-info-table__body">
        {countries.map((country) => (
          <tr key={country.code} className="delivery-info-table__row">
            <td className="delivery-info-table__column">
              <span className="delivery-info-table__country">
                {t(`COUNTRY_${country.code}`)}
              </span>

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
            </td>

            {country.shipping.map((price, i) => (
              <td
                key={`${country.code}_${shippingPriceKeys[i]}`}
                className="delivery-info-table__column delivery-info-table__price"
              >
                {sanitizePrice(price)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DeliveryInfoTable
