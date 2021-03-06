const defaultTheme = {
  colors: {
    text: '#0B132B',
    background: '#efefef',
    primary: '#5BC0BE',
    secondary: '1C2541',
    highlight: '#3A506B',
    cases: '#FF9F1C',
    deaths: '#E71D36',
    modes: {
      dark: {
        text: '#ffffff',
        background: '#0B132B',
      },
    },
  },
  breakpoints: ['768px', '1224px', '1824px'],
  fonts: {
    body: 'Verdana, sans-serif',
    heading: 'Verdana, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  cards: {
    primary: {
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
      borderRadius: 20,
      p: [0, 1, 1, 4],
      fontSize: [0, 1, 1, 3],
    },
  },
  navBox: {
    width: '100%',
    '&:hover, &:focus': {
      bg: 'highlight',
    },
    '.active': {
      bg: 'highlight',
    },
  },
  links: {
    primary: {
      color: 'primary',
    },
    nav: {
      textAlign: 'start',
      fontSize: 4,
      fontWeight: 'bold',
      display: 'inline-block',
      width: '100%',
      p: 3,
      textDecoration: 'none',
      color: 'primary',
      '&:hover': {
        color: '#ffffff',
      },
    },
  },

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },
};

export default defaultTheme;
