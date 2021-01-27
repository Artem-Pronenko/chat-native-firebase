import firebase from 'firebase/app'
import 'firebase/auth'


const isAuthChecker = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('user exist')
      return user
    } else {
      console.log('user not exist')
      return null
    }
  })
}

export default isAuthChecker