import React from "react";
import styles from "./Table.module.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dataRow from "../utils/data";

const List = () => {

  return (
    <TableContainer component={Paper} className={styles.table}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableCell}>Transaction ID</TableCell>
            <TableCell className={styles.tableCell}>Amount</TableCell>
            <TableCell className={styles.tableCell}>Payed By</TableCell>
            <TableCell className={styles.tableCell}>Payment Date</TableCell>
            <TableCell className={styles.tableCell}>Added On</TableCell>
            <TableCell className={styles.tableCell}>Added By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataRow.data.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.id}</TableCell>
              {/* <TableCell className={styles.tableCell}>{row.id}</TableCell> */}
              <TableCell className={styles.tableCell}>{row.amount}</TableCell>
              <TableCell className={styles.tableCell}>{row.paymentBy}</TableCell>
              <TableCell className={styles.tableCell}>{row.date}</TableCell>
              <TableCell className={styles.tableCell}>{row.addedOn}</TableCell>
              <TableCell className={styles.tableCell}>{row.addedBy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
