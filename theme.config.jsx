export default {
  logo: <img src="/logo.svg" style={{ height: "3em" }} />,
  docsRepositoryBase: 'https://github.com/optimize-business/docs',
  darkMode: false,
  nextThemes: {
    forcedTheme: 'light'
  },
  footer: {
    text: "Copyright © 2023 Optimize"
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Optimize'
    }
  }
}
