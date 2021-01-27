import './modules/firebase'
import isAuthChecker from './modules/authChecker'


import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/style.sass'

const user = isAuthChecker()

;(async () => {

  if (user === null) {
    const {auth} = await import('./modules/auth')
    auth()
  }


})()





