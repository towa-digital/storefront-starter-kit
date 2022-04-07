import { useTranslation } from '../../utils'

const DeliveryInfoTable = ({ countries }) => {
  const { t } = useTranslation()

  const sanitizePrice = (price = null) => price?.toFixed(2).replace('.', ',')

  return (
    <table className="delivery-info-table  delivery-info-table--bordered">
      <thead className="delivery-info-table__header">
        <tr>
          <th>{t('DELIVERY_INFO_COUNTRIES')}</th>
          <th>{t('DELIVERY_INFO_PACKAGE_UP_TO_40')}</th>
          <th>{t('DELIVERY_INFO_PACKAGE_FROM_40')}</th>
          <th>{t('DELIVERY_INFO_BULKY_GOODS')}</th>
          <th>{t('DELIVERY_INFO_BIKES')}</th>
          <th>{t('DELIVERY_INFO_EXPRESS_PACKAGE')}</th>
          <th>{t('DELIVERY_INFO_EXPRESS_BULKY_GOODS')}</th>
          <th>{t('DELIVERY_INFO_EXPRESS_BIKES')}</th>
        </tr>
      </thead>
      <tbody className="delivery-info-table__body">
        {countries.map((country) => (
          <tr key={country.code}>
            <td className="delivery-info-table__country">
              {t(`COUNTRY_${country.code}`)}
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
            <td className="delivery-info-table__price">
              {sanitizePrice(country.shipping.packageUpTo40)}
            </td>
            <td className="delivery-info-table__price">
              {sanitizePrice(country.shipping.packageFrom40)}
            </td>
            <td className="delivery-info-table__price">
              {sanitizePrice(country.shipping.bulkyGoods)}
            </td>
            <td className="delivery-info-table__price">
              {sanitizePrice(country.shipping.bikes)}
            </td>
            <td className="delivery-info-table__price">
              {sanitizePrice(country.shipping.expressPackage)}
            </td>
            <td className="delivery-info-table__price">
              {sanitizePrice(country.shipping.expressBulkyGoods)}
            </td>
            <td className="delivery-info-table__price">
              {sanitizePrice(country.shipping.expressBikes)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function DeliveryInfo({ countries }) {
  return (
    <section className="delivery-info">
      <DeliveryInfoTable countries={countries} />
    </section>
  )
}

export default DeliveryInfo
export { default as deliveryInfoVariants } from './variants.js'
