export const message = ({displayName, message, createAt, photoURL}, key) => {


  return `
    <div class="message d-flex justify-content-between align-items-center" data-key="${key}">
      <div class="message-of d-flex">
        <div class="message-user_img">
          <img src="${photoURL}" alt="user img">
        </div>
        <div class="message__info d-flex flex-column ml-2">
          <strong class="message__username">${displayName}</strong>
          <p class="message__text mr-2">${message}</p>
        </div>
      </div>
      <span class="date small">${createAt}</span>
    </div>
  `
}
