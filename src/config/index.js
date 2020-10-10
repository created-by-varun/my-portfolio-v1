module.exports = {
  siteTitle: 'Varun | Portfolio',
  siteDescription:
    'I am a 19 year old web developer from Bangalore, India passionate about full stack web development and game development',
  siteKeywords:
    'Varun, varun, varun v, Varun V, Web Developer, front-end engineer, front end web developer, javascript, game developer',
    siteUrl: 'https://github.com/created-by-varun',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Varun V',
  location: 'Bangalore, IN',
  email: 'varunvirupaksha321@gmail.com',
  github: 'https://github.com/created-by-varun',
  twitterHandle: '@its__varun',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/created-by-varun',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/varun-v-3a44261a2/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/its_varun.v/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/its__varun',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
