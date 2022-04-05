const image =
  'http://localhost:5000/assets/images/discoveryImage/example_image.jpg'
const heading = 'Gin Tonic Tipp des Monats'
const discoveryItems = [
  {
    product: {
      id: '1',
      title: 'Bombay Gin',
      image:
        'https://www.weisshaus.at/media/image/71/b6/14/t-1783BE68D20F942EA02D0175EA63CEB4_600x600.jpg',
      description: 'Lorem ipsum dolor sit amet, nonumy eirmod tempor ut labore',
      brand: 'Bombay',
      price: 21,
    },
    postiton: {
      left: 10,
      top: 80,
    },
  },
  {
    product: {
      id: '2',
      title: 'Hendricks Neptunia Gin',
      image:
        'https://cdn.shopify.com/s/files/1/1408/2732/products/tastillery_hendricks_neptunia_1024x1024@2x.jpg?v=1646134109',
      description: 'Lorem ipsum dolor sit amet, nonumy eirmod tempor ut labore',
      brand: 'Hendricks',
      price: 30,
    },
    postiton: {
      left: 30,
      top: 70,
    },
  },
  {
    product: {
      id: '3',
      title: 'UKIO Japanese Blossom Gin',
      image:
        'https://cdn.shopify.com/s/files/1/1408/2732/products/TastePicsUkiyoGin_1024x1024@2x.jpg?v=1648812290',
      description: 'Lorem ipsum dolor sit amet, nonumy eirmod tempor ut labore',
      brand: 'UIKO',
      price: 66,
    },
    postiton: {
      left: 80,
      top: 20,
    },
  },
]
export default [
  {
    name: 'Discovery Image Slider Default',
    props: {
      image,
      discoveryItems,
      heading,
    },
  },
]
