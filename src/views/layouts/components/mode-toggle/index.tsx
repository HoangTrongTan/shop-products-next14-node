import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import IconifyIcon from '../../../../components/Icon'
import { useSettings } from 'src/hooks/useSettings'
import { Mode } from 'src/types/layouts'

const ModelToggle = () => {
  const { settings , saveSettings } = useSettings()
  const handleModeChange = (mode: Mode) => {
    saveSettings({...settings, mode})
  }
  const handleToggleMode = () => {
    if(settings.mode === "light"){
      handleModeChange('dark')
    }else{
      handleModeChange('light')
    }
  }

  return (
    <IconButton color='inherit' onClick={handleToggleMode}>
      <IconifyIcon icon={settings.mode === 'light' ? 'ic:round-dark-mode' : 'material-symbols-light:light-mode'} />
    </IconButton>
  )
}

export default ModelToggle
