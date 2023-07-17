import Image from 'next/image'
import styles from './page.module.css'
import ModalPage from '@/Pages/Modal/ModalPage'


export default function Home() {
  return (
    <main className={styles.main}>
      <ModalPage />
    </main>
  )
}
