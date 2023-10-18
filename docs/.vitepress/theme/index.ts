import './custom.css'
import DefaultTheme from 'vitepress/theme'
import MyLayout from './Layout.vue'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
}
