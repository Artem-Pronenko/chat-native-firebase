import firebase from 'firebase/app'
import 'firebase/auth'
import {renderInDocument} from './utiles'

const createModalAuth = () => {
  return `
    <main class="text-center form-signin main">
      <form class="sin-in-form">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <label for="inputEmail" class="invisible sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="invisible sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </main>
  `
}


const authEmailAndPassword = async (email, password) => {
  try {
    const userData = await firebase.auth().createUserWithEmailAndPassword(email, password)
    const user = userData.user
    console.log(user)
  } catch (e) {
    console.error(e)
  }
}

export const auth = () => {
  renderInDocument(createModalAuth())
  const form = document.querySelector('.sin-in-form')
  const inputEmail = document.querySelector('#inputEmail')
  const inputPassword = document.querySelector('#inputPassword')

  form.addEventListener('submit', ev => {
    ev.preventDefault()
    authEmailAndPassword(inputEmail.value, inputPassword.value)
  })


}
