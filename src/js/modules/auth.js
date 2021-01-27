import firebase from 'firebase/app'
import 'firebase/auth'
import {removeNode, renderInDocument} from './utils'

const createModalAuth = () => {
  return `
    <aside class="text-center form-signin">
      <form class="sin-in-form">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <label for="inputName" class="invisible sr-only">Your name</label>
        <input type="text" id="inputName" class="form-control" placeholder="Your name" required autofocus>
        <label for="inputEmail" class="invisible sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="invisible sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </aside>
  `
}


const authEmailAndPassword = async (email, password, username) => {
  try {
    const userData = await firebase.auth().createUserWithEmailAndPassword(email, password)
    const user = userData.user

    await user.updateProfile({
      photoURL: `https://via.placeholder.com/150?Text=${user.displayName}`,
      displayName: username || user
    })
  } catch (e) {
    console.error(e)
  }
}

export const auth = () => {
  renderInDocument(createModalAuth())
  const form = document.querySelector('.sin-in-form')
  const inputEmail = form.querySelector('#inputEmail')
  const inputPassword = form.querySelector('#inputPassword')
  const inputName = form.querySelector('#inputName')

  const handleSubmit = (e) => {
    e.preventDefault()
    authEmailAndPassword(inputEmail.value, inputPassword.value, inputName.value)
      .then(() => {
        form.removeEventListener('submit', handleSubmit)
        removeNode('.form-signin')
      })
  }
  form.addEventListener('submit', handleSubmit)


}
