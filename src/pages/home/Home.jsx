import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import styles from './Home.module.scss'


const Home = () => {
  return (
    <div className={styles.home}>
        <Sidebar/>
        <div className={styles.homeContainer}>conatiner</div>
    </div>
  )
}

export default Home