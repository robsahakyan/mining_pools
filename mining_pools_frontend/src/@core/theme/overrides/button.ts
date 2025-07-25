// ** Type Import
import { OwnerStateThemeType } from './'

// ** Theme Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const Button = () => {
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }: OwnerStateThemeType) => ({
          fontWeight: 500,
          borderRadius: 'unset',
          lineHeight: '24px',
          letterSpacing: '0.3px',
          ...(ownerState.size === 'medium' &&
            ownerState.variant === 'text' && {
              padding: theme.spacing(1.75, 5)
            }),
          '&:not(.MuiButtonGroup-grouped)': {
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              opacity: 0.5,
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.common.white,
            }
          }
        }),
        contained: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: theme.shadows[3],
          padding: theme.spacing(1.75, 5)
        }),
        containedPrimary: ({ theme }: OwnerStateThemeType) => ({
          '&:not(.Mui-disabled), &.MuiButtonGroup-grouped:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.primary.main, 0.4)}`
          }
        }),
        containedSecondary: ({ theme }: OwnerStateThemeType) => ({
          '&:not(.Mui-disabled), &.MuiButtonGroup-grouped:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.secondary.main, 0.4)}`
          }
        }),
        containedSuccess: ({ theme }: OwnerStateThemeType) => ({
          '&:not(.Mui-disabled), &.MuiButtonGroup-grouped:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.success.main, 0.4)}`
          }
        }),
        containedError: ({ theme }: OwnerStateThemeType) => ({
          '&:not(.Mui-disabled), &.MuiButtonGroup-grouped:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.error.main, 0.4)}`
          }
        }),
        containedWarning: ({ theme }: OwnerStateThemeType) => ({
          '&:not(.Mui-disabled), &.MuiButtonGroup-grouped:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.warning.main, 0.4)}`
          }
        }),
        containedInfo: ({ theme }: OwnerStateThemeType) => ({
          '&:not(.Mui-disabled), &.MuiButtonGroup-grouped:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.info.main, 0.4)}`
          }
        }),
        outlined: ({ theme }: OwnerStateThemeType) => ({
          padding: theme.spacing(1.5, 4.75)
        }),
        sizeSmall: ({ theme, ownerState }: OwnerStateThemeType) => ({
          borderRadius: 4,
          ...(ownerState.variant === 'text' && {
            padding: theme.spacing(1, 3.5)
          }),
          ...(ownerState.variant === 'contained' && {
            padding: theme.spacing(1, 3.5)
          }),
          ...(ownerState.variant === 'outlined' && {
            padding: theme.spacing(0.75, 3.25)
          })
        }),
        sizeLarge: ({ theme, ownerState }: OwnerStateThemeType) => ({
          borderRadius: 8,
          ...(ownerState.variant === 'text' && {
            padding: theme.spacing(2, 6.5)
          }),
          ...(ownerState.variant === 'contained' && {
            padding: theme.spacing(2, 6.5)
          }),
          ...(ownerState.variant === 'outlined' && {
            padding: theme.spacing(1.75, 6.25)
          })
        })
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: themeConfig.disableRipple
      }
    },
    MuiFab: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '&.MuiFab-success:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.success.main, 0.4)}`
          },
          '&.Mui-error:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.error.main, 0.4)}`
          },
          '&.MuiFab-warning:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.warning.main, 0.4)}`
          },
          '&.MuiFab-info:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.info.main, 0.4)}`
          }
        }),
        primary: ({ theme }: OwnerStateThemeType) => ({
          '&:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.primary.main, 0.4)}`
          }
        }),
        secondary: ({ theme }: OwnerStateThemeType) => ({
          '&:not(.Mui-disabled)': {
            boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.secondary.main, 0.4)}`
          }
        })
      }
    },
    MuiButtonGroup: {
      styleOverrides: {
        contained: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: 'none',
          '& .MuiButton-contained': {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
            '&.MuiButton-containedPrimary:hover': {
              boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.primary.main, 0.4)}`
            },
            '&.MuiButton-containedSecondary:hover': {
              boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.secondary.main, 0.4)}`
            },
            '&.MuiButton-containedSuccess:hover': {
              boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.success.main, 0.4)}`
            },
            '&.MuiButton-containedError:hover': {
              boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.error.main, 0.4)}`
            },
            '&.MuiButton-containedWarning:hover': {
              boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.warning.main, 0.4)}`
            },
            '&.MuiButton-containedInfo:hover': {
              boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.info.main, 0.4)}`
            }
          }
        })
      }
    }
  }
}

export default Button
