import { Palette } from '@mui/material';
import { Settings } from 'src/@core/context/settingsContext';

const DefaultPalette = (mode: Palette['mode'], settings: Settings): Palette => {
  const whiteColor = '#FFFFFF';
  const lightColor = '#1976D2'; // Enhanced primary blue for mining dashboard
  const yellowColor = '#FF9800'; // Enhanced warning color
  const blackColor = '#1A1A1A'; // Better dark color
  const surfaceColor = '#F8FAFC'; // Lighter surface for better contrast
  const darkPaperBgColor = '#121212'; // Material Design dark surface
  const tertiary = 'rgba(25, 118, 210, 0.12)'; // Enhanced tertiary with primary color
  const mainColor = mode === 'light' ? blackColor : whiteColor;

  const defaultBgColor = mode === 'light' ? surfaceColor : darkPaperBgColor;

  // Mining Pool Status Colors
  const miningPoolColors = {
    online: mode === 'light' ? '#2E7D32' : '#4CAF50',      // Green for online
    degraded: mode === 'light' ? '#ED6C02' : '#FF9800',    // Orange for degraded
    offline: mode === 'light' ? '#D32F2F' : '#F44336',     // Red for offline
  };

  // Enhanced data visualization colors
  const dataColors = {
    hashrate: mode === 'light' ? '#1976D2' : '#42A5F5',    // Blue for hashrate
    workers: mode === 'light' ? '#388E3C' : '#66BB6A',     // Green for workers
    revenue: mode === 'light' ? '#F57C00' : '#FFA726',     // Orange for revenue
    fees: mode === 'light' ? '#7B1FA2' : '#AB47BC',        // Purple for fees
  };

  const collapseTogglerBgColor = () => {
    if (settings.skin === 'bordered') {
      if (settings.mode === 'dark') {
        return darkPaperBgColor;
      } else {
        return whiteColor;
      }
    } else {
      if (settings.mode === 'dark') {
        return '#232333';
      } else {
        return '#F5F5F9';
      }
    }
  };

  return {
    customColors: {
      dark: darkPaperBgColor,
      main: mainColor,
      yellow: yellowColor,
      light: lightColor,
      lightPaperBg: whiteColor,
      surfaceColorBg: surfaceColor,
      tertiaryColor: tertiary,
      darkPaperBg: darkPaperBgColor,
      collapseTogglerBg: collapseTogglerBgColor(),
      bodyBg: mode === 'light' ? '#F8FAFC' : '#1A1A1A',
      trackBg: mode === 'light' ? '#E2E8F0' : '#374151',
      avatarBg: mode === 'light' ? '#F1F5F9' : '#374151',
      tableHeaderBg: mode === 'light' ? '#F8FAFC' : '#1F2937',
      tooltipBg: mode === 'light' ? '#616161' : '#E0E0E0',
      hashrateColor: dataColors.hashrate,
      workersColor: dataColors.workers,
      revenueColor: dataColors.revenue,
      feesColor: dataColors.fees,
      cardBg: mode === 'light' ? whiteColor : '#1E293B',
      modalBg: mode === 'light' ? whiteColor : '#1E293B',
      borderColor: mode === 'light' ? '#E2E8F0' : '#374151',
    },
    mode: mode,
    common: {
      black: blackColor,
      white: whiteColor,
    },
    primary: {
      light: '#42A5F5',
      main: lightColor,
      dark: '#1565C0',
      contrastText: whiteColor,
    },
    secondary: {
      light: '#B0BEC5',
      main: '#607D8B',
      dark: '#455A64',
      contrastText: whiteColor,
    },
    error: {
      light: '#EF5350',
      main: miningPoolColors.offline,
      dark: '#C62828',
      contrastText: whiteColor,
    },
    warning: {
      light: '#FFB74D',
      main: miningPoolColors.degraded,
      dark: '#F57C00',
      contrastText: mode === 'light' ? blackColor : whiteColor,
    },
    info: {
      light: '#64B5F6',
      main: '#2196F3',
      dark: '#1976D2',
      contrastText: whiteColor,
    },
    success: {
      light: '#81C784',
      main: miningPoolColors.online,
      dark: '#388E3C',
      contrastText: whiteColor,
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161',
    },
    text: {
      primary: mode === 'light' ? 'rgba(26, 26, 26, 0.87)' : 'rgba(255, 255, 255, 0.87)',
      secondary: mode === 'light' ? 'rgba(26, 26, 26, 0.6)' : 'rgba(255, 255, 255, 0.6)',
      disabled: mode === 'light' ? 'rgba(26, 26, 26, 0.38)' : 'rgba(255, 255, 255, 0.38)',
    },
    divider: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: mode === 'light' ? whiteColor : darkPaperBgColor,
      default: defaultBgColor,
    },
    action: {
      active: mode === 'light' ? 'rgba(26, 26, 26, 0.54)' : 'rgba(255, 255, 255, 0.54)',
      hover: mode === 'light' ? 'rgba(26, 26, 26, 0.04)' : 'rgba(255, 255, 255, 0.04)',
      selected: mode === 'light' ? 'rgba(25, 118, 210, 0.08)' : 'rgba(66, 165, 245, 0.08)',
      disabled: mode === 'light' ? 'rgba(26, 26, 26, 0.26)' : 'rgba(255, 255, 255, 0.26)',
      disabledBackground: mode === 'light' ? 'rgba(26, 26, 26, 0.12)' : 'rgba(255, 255, 255, 0.12)',
      focus: mode === 'light' ? 'rgba(25, 118, 210, 0.12)' : 'rgba(66, 165, 245, 0.12)',
      hoverOpacity: 0.04,
      selectedOpacity: 0.08,
      disabledOpacity: 0.26,
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    getContrastText: () => '#fff',
    augmentColor: () => ({} as any)
  } as Palette;
};

export default DefaultPalette;
