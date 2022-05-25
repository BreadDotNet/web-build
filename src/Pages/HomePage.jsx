import {Navigate} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {useAuth} from 'hooks/use-auth'
import {removeUser} from 'store/slices/userSlice';
import {storage} from 'firebase.js';
import {ref, uploadBytesResumable} from 'firebase/storage'
import {useState} from 'react';


const HomePage = () => {
    
    const dispatch = useDispatch();

    const {isAuth, email} = useAuth();

    const [imageUpload, setUpload] = useState(null)

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `${email}/${imageUpload.title}`)
        uploadBytesResumable(imageRef, imageUpload).then(() => {
            alert('Image Uploded')
        })
    }

    return isAuth ? (
        <div>
        <div>
            <input
                type='file'
                accept='.png, .jpg, .jpeg, .gif'
                onChange={(event) => {setUpload(event.target.files[0])}}
            />

            <button onClick={uploadImage}>
                Загрузить
            </button>
        </div>
        <br/>
        <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
        </div>
       
    ) : (
        <Navigate to='/login'/>
    )
}

export default HomePage