import { List } from '@mui/material'
import { NextPage } from 'next'
import * as React from 'react'
import { Collapse, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import IconifyIcon from 'src/components/Icon'
import { VerticalItems } from 'src/configs/layout'

type TProps = {
  open: boolean
}

type TListItems = {
  level: number
  openItems: {
    [key: string]: boolean
  }
  items: any
  setOpenItems: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>
  disabled: boolean
}
const RecursiveListItems = ({ items, level, openItems, setOpenItems, disabled }: TListItems) => {
  const handleClick = (title: string) => {
    setOpenItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }
  
  return (
    <>
      {items.map((item: any, i: any) => (
        <React.Fragment key={i}>
          <ListItemButton
            onClick={() => {
              if (item.children) {
                handleClick(item.title)
              }
            }}
            sx={{ paddingLeft: `${level * 10}px` }}
          >
            <ListItemIcon>
              <IconifyIcon icon={item.icon} />
            </ListItemIcon>
            {!disabled && <ListItemText primary={item.title} />}
            {item.children && item.children.length > 0 && (
              <>
                {openItems[item.title] ? (
                  <IconifyIcon icon={'material-symbols:expand-less'} />
                ) : (
                  <IconifyIcon icon={'ic:baseline-expand-more'} />
                )}
              </>
            )}
          </ListItemButton>
          {item.children && item.children?.length > 0 && (
            <>
              <Collapse in={openItems[item.title]} timeout='auto' unmountOnExit>
                <RecursiveListItems
                  items={item.children}
                  level={level + 1}
                  disabled={!disabled}
                  setOpenItems={setOpenItems}
                  openItems={openItems}
                />
              </Collapse>
            </>
          )}
        </React.Fragment>
      ))}
    </>
  )
}

const ListVerticalLayout: NextPage<TProps> = ({ open }) => {
  const [openListItem, setOpenListItem] = React.useState<{ [key: string]: boolean }>({})
  React.useEffect(() => {
    if (!open) {
      handleToggleAll()
    }
  }, [open])
  const handleToggleAll = () => {
    setOpenListItem({})
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      aria-labelledby='nested-list-subheader'
    >
      <RecursiveListItems
        disabled={!open}
        items={VerticalItems}
        level={1}
        setOpenItems={setOpenListItem}
        openItems={openListItem}
      />
    </List>
  )
}

export default ListVerticalLayout
