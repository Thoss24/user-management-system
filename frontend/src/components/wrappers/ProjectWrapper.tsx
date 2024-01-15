import { ModalContext } from "../../store/edit_user_context_modal";
import { useContext } from "react";
import classes from './ProjectWrapper.module.css';
import Header from "../header/Header";
import NewUserForm from "../user_forms/NewUserForm";
import UsersList from "../users/UsersList";

const ProjectWrapper = () => {

    const editUserModalContext = useContext(ModalContext);

    return (
        <>
        {editUserModalContext.isDisplaying && <div className={classes.background}/>}
        <Header />
        <NewUserForm />
        <UsersList />
        </>
    )
}

export default ProjectWrapper