"use client";
import styles from "./page.module.css";
import React from "react";
import SomeComponent from "@/Components/SomeComponent";
import { Flyout } from "./ModalContext";

export default function Home() {
  return (
    <div className={styles.main}>
      <Flyout>
        <Flyout.MainPage>
          <Flyout.Header>
            <p className={styles.title}>Modal Form</p>
          </Flyout.Header>
          <Flyout.Body>
            ...
            <SomeComponent />
            ...
          </Flyout.Body>
          <Flyout.Footer>
           <button className={styles.mainBtn} onClick={()=>console.log("footer")}>Confirm</button>
          </Flyout.Footer>
        </Flyout.MainPage>
      </Flyout>
    </div>
  );
}
