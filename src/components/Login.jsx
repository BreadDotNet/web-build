import {Form} from './Form';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { setUser } from 'store/slices/userSlice'; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const push = () => navigate('/');

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push();
            })
            .catch(() => alert('Invalid user'))
    }

    return(
        <Form
            title = 'Sign in'
            handleClick = {handleLogin}
        />
    )
}

export {Login}