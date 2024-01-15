import { ReactNode, useState, createContext } from "react";
import modalContextActions from './edit_user_context_actions';

interface Props {
    children: ReactNode
}

export const ModalContext = createContext(modalContextActions);

const EditUserContextProvider = ({ children }: Props) => {

    const [isDisplaying, setIsDisplaying] = useState<boolean>(false);

    const userModalState = {
        isDisplaying: isDisplaying,
        setIsDisplaying: setIsDisplaying
    }

    return <ModalContext.Provider value={userModalState}>{children}</ModalContext.Provider>

}

export default EditUserContextProvider