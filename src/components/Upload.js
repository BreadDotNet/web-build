import {upload} from 'upload'
import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytesResumable} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCj4QZ9pUNO1dtdGc0Ac42zZ0fExaPw6CQ",
    authDomain: "fe-upload-ebcaa.firebaseapp.com",
    projectId: "fe-upload-ebcaa",
    storageBucket: "fe-upload-ebcaa.appspot.com",
    messagingSenderId: "539283342587",
    appId: "1:539283342587:web:d06d379689245a7539dc5e"
}

const app = initializeApp(firebaseConfig)

const storage = getStorage(app)

console.log(storage)

upload('#file', {
    multi: true,
    accept: ['.png', '.jpg', '.jpeg', '.gif'],
    onUpload(files, blocks) {
        files.forEach((file, index) => {
            const storageRef = ref(storage, `images/${file.name}`)
            const task = uploadBytesResumable(storageRef, file)

            task.on('state_changed', snapshot => {
                //const precentage = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0)
                //const block = blocks[index].querySelector('.preview-info-progress')
                //block.textContent = precentage
                //block.style.width = precentage + '%'
                //console.log(precentage)
            }, error => {
                console.log(error)
            }, () => {
                console.log('Complete')
            })
        })
    }
})

export {upload}