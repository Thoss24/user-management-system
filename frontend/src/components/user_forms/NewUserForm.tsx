import classes from './NewUserForm.module.css';
import { useState, useRef } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { usersActions } from '../../store/users_slice';
import { useAppDispatch } from '../../hooks/hooks';
import { UserRowSql } from '../../models/user_sql_row';

const NewUserForm: React.FC<{}> = () => {

    const dispatch = useAppDispatch();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [position, setPosition] = useState<string>('');

    const nameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const positionInputRef = useRef<HTMLInputElement>(null);

    const userState = useAppSelector(state => state.users.users);
    const newUserId = userState.length + 1

    const addNewUserHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user: UserRowSql = {
            id: newUserId,
            name: name,
            email: email,
            position: position,
            lastEdited: String(Date.now())
        };

        try {
            const response = await fetch('http://localhost/user-management-system/backend/api.php', {
                method: 'POST',
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw Error("Something went wrong!")
            }
    
            const data = await response.json();
            
            dispatch(usersActions.addUser(user))

            setName('')
            setEmail('')
            setPosition('')

        } catch (error) {
            console.error('Error:', error)
        }

    };

    return (
        <form action="POST" className={classes['new-user-form']} onSubmit={addNewUserHandler}>
        <fieldset >
        <legend>Add new user</legend>
        <div className={classes['input-section']}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name='name' ref={nameInputRef} onChange={(e) => setName(e.target.value)}/>
        </div>
  
        <div className={classes['input-section']}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name='email' ref={emailInputRef} onChange={(e) => setEmail(e.target.value)}/>
        </div>
  
        <div className={classes['input-section']}>
        <label htmlFor="position">Position</label>
        <input type="text" id="position" name='position' ref={positionInputRef} onChange={(e) => setPosition(e.target.value)}/>
        </div>
        <button type='submit'>Submit</button>
        </fieldset>
      </form>
    )
};

export default NewUserForm