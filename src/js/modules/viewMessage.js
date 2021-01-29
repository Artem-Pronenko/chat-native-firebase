import firebase from 'firebase/app'
import 'firebase/firestore'
import {message} from '../components/message'
import {renderInDocument} from './utils'

const db = firebase.firestore()

export const viewMessage = async () => {
  const messageRef = db.collection('message')
  const query = messageRef.orderBy('createAt')
  return new Promise(resolve => {
    query.onSnapshot(docs => {
      docs.docs.forEach((doc, i) => {
        const data = doc.data()
        renderInDocument(message(data, data.id), '.messages')
        if (docs.docs.length === i + 1) {
          resolve(document.querySelectorAll('.user-button'))
        }
      })
    })
  })

}
