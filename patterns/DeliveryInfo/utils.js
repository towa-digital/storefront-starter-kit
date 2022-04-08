export const sanitizePrice = (price = null) =>
  price?.toFixed(2).replace('.', ',')

export const shippingPriceKeys = [
  'PACKAGE_UP_TO_40',
  'PACKAGE_FROM_40',
  'BULKY_GOODS',
  'BIKES',
  'EXPRESS_PACKAGE',
  'EXPRESS_BULKY_GOODS',
  'EXPRESS_BIKES',
]
