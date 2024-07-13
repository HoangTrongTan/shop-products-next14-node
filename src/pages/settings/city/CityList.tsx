// ** Next
import { NextPage } from 'next'

// ** React
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// ** Mui
import { Box, Grid, Typography, useTheme } from '@mui/material'
import { GridColDef, GridRowSelectionModel, GridSortModel } from '@mui/x-data-grid'

// // ** Redux
// import { useDispatch, useSelector } from 'react-redux'
// import { AppDispatch, RootState } from 'src/stores'
// import { deleteCityAsync, deleteMultipleCityAsync, getAllCitiesAsync } from 'src/stores/city/actions'
// import { resetInitialState } from 'src/stores/city'

// // ** Components
// import GridDelete from 'src/components/grid-delete'
// import GridEdit from 'src/components/grid-edit'
// import GridCreate from 'src/components/grid-create'
// import InputSearch from 'src/components/input-search'
// import CustomDataGrid from 'src/components/custom-data-grid'
// import Spinner from 'src/components/spinner'
// import ConfirmationDialog from 'src/components/confirmation-dialog'
// import CustomPagination from 'src/components/custom-pagination'
// import TableHeader from 'src/components/table-header'
// import CreateEditCity from 'src/views/pages/settings/city/component/CreateEditCity'

// // ** Others
// import toast from 'react-hot-toast'
// import { OBJECT_TYPE_ERROR_CITY } from 'src/configs/error'

// // ** Hooks
// import { usePermission } from 'src/hooks/usePermission'

// // ** Config
// import { PAGE_SIZE_OPTION } from 'src/configs/gridConfig'

// // ** Utils
// import { formatDate } from 'src/utils/date'
// import { hexToRGBA } from 'src/utils/hex-to-rgba'

type TProps = {}

const CityListPage: NextPage<TProps> = () => {

  return (
    <>
      {/* {loading && <Spinner />}
      <ConfirmationDialog
        open={openDeleteCity.open}
        handleClose={handleCloseConfirmDeleteCity}
        handleCancel={handleCloseConfirmDeleteCity}
        handleConfirm={handleDeleteCity}
        title={t('Title_delete_city')}
        description={t('Confirm_delete_city')}
      />
      <ConfirmationDialog
        open={openDeleteMultipleCity}
        handleClose={handleCloseConfirmDeleteMultipleCity}
        handleCancel={handleCloseConfirmDeleteMultipleCity}
        handleConfirm={handleDeleteMultipleCity}
        title={t('Title_delete_multiple_city')}
        description={t('Confirm_delete_multiple_city')}
      />
      <CreateEditCity open={openCreateEdit.open} onClose={handleCloseCreateEdit} idCity={openCreateEdit.id} />
      {isLoading && <Spinner />}
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
          height: '100%',
          width: '100%'
        }}
      >
        <Grid container sx={{ height: '100%', width: '100%' }}>
          {!selectedRow?.length && (
            <Box
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4, mb: 4, width: '100%' }}
            >
              <Box sx={{ width: '200px' }}>
                <InputSearch value={searchBy} onChange={(value: string) => setSearchBy(value)} />
              </Box>
              <GridCreate
                disabled={!CREATE}
                onClick={() => {
                  setOpenCreateEdit({
                    open: true,
                    id: ''
                  })
                }}
              />
            </Box>
          )}
          {selectedRow?.length > 0 && (
            <TableHeader
              numRow={selectedRow?.length}
              onClear={() => setSelectedRow([])}
              handleAction={handleAction}
              actions={[{ label: t('Xóa'), value: 'delete', disabled: !DELETE }]}
            />
          )}
          <CustomDataGrid
            rows={cities.data}
            columns={columns}
            autoHeight
            sx={{
              '.row-selected': {
                backgroundColor: `${hexToRGBA(theme.palette.primary.main, 0.08)} !important`,
                color: `${theme.palette.primary.main} !important`
              }
            }}
            checkboxSelection
            sortingOrder={['desc', 'asc']}
            sortingMode='server'
            onSortModelChange={handleSort}
            getRowId={row => row._id}
            disableRowSelectionOnClick
            slots={{
              pagination: PaginationComponent
            }}
            rowSelectionModel={selectedRow}
            onRowSelectionModelChange={(row: GridRowSelectionModel) => {
              setSelectedRow(row as string[])
            }}
            disableColumnFilter
            disableColumnMenu
          />
        </Grid>
      </Box> */}
    </>
  )
}

export default CityListPage
