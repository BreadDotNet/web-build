import {Form} from './Form';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { setUser } from 'store/slices/userSlice'; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const push = () => navigate('/');

    const handleRegister = (email, password) => {

        const auth = getAuth();
        
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push();
            })
            .catch(console.error)
    }

    return (
        <Form
            title = 'Register'
            handleClick = {handleRegister}
        />
    )
}

export {SignUp}