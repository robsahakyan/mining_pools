// ** React Imports
import { Fragment } from 'react'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import { LayoutProps } from 'src/@core/layouts/types'
import AppBar from './components/vertical/appBar'

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex'
})

const AppBarBgBlur = styled(Box)<BoxProps>({
  top: 0,
  zIndex: 10,
  width: '100%',
  position: 'fixed',

  // backdropFilter: 'saturate(250%) blur(30px)'
})

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  '&.layout-page-content': {
    padding: theme.spacing(6),
    paddingInline: theme.spacing(18),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  },
  transition: 'padding .25s ease-in-out'
}))

const VerticalLayout = (props: LayoutProps) => {
  const {
    settings,
    children,
    contentHeightFixed,
    verticalLayoutProps,
    saveSettings,
    useHeader,
    usePadding,
    useHeaderBackgroundImage
  } = props
  const { appBar, isMenuOpen, appBarBlur, contentWidth } = settings
  const menuOpenHandler = () => saveSettings({ ...settings, isMenuOpen: !isMenuOpen })

  return (
    <>
      <VerticalLayoutWrapper>
        <MainContentWrapper
          className='layout-content-wrapper'
          sx={{ ...(contentHeightFixed && { maxHeight: '100vh' }) }}
        >
          {!isMenuOpen && appBarBlur && appBar === 'fixed' && (
            <AppBarBgBlur
              sx={{
                height: '75px'
              }}
            />
          )}
          {useHeader && <AppBar
            menuOpenHandler={menuOpenHandler}
            appBarContent={verticalLayoutProps.appBar?.content}
            appBarProps={verticalLayoutProps.appBar?.componentProps}
            useHeaderBackgroundImage={useHeaderBackgroundImage}
            {...props}
          />}
          {/* Content */}
          <ContentWrapper
            className={usePadding ? 'layout-page-content' : 'layout-page-without-padding'}
            sx={{
              ...(contentHeightFixed && {
                overflow: 'hidden',
                '& > :first-of-type': { height: '100%' }
              }),
              ...(contentWidth === 'boxed' && {
                mx: 'auto',

                // '@media (min-width:1440px)': { maxWidth: usePadding ? 1440 : '100%' },
                '@media (min-width:1200px)': { maxWidth: '100%' }
              })
            }}
          >
            {children}
          </ContentWrapper>
        </MainContentWrapper>
      </VerticalLayoutWrapper>
    </>
  )
}

export default VerticalLayout
