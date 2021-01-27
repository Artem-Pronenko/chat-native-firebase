import firebase from 'firebase/app'
import 'firebase/firestore'
import {uid as createUid} from 'uid'

const db = firebase.firestore()

const setPost = async ({message, user}) => {
  try {
    const id = createUid(16)
    const {uid, displayName, photoURL} = user

    await db.collection('message').doc(id).set({
      createAt: Date.now(),
      message,
      uid,
      displayName,
      photoURL,
      id
    })
  } catch (e) {
    console.error(e)
  }

}


export const handleMessage = user => {
  const messageForm = document.querySelector('.message-form')

  const handleForm = e => {
    const input = document.querySelector('.input-message')
    e.preventDefault()
    setPost({
      message: input.value, user
    }).then(() => input.value = '')

  }

  messageForm.addEventListener('submit', handleForm)
}
