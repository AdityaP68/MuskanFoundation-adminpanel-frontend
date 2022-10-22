import React from 'react'
import styles from './ProfileTable.module.scss'
import { DataGrid } from '@mui/x-data-grid';
import data from '../utils/data'




const ProfileTable = () => {
  return (
    <div className={styles.datatable}>
        <DataGrid
        rows={data.rows}
        columns={data.columns}
        pageSize={20}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default ProfileTable