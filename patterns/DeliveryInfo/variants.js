export default [
  {
    name: 'DeliveryInfo',
    props: {
      countries: [
        {
          code: 'DE',
          shipping: {
            packageUpTo40: 5,
            packageFrom40: 0,
            bulkyGoods: 9.9,
            bikes: 9.9,
            expressPackage: 15,
            expressBulkyGoods: 20,
            expressBikes: 20,
          },
          tax: true,
          nif: false,
        },
        {
          code: 'AT',
          shipping: {
            packageUpTo40: 10,
            packageFrom40: 0,
            bulkyGoods: 9.9,
            bikes: 9.9,
            expressPackage: 25,
            expressBulkyGoods: 30,
            expressBikes: 30,
          },
          tax: true,
          nif: false,
        },
        {
          code: 'AU',
          shipping: {
            packageUpTo40: null,
            packageFrom40: null,
            bulkyGoods: null,
            bikes: null,
            expressPackage: 70,
            expressBulkyGoods: 100,
            expressBikes: 200,
          },
          tax: true,
          nif: false,
        },
        {
          code: 'CL',
          shipping: {
            packageUpTo40: null,
            packageFrom40: null,
            bulkyGoods: null,
            bikes: null,
            expressPackage: 70,
            expressBulkyGoods: 100,
            expressBikes: 200,
          },
          tax: true,
          nif: true,
        },
        {
          code: 'CH',
          shipping: {
            packageUpTo40: 15,
            packageFrom40: 15,
            bulkyGoods: 9.9,
            bikes: 150,
            expressPackage: 30,
            expressBulkyGoods: 50,
            expressBikes: 200,
          },
          tax: false,
          nif: false,
        },
      ],
    },
  },
]
