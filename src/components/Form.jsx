import {useState} from 'react';
import firebase from 'firebase/app'
import {storage} from 'firebase.js';
import {ref, uploadBytesResumable} from 'firebase/storage'




const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return(
        <div>
            <input
                type='email'
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                placeholder = 'email'
            />
            <input
                type='password'
                value = {pass}
                onChange = {(e) => setPass(e.target.value)}
                placeholder = 'password'
            />

            <button onClick={() => handleClick(email, pass)}>
                {title}
            </button>
        </div>
    )
}

export {Form}