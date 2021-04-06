export const mainContent = ({displayName, photoURL}) => {
  const $el = document.createElement('div')


  $el.innerHTML = `
    <div>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <div class="container">
          <a class="navbar-brand" href="/">Chat</a>
          <button class="btn profile profile-button">
            <img class="user-img" src="${photoURL}" alt="user img">
            <span class="user-name">${displayName}</span>
          </button>
        </div>
      </nav>
    </div>
      
    <div class="container">
      <div class="chat-wrapper">
        <div class="row">
        
          <div class="messages col-12"></div>
        
          <form class="m-auto d-flex message-form">
            <input
                class="form-control input-message"
                type="text"
                placeholder="Сообщение..."
                aria-label="Message input"
            >
            <button class="btn btn-primary btn-send-message">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  `

  return {
    node: $el
  }
}
