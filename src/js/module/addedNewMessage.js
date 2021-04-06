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
      id,
      photoURL
    })

  } catch(e) {
    console.error(e)
  }
}



export const handleMessage = user => {
  const messageForm = document.querySelector('.message-form')

  const handleForm = e => {
    e.preventDefault()
    const input = document.querySelector('.input-message')
    const message = input.value.trim()

    if (message === '') {
      alert('Для отправки смс поле должно быть заполненно!')
      return
    }

    const scroll = document.querySelector('.messages')
    setPost({
      message, user
    })
      .then(() => {
        input.value = ''
        scroll.scrollTop = scroll.scrollHeight
      })
  }

  messageForm.addEventListener('submit', handleForm)

}
