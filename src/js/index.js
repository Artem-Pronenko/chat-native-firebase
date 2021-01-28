import firebase from 'firebase/app'
import './modules/firebase'
import 'firebase/auth'
import {getUrlHash, renderInDocument, setLocation} from './modules/utils'
import {mainContent} from './components/mainContent'
import {handleMessage} from './modules/addedNewMessage'
import {vueMessage} from './modules/vueMessage'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/style.sass'
import {userSettingsModal} from './components/userSettingsModal'
import {getUserInfo, userSettings} from './modules/userSettings'

firebase.auth().onAuthStateChanged(async user => {
  if (!user) {
    const {auth} = await import('./modules/auth')
    setLocation(getUrlHash() || '#register')
    auth()
    return
  }
  renderInDocument(mainContent(user))
  handleMessage(user)
  vueMessage()
  document.querySelector('.profile-button')
    .addEventListener('click', async () => {
      const updateUser = await getUserInfo(user)
      renderInDocument(userSettingsModal(updateUser))
      setTimeout(() => userSettings(user), 30)
    })

})
