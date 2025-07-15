import { styled, IconButton, Tooltip } from '@mui/material'
import { Link } from '@mui/material'
import Box from '@mui/material/Box'
import { LightMode, DarkMode } from '@mui/icons-material'
import { Settings } from 'src/@core/context/settingsContext'

interface Props {
  hidden: boolean
  settings: Settings
  useHeaderBackgroundImage?: boolean
  menuOpenHandler: () => void
  saveSettings: (values: Settings) => void
}


const LinkStyled = styled(Link)(() => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  width: '200px',
  fontWeight: '600',
}))

const HeaderBarContent = ({ settings, saveSettings }: Props) => {
  const handleThemeToggle = () => {
    saveSettings({ 
      ...settings, 
      mode: settings.mode === 'light' ? 'dark' : 'light' 
    })
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }}
    >
      <Box sx={{ display: 'flex', }}>
        <LinkStyled
          href={'/mining-pools-dashboard'}
        >
          Mining Pools
        </LinkStyled>
      </Box>
     
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '30%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Tooltip title="Toggle theme">
            <IconButton onClick={handleThemeToggle}>
              {settings.mode === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

export default HeaderBarContent
