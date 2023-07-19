import { createContext } from "react";

interface ToggleContextType {
  modalOpen: boolean;
  setModalOpen: (state: boolean) => void;
}
export const ModalContext = createContext<ToggleContextType>({modalOpen:false, setModalOpen: () => {}});
