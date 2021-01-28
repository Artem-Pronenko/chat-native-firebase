import firebase from 'firebase/app';
import 'firebase/auth'

export const message = ({displayName, message, createAt, photoURL, uid}, key) => {
  const $el = document.createElement('div')
  const oldMessage = [...document.querySelectorAll('.message')].find((e) => {
    return e.dataset.key === key
  })

  const className = uid === firebase.auth().currentUser.uid ? 'my-message' : ''

  $el.innerHTML = `
    <div class="message d-flex justify-content-between align-items-center" data-key="${key}">
      <div class="message-of d-flex">
        <div class="message-user_img">
          <img src="${photoURL}" alt="user img">
        </div>
        <div class="message__info d-flex flex-column ml-2">
          <strong class="message__username ${className}">${displayName}</strong>
          <p class="message__text mr-2">${message}</p>
        </div>
      </div>
      <span class="date small">${new Date().toLocaleTimeString(createAt)}</span>
    </div>
  `
  return {
    node: $el,
    oldMessage,
  }
}
