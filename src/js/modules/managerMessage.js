import {getUserInfo} from './userSettings'
import {updateMessage} from './updateMessage'

export const managerMessage = () => {
  const userModal = document.querySelector('.user-modal')
  const userName = userModal.querySelector('.user-modal-name')
  const userImg = userModal.querySelector('.user-modal-img')
  const userModalBio = userModal.querySelector('.user-modal-bio')
  const closeModal = userModal.querySelector('.close-user-profile')


  const openUserProfile = async ({target}) => {
    const userButton = target.closest('[data-user]')
    const editButton = target.closest('.icon-edit')

    if (userButton) {
      const uid = userButton.dataset.user
      const {username, userBio, userPhoto} = await getUserInfo({uid})
      userName.textContent = username
      userImg.src = userPhoto
      userModalBio.textContent = userBio
      userModal.classList.add('show')
    } else if (editButton) {
      const messageWrap = target.closest('[data-key]')
      const id = messageWrap.dataset.key
      const message = messageWrap.querySelector('.message__text')
      message.contentEditable = true
      message.focus()

      const blurMessageHandler = () => {
        updateMessage({
          message: message.textContent
        }, id)
        message.removeEventListener('blur', blurMessageHandler)
      }

      message.addEventListener('blur', blurMessageHandler)

    }
  }

  closeModal.addEventListener('click', () => {
    userModal.classList.remove('show')
  })

  document.querySelector('.messages').addEventListener('click', openUserProfile)
}
