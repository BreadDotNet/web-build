import {Navigate} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {useAuth} from 'hooks/use-auth'
import {removeUser} from 'store/slices/userSlice';

const HomePage = () => {
    
    const dispatch = useDispatch();

    const {isAuth, email} = useAuth();

    return isAuth ? (
        <div>
           
        </div>
    ) : (
        <Navigate to='/login'/>
    )
}

export default HomePage