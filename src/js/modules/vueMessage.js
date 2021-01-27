import firebase from 'firebase/app'
import 'firebase/firestore'
import {message} from '../components/message'
import {renderInDocument} from './utils'

const db = firebase.firestore()

export const vueMessage = async () => {
  const messageRef = db.collection('message')
  const query = messageRef.orderBy('createAt')
  query.onSnapshot(docs => {
    docs.docs.forEach(doc => {
      const data = doc.data()
      renderInDocument(message(data, data.id), '.messages')
    })
  })

}
