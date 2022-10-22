import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Table from '../../components/table/Table'
import styles from './TransactionList.module.scss'


const TransactionList = () => {
  return (
    <section className={styles.transactionList}>
      <Sidebar/>
      <div className = {styles.listContainer}>
        <Navbar/>
        <div className={styles.listWrapper}>
        <Table/>
        </div>
      </div>
    </section>
  )
}

export default TransactionList