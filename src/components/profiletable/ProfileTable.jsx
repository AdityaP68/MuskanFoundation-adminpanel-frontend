import React from "react";
import styles from "./ProfileTable.module.scss";
import { DataGrid } from "@mui/x-data-grid";
import data from "../utils/data";
import { useNavigate } from "react-router-dom";

const ProfileTable = () => {
  const navigate = useNavigate()
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className={styles.cellAction}>
            <div className={styles.viewButton} onClick={()=>{navigate('/users/:userId')}}>View</div>
            <div className={styles.deleteButton}>Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className={styles.datatable}>
      <DataGrid
        rows={data.rows}
        columns={data.columns.concat(actionColumn)}
        pageSize={20}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default ProfileTable;
