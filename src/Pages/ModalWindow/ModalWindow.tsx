import React from 'react'
import styles from '../../app/page.module.css'

interface ModalWindowProps {
    handleOpenModal:(state:boolean)=>void;
}
const ModalWindow : React.FC<ModalWindowProps> = ({handleOpenModal}) => {
  return (
    <div className={styles.modalScreen}>
        
        <button onClick={(e)=>{
        e.stopPropagation()
        handleOpenModal(false)
      }}
      >Close Button</button>
    </div>
  )
}

export default ModalWindow