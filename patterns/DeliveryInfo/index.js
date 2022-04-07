import { useTranslation } from '../../utils'

const DeliveryInfoTable = ({ countries }) => {
  const { language } = useTranslation()
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
    <table className="delivery-info-table">
      <thead className="delivery-info-table__header">
        <tr>
          <th>{headings[language].countries}</th>
          <th>{headings[language].packageUpTo40}</th>
          <th>{headings[language].packageFrom40}</th>
          <th>{headings[language].bulkyGoods}</th>
          <th>{headings[language].bikes}</th>
          <th>{headings[language].expressPackage}</th>
          <th>{headings[language].expressBulkyGoods}</th>
          <th>{headings[language].expressBikes}</th>
        </tr>
      </thead>
      <tbody className="delivery-info-table__body">
        {countries.map((country) => (
          <tr key={country.name[language]}>
            <td className="country">{country.name[language]}</td>
            <td className="price">
              {country.shipping.packageUpTo40?.toFixed(2)}
            </td>
            <td className="price">
              {country.shipping.packageFrom40?.toFixed(2)}
            </td>
            <td className="price">{country.shipping.bulkyGoods?.toFixed(2)}</td>
            <td className="price">{country.shipping.bikes?.toFixed(2)}</td>
            <td className="price">
              {country.shipping.expressPackage?.toFixed(2)}
            </td>
            <td className="price">
              {country.shipping.expressBulkyGoods?.toFixed(2)}
            </td>
            <td className="price">
              {country.shipping.expressBikes?.toFixed(2)}
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
