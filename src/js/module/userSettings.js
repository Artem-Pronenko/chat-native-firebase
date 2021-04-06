import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import {updateMessage} from './updateMessage'


const db = firebase.database()

export const updateUser = async ({uid, username, userPhoto, userBio}) => {
  await db.ref(`users/${uid}`).set({username, userPhoto, userBio})
  await firebase.auth().currentUser.updateProfile({
    displayName: username,
    photoURL: userPhoto
  })

  updateMessage({displayName: username, photoURL: userPhoto})
}

export const getUserInfo = async user => {
  const userData = await db.ref(`users/${user.uid}`).get()
  const userInfo = userData.val()

  return {
    ...user,
    ...userInfo
  }
}

const logOut = async () => {
  await firebase.auth().signOut()
  window.location.reload()
}


export const userSettings = async user => {
  const profileButton = document.querySelector('.profile-button')
  const userModal = document.querySelector('.user-settings-modal')
  const closeModalButton = userModal.querySelector('.close-user-settings')
  const settingsForm = userModal.querySelector('.settings-form')
  const signOut = userModal.querySelector('.signOut')

  const userModalName = document.querySelector('.input-user-name')
  const userModalPhoto = document.querySelector('.input-user-photo')
  const userModalBio = document.querySelector('.input-user-bio')

  const showModal = () => userModal.classList.add('show')
  const hideModal = () => userModal.classList.remove('show')

  const {username, userBio, userPhoto} = await getUserInfo(user)
  userModalName.value = username
  userModalPhoto.value = userPhoto
  userModalBio.value = userBio

  const handleSubmit = e => {
    e.preventDefault()
    updateUser({
      ...user,
      username: userModalName.value,
      userBio: userModalBio.value,
      userPhoto: userModalPhoto.value
    })
  }

  signOut.addEventListener('click', logOut)
  profileButton.addEventListener('click', showModal)
  closeModalButton.addEventListener('click', hideModal)
  settingsForm.addEventListener('submit', handleSubmit)

}
