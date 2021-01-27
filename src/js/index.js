import firebase from 'firebase/app'
import './modules/firebase'
import 'firebase/auth'
import {renderInDocument} from './modules/utils'
import {mainContent} from './components/mainContent'
import {handleMessage} from './modules/addedNewMessage'
import {vueMessage} from './modules/vueMessage'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/style.sass'


firebase.auth().onAuthStateChanged(async user => {
  if (!user) {
    const {auth} = await import('./modules/auth')
    auth()
    return
  }
  renderInDocument(mainContent())
  handleMessage(user)
  vueMessage()

})
