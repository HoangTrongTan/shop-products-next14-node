import {  IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import IconifyIcon from 'src/components/Icon'
import { LANGUAGES_OPTIONS } from 'src/configs/i18n'

// interface TStyledItem extends BoxProps {
//   selected: boolean
// }

// const StyledItemLanguages = styled(Box)<TStyledItem>(({ theme, selected }) => ({
//   cursor: 'pointer',
//   '.MuiTypography-root': {
//     padding: '8px 12px'
//   },
//   '&:hover': {
//     backgroundColor: '#F0F0F0'
//   },
//   ...(selected && {
//     background: '#F0F0F0'
//   })
// }))

function LanguageDropDown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const { i18n } = useTranslation()
  console.log('I18n', i18n.language)
  const OnchangLanguages = (lang: string) => {
    i18n.changeLanguage(lang)
  }
  return (
    <>
      <IconButton color='inherit' id='languages-dropdown' onClick={handleOpen}>
        <IconifyIcon icon='system-uicons:translate' />
      </IconButton>
      <Menu
        id={'languages-dropdown'}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {LANGUAGES_OPTIONS &&
          LANGUAGES_OPTIONS.map(lang => (
            <MenuItem
              selected={lang.value === i18n.language}
              key={lang.value}
              onClick={() => OnchangLanguages(lang.value)}
            >
              {lang.lang}
            </MenuItem>
          ))}
      </Menu>
    </>
  )
}

export default LanguageDropDown
