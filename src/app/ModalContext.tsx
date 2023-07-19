"use client";
import {  useContext, useState, ReactNode } from "react";
import styles from "../app/page.module.css";
import { ModalContext } from "@/Context/context";

interface Props {
  children?: ReactNode;
}
interface ToggleContextType {
  modalOpen: boolean;
  setModalOpen: (state: boolean) => void;
}


export const MainPage:React.FC<Props> =({children}) =>{
  const {modalOpen, setModalOpen } = useContext<ToggleContextType>(ModalContext);
  return (
    <div className={styles.mainPage} 
    onClick={() => setModalOpen(false)}
    >
    <button
      className={styles.Btn}
      onClick={(e) => {
        e.stopPropagation();
        setModalOpen(true);
        console.log("hello")
      }}
    >
      Open Modal
    </button>
    {modalOpen && (
      <div 
      onClick={(e) => e.stopPropagation()} 
      className={styles.modalScreen}>
        {children}
      </div>
    )}
    </div>
  );
}





export const Modal= (props:any) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      <div className={styles.modalBody}>{props.children}</div>
    </ModalContext.Provider>
  );
}
function Header (){
  const { setModalOpen } = useContext(ModalContext);
  return (
    <button
      className={styles.Btn}
      onClick={(e) => {
        e.stopPropagation();
        setModalOpen(false);
      }}
    >
      X
    </button>
  )
}
const Body: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}
function Footer (){
  const { setModalOpen } = useContext(ModalContext);
  return (
    <button
      className={styles.Btn}
      onClick={(e) => {
        e.stopPropagation();
        setModalOpen(false);
      }}
    >
      Close Button
    </button>
  )
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer =Footer;





