"use client"
import styles from '../../app/page.module.css'

import React, { useState } from 'react'
import ModalWindow from '../ModalWindow/ModalWindow'
const ModalPage = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)

  return (
    <div className={styles.mainPage} onClick={()=>setModalOpen(false)}>
      <button onClick={(e)=>{
        e.stopPropagation()
        setModalOpen(true)
      }}>
        Open Modal</button>
      {modalOpen && <ModalWindow handleOpenModal={setModalOpen} />}
    </div>
  )
}

export default ModalPage