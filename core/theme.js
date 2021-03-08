import { DefaultTheme } from 'react-native-paper'
import { material } from 'react-native-typography'

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#560CCE',
    secondary: '#414757',
    error: '#f13a59',
  },
  blueTitle: {
    ...material.titleObject,
    color: '#560CCE'
  },
  contrastBlueTitle : {
    ...material.titleObject,
    color: '#1e90ff'
  }
}
