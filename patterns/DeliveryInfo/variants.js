export default [
  {
    name: 'DeliveryInfo',
    props: {
      countries: [
        {
          code: 'DE',
          shipping: [5, 0, 9.9, 9.9, 15, 20, 20],
          tax: true,
          nif: false,
        },
        {
          code: 'AT',
          shipping: [10, 0, 9.9, 9.9, 25, 30, 30],
          tax: true,
          nif: false,
        },
        {
          code: 'AU',
          shipping: [null, null, null, null, 70, 100, 200],
          tax: true,
          nif: false,
        },
        {
          code: 'CL',
          shipping: [null, null, null, null, 70, 100, 200],
          tax: true,
          nif: true,
        },
        {
          code: 'CH',
          shipping: [15, 15, 9.9, 150, 30, 50, 200],
          tax: false,
          nif: false,
        },
      ],
    },
  },
]
