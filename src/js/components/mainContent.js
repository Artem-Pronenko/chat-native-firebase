export const mainContent = () => {

  return `
  <div>
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand" href="#">Chat</a>
      <button class="btn">Выйти / Сменить аккаунт</button>
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
}
