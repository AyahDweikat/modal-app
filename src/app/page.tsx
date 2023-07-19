"use client";
// import Image from 'next/image'
import styles from "./page.module.css";
// import ModalPage from '@/Pages/Modal/ModalPage'

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <ModalPage />
//     </main>
//   )
// }
import React from "react";

import SomeComponent from "@/Components/SomeComponent";
import { MainPage, Modal } from "./ModalContext";

export default function Home() {
  return (
    <div className={styles.main}>
      <MainPage>
        <Modal>
          <Modal.Header />
          <Modal.Body>
            <SomeComponent />
          </Modal.Body>
          <Modal.Footer />
        </Modal>
      </MainPage>
    </div>
  );
}
