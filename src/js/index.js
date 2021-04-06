import firebase from 'firebase/app'
import 'firebase/auth'
import './module/firebaseConfig'
import {getUrlHash, renderInDocument, setLocation} from './utiles'
import {mainContent} from './components/mainContent'
import {handleMessage} from './module/addedNewMessage'
import {viewMassage} from './module/viewMessage'
import {userSettingsModal} from './components/userSettingsModal'
import {userSettings} from './module/userSettings'
import {userProfile} from './components/userProfile'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/style.sass'
import {manageMessage} from './module/manageMessage';


firebase.auth().onAuthStateChanged(async user => {
  if (!user) {
    const {auth} = await import('./module/auth')
    setLocation(getUrlHash() || '#register')
    auth()
    return
  }
  setLocation('/')
  console.log(user)
  renderInDocument(mainContent(user))
  renderInDocument(userSettingsModal())
  renderInDocument(userProfile())
  userSettings(user)
  manageMessage()
  handleMessage(user)

  viewMassage()

})
