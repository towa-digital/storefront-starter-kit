const props = {
  videoUrl:
    'https://s3.eu-central-1.amazonaws.com/rotkaeppchen/mecs-5e2fe9514e65a-Testvideo-xVqk139wmJo.mp4',
  heading: 'The Botanist Islay Dry Gin',
  subheading: 'Premium Gin',
  hint: 'ab 32,99 €',
  link: '#todo',
  description: {
    heading: 'Ein besonderes Erlebnis',
    text:
      'Foraging used to be all we knew; we were self-reliant, adaptive creatures in a dynamic natural world. Those instincts have gone to sleep in bland days of convenience and blas\u00e9 consumption.',
  },
}

export default [
  {
    name: 'Default',
    props: { ...props },
  },
  {
    name: 'Default with video poster',
    props: { ...props, poster: 'assets/images/teaserSingle/example.jpg' },
  },
  {
    name: 'Video error',
    props: { ...props, videoUrl: '' },
  },
  {
    name: 'Without button',
    props: { ...props, link: '' },
  },
]
