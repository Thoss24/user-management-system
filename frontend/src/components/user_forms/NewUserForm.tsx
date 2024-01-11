import classes from './NewUserForm.module.css';
import { useState, useRef } from 'react';

const NewUserForm: React.FC<{}> = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [position, setPosition] = useState<string>('');

    const nameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const positionInputRef = useRef<HTMLInputElement>(null);

    const addNewUserHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = {
            name: name,
            email: email,
            position: position
        };

        try {
            const response = await fetch('http://localhost/user-management-system/backend/api.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({name})
            });
    
            const data = await response.json();
    
            console.log(data)

            setName('')
            setEmail('')
            setPosition('')

        } catch (error) {
            console.error('Error:', error)
        }

    };

    return (
        <form action="" className={classes['new-user-form']} onSubmit={addNewUserHandler}>
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