import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const db = firebase.firestore()

export const updateMessage = async (updateData, id) => {
  try {
    const where = {
      fieldPath: id ? 'id' : 'uid',
      opSrt: '==',
      value: id || firebase.auth().currentUser.uid
    }

    const messageQuery = await db
      .collection('message')
      .where(where.fieldPath, where.opSrt, where.value)
      .get()

    messageQuery.forEach(doc => {
      doc.ref.update(updateData)
    })

  } catch (e) {
    console.error(e)
  }

}