/**
 * Config
 * -------------------------------------------------------------------------------------
 * ! IMPORTANT: Make sure you clear the browser local storage in order to see the config changes in the template.
 * ! To clear local storage, you may refer https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/.
 */

import { Direction } from '@mui/material'

import {
  Skin,
  Mode,
  AppBar,
  Footer,
  ContentWidth,
  VerticalNavToggle,
  HorizontalMenuToggle
} from 'src/@core/layouts/types'

type ThemeConfig = {
  skin: Skin
  mode: Mode
  appBar: AppBar
  footer: Footer
  isMenuOpen: boolean
  appBarBlur: boolean
  direction: Direction
  templateName: string
  mainLogo?: string
  navCollapsed: boolean
  routingLoader: boolean
  disableRipple: boolean
  navigationSize: number
  navSubItemIcon: string
  menuTextTruncate: boolean
  contentWidth: ContentWidth
  disableCustomizer: boolean
  responsiveFontSizes: boolean
  collapsedNavigationSize: number
  horizontalMenuAnimation: boolean
  layout: 'vertical' | 'horizontal'
  verticalNavToggleType: VerticalNavToggle
  horizontalMenuToggle: HorizontalMenuToggle
  afterVerticalNavMenuContentPosition: 'fixed' | 'static'
  beforeVerticalNavMenuContentPosition: 'fixed' | 'static'
  toastPosition: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
}

const themeConfig: ThemeConfig = {
  templateName: 'Mining Pools Dashboard' /* App Name */,
  mainLogo: '',
  layout: 'vertical' /* vertical | horizontal */,
  mode: 'light' as Mode /* light | dark | semi-dark /*! Note: semi-dark value will only work for Vertical Layout */,
  direction: 'ltr' /* ltr | rtl */,
  skin: 'default' /* default | bordered */,
  contentWidth: 'boxed' /* full | boxed */,
  footer: 'static' /* fixed | static | hidden */,

  // ** Routing Configs
  routingLoader: true /* true | false */,

  // ** Navigation (Menu) Configs
  isMenuOpen: false /* true | false */,
  menuTextTruncate: true /* true | false */,
  navSubItemIcon: 'bxs:circle' /* Icon */,
  verticalNavToggleType: 'accordion' /* accordion | collapse /*! Note: This is for Vertical navigation menu only */,
  navCollapsed: false /* true | false /*! Note: This is for Vertical navigation menu only */,
  navigationSize: 260 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */,
  collapsedNavigationSize: 84 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */,
  afterVerticalNavMenuContentPosition: 'fixed' /* fixed | static */,
  beforeVerticalNavMenuContentPosition: 'fixed' /* fixed | static */,
  horizontalMenuToggle: 'hover' /* click | hover /*! Note: This is for Horizontal navigation menu only */,
  horizontalMenuAnimation: true /* true | false */,

  // ** AppBar Configs
  appBar: 'static' /* fixed | static | hidden /*! Note: hidden value will only work for Vertical Layout */,
  appBarBlur: true /* true | false */,

  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: true /* true | false */,
  disableCustomizer: false /* true | false */,
  toastPosition: 'top-center' /* top-left | top-center | top-right | bottom-left | bottom-center | bottom-right */
}

export default themeConfig
