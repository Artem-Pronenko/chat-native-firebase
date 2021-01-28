import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

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

}

export const getUserInfo = async (user) => {
  const userData = await db.ref(`users/${user.uid}`).get()
  const userInfo = userData.val()
  return {
    ...user,
    ...userInfo
  }
}


export const userSettings = (user) => {
  const userModal = document.querySelector('.user-modal')
  const close = userModal.querySelector('.close')
  const settingsForm = userModal.querySelector('.settings-form')
  userModal.classList.add('show')


  close.addEventListener('click', () => userModal.classList.remove('show'))

  settingsForm.addEventListener('submit', e => {
    e.preventDefault()
    const userName = document.querySelector('.input-user-name').value
    const userPhoto = document.querySelector('.input-user-photo').value
    const userBio = document.querySelector('.input-user-bio').value
    updateUser(user, userName, userPhoto, userBio)
  })
}
