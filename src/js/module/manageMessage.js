//
import {getUserInfo} from './userSettings'
import {updateMessage} from './updateMessage';

export const manageMessage = () => {

  const userModal = document.querySelector('.user-modal')
  const userModalName = document.querySelector('.user-modal-name')
  const closeUserProfile = document.querySelector('.close-user-profile')
  const userModalImg = document.querySelector('.user-modal-img')
  const userModalBio = document.querySelector('.user-modal-bio')

  const openUserProfile = async ({target}) => {
    const userButton = target.closest('[data-user]')
    const editButton = target.closest('.icon-edit')

    if (userButton) {
      const uid = userButton.dataset.user
      const {username, userBio, userPhoto} = await getUserInfo({uid})
      userModalName.textContent = username
      userModalImg.src = userPhoto
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


  closeUserProfile.addEventListener('click', () => userModal.classList.remove('show'))
  document.querySelector('.messages').addEventListener('click', openUserProfile)
}
