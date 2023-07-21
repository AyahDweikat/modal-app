"use client";
import { useContext, useState, ReactNode } from "react";
import styles from "../app/page.module.css";
import { ModalContext } from "@/Context/context";

interface Props {
  children?: ReactNode;
}
interface ToggleContextType {
  modalOpen: boolean;
  setModalOpen: (state: boolean) => void;
}

export const Flyout = (props: any) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      <div>{props.children}</div>
    </ModalContext.Provider>
  );
};

export const MainPage: React.FC<Props> = ({ children }) => {
  const { modalOpen, setModalOpen } =
    useContext<ToggleContextType>(ModalContext);
  return (
    <div className={styles.mainPage} onClick={() => setModalOpen(false)}>
      <button
        className={styles.mainBtn}
        onClick={(e) => {
          e.stopPropagation();
          setModalOpen(true);
        }}
      >
        Open Modal
      </button>
      {modalOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className={styles.modalDialog}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const Header: React.FC<Props> = ({ children }) => {
  const { setModalOpen } = useContext(ModalContext);
  return (
    <div className={styles.modalHeader}>
      <div>{children}</div>
      <button
        className={styles.xBtn}
        onClick={(e) => {
          e.stopPropagation();
          setModalOpen(false);
        }}
      >
        X
      </button>
    </div>
  );
};
const Body: React.FC<Props> = ({ children }) => {
  return <div className={styles.modalBody}>{children}</div>;
};
const Footer: React.FC<Props> = ({ children }) => {
  const { setModalOpen } = useContext(ModalContext);
  return (
    <div className={styles.modalFooter} onClick={(e) => e.stopPropagation()}>
      {children}
      <button
        className={styles.closeBtn}
        onClick={() => {
          setModalOpen(false);
        }}
      >
        Close
      </button>
    </div>
  );
};

Flyout.MainPage = MainPage;
Flyout.Header = Header;
Flyout.Body = Body;
Flyout.Footer = Footer;
