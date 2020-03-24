const defaultTheme = {
  colors: {
    text: '#0B132B',
    background: '#ffffff',
    primary: '#5BC0BE',
    secondary: '1C2541',
    highlight: '#3A506B',
    modes: {
      dark: {
        text: '#ffffff',
        background: '#0B132B',
      },
    },
  },
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
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)',
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
