import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import {updateMessage} from './updateMessage'

const db = firebase.database()


export const updateUser = async ({uid}, username, userPhoto, userBio) => {

  await db.ref(`users/${uid}`).set({
    username,
    userPhoto,
    userBio,
    uid
  })

  await firebase.auth().currentUser.updateProfile({
    displayName: username,
    photoURL: userPhoto
  })

  await updateMessage({displayName: username, photoURL: userPhoto})

}

export const getUserInfo = async (user) => {
  const userData = await db.ref(`users/${user.uid}`).get()
  const userInfo = userData.val()
  return {
    ...user,
    ...userInfo
  }
}


export const userSettings = async user => {
  const profileButton = document.querySelector('.profile-button')
  const userModal = document.querySelector('.user-settings-modal')
  const close = userModal.querySelector('.close-user-settings')
  const settingsForm = userModal.querySelector('.settings-form')
  const signOut = userModal.querySelector('.signOut')

  const userModalName = document.querySelector('.input-user-name')
  const userModalPhoto = document.querySelector('.input-user-photo')
  const userModalBio = document.querySelector('.input-user-bio')

  const {username, userBio, userPhoto} = await getUserInfo(user)
  userModalName.value = username
  userModalPhoto.value = userPhoto
  userModalBio.value = userBio


  profileButton.addEventListener('click', () => userModal.classList.add('show'))
  close.addEventListener('click', () => userModal.classList.remove('show'))

  settingsForm.addEventListener('submit', e => {
    e.preventDefault()
    updateUser(user, userModalName.value, userModalPhoto.value, userModalBio.value)
  })

  signOut.addEventListener('click', () => {
    firebase.auth().signOut()
    window.location.reload()
  })
}
