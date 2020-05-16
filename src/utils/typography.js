import Typography from "typography"
import oceanBeachTheme from "typography-theme-ocean-beach"

oceanBeachTheme.googleFonts = [
  {
    name: 'Comic Neue',
    styles: [
      '400',
      '400i',
      '700'
    ],
  },
  {
    name: 'Zilla Slab Highlight',
    styles: [
      '700',
    ],
  },
]
oceanBeachTheme.headerFontFamily = ['Zilla Slab Highlight', 'sans-serif']
oceanBeachTheme.bodyFontFamily = ["Comic Neue", "sans-serif"]
oceanBeachTheme.baseFontSize = '20px'
oceanBeachTheme.bodyWeight = '700'
oceanBeachTheme.scaleRatio = 2.5
oceanBeachTheme.bodyColor = "hsla(0,0%,0%,0.75)"

oceanBeachTheme.overrideThemeStyles = ({ rhythm }) => ({
  "h1,h2,h3,h4,h5,h6": {
    marginTop: rhythm(1)
  },

})

const typography = new Typography(oceanBeachTheme)

export const { scale, rhythm, options } = typography
export default typography