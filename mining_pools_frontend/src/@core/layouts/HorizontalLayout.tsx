import AppBar from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar'

import themeConfig from 'src/configs/themeConfig'

import { LayoutProps } from 'src/@core/layouts/types'


const HorizontalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex',
  ...(themeConfig.horizontalMenuAnimation && { overflow: 'clip' })
})

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: '100%',
  padding: `${theme.spacing(0, 6)} !important`,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(4)
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
  
}))

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const HorizontalLayout = (props: LayoutProps) => {
  // ** Props
  const {
    children,
    settings,
    scrollToTop,
    contentHeightFixed,
    horizontalLayoutProps
  } = props

  // ** Vars
  const appBarProps = horizontalLayoutProps?.appBar?.componentProps
  const userNavMenuContent = horizontalLayoutProps?.navMenu?.content
  const { skin, appBar, isMenuOpen, appBarBlur, contentWidth } = settings
  let userAppBarStyle = {}
  if (appBarProps && appBarProps.sx) {
    userAppBarStyle = appBarProps.sx
  }
  const userAppBarProps = Object.assign({}, appBarProps)
  delete userAppBarProps.sx

  return (
    <HorizontalLayoutWrapper className='layout-wrapper'>
      <MainContentWrapper className='layout-content-wrapper' sx={{ ...(contentHeightFixed && { maxHeight: '100vh' }) }}>
        {/* Navbar (or AppBar) and Navigation Menu Wrapper */}
        <AppBar
          elevation={skin === 'bordered' ? 0 : 6}
          className='layout-navbar-and-nav-container'
          position={appBar === 'fixed' ? 'sticky' : 'static'}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            ...(appBar === 'static' && { zIndex: 13 }),
            transition: 'border-bottom 0.2s ease-in-out',
            ...(appBar === 'fixed' && appBarBlur && { backdropFilter: 'saturate(200%) blur(6px)' }),
            ...(skin === 'bordered' && { borderBottom: theme => `1px solid ${theme.palette.divider}` }),
            ...userAppBarStyle
          }}
          {...userAppBarProps}
        >
          {/* Navbar / AppBar */}
          <Box
            className='layout-navbar'
            sx={{
              width: '100%',
              ...(isMenuOpen ? {} : { borderBottom: theme => `1px solid ${theme.palette.divider}` })
            }}
          >
            <Toolbar
              className='navbar-content-container'
              sx={{
                mx: 'auto',
                ...(contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } }),
                minHeight: theme => `${(theme.mixins.toolbar.minHeight as number) - 1}px !important`
              }}
            >
              {/* <AppBarContent
                {...props}
                hidden={hidden}
                settings={settings}
                saveSettings={saveSettings}
                appBarContent={horizontalLayoutProps?.appBar?.content}
                appBarBranding={horizontalLayoutProps?.appBar?.branding}
              /> */}
            </Toolbar>
          </Box>

          {/* Navigation Menu */}
          {isMenuOpen ? null : (
            <Box className='layout-horizontal-nav' sx={{ width: '100%', ...horizontalLayoutProps?.navMenu?.sx }}>
              <Toolbar
                className='horizontal-nav-content-container'
                sx={{
                  mx: 'auto',
                  ...(contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } }),
                  minHeight: theme =>
                    `${(theme.mixins.toolbar.minHeight as number) - 4 - (skin === 'bordered' ? 1 : 0)}px !important`
                }}
              >
                {(userNavMenuContent && userNavMenuContent(props)) || (
                  <></>

                  // <Navigation
                  //   {...props}
                  //   horizontalNavItems={
                  //     (horizontalLayoutProps as NonNullable<LayoutProps['horizontalLayoutProps']>).navMenu?.navItems
                  //   }
                  // />
                )}
              </Toolbar>
            </Box>
          )}
        </AppBar>

        {/* Content */}
        <ContentWrapper
          className='layout-page-content'
          sx={{
            ...(contentHeightFixed && { display: 'flex', overflow: 'hidden' }),
            ...(contentWidth === 'boxed' && {
              mx: 'auto',
              
              // '@media (min-width:1440px)': { maxWidth: 1440 },
              '@media (min-width:1200px)': { maxWidth: '100%' }
            })
          }}
        >
          {children}
        </ContentWrapper>

        {scrollToTop ? (
          scrollToTop(props)
        ) : (
          <></>
        )}
      </MainContentWrapper>
    </HorizontalLayoutWrapper>
  )
}

export default HorizontalLayout
