import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const db = firebase.firestore()

export const updateMessage = async (updateData, id) => {
  try {

    const where = {
      filedPath: id ? 'id' : 'uid',
      opStr: '==',
      value: id || firebase.auth().currentUser.uid
    }

     const messageData = await db
       .collection('message')
       .where(where.filedPath, where.opStr, where.value)
       .get()

   messageData.forEach(doc => {
     doc.ref.update(updateData)
   })

  } catch(e) {
    console.error(e)
  }


}
