import firebase from 'firebase/app'
import './modules/firebase'
import 'firebase/auth'
import {getUrlHash, renderInDocument, setLocation} from './modules/utils'
import {mainContent} from './components/mainContent'
import {handleMessage} from './modules/addedNewMessage'
import {viewMessage} from './modules/viewMessage'
import {userSettingsModal} from './components/userSettingsModal'
import {userSettings} from './modules/userSettings'
import {managerMessage} from './modules/managerMessage'
import {userProfileModal} from './components/userProfileModal'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/style.sass'

firebase.auth().onAuthStateChanged(async user => {
  if (!user) {
    const {auth} = await import('./modules/auth')
    setLocation(getUrlHash() || '#register')
    auth()
    return
  }
  setLocation('/')
  renderInDocument(mainContent(user))
  renderInDocument(userSettingsModal())
  renderInDocument(userProfileModal())

  handleMessage(user)
  viewMessage().then(() => {
    managerMessage()
    const scroll = document.querySelector('.messages')
    scroll.scrollTop = scroll.scrollHeight
  })
  userSettings(user)

})
