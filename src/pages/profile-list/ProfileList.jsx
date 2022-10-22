import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ProfileTable from '../../components/profiletable/ProfileTable'
import Sidebar from '../../components/sidebar/Sidebar'
import styles from './ProfileList.module.scss'


const ProfileList = () => {
  return (
    <section className={styles.profileList}>
      <Sidebar/>
      <div className = {styles.listContainer}>
        <Navbar/>
        <ProfileTable/>
      </div>
    </section>
  )
}

export default ProfileList