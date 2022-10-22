import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import styles from './Profile.module.scss'

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Sidebar/>
      <div className={styles.profileContainer}>
        <Navbar/>
        single
      </div>
    </div>
  )
}

export default Profile