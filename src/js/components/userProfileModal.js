export const userProfileModal = () => {
  const $el = document.createElement('div')

  $el.innerHTML = `
    <div class="modal user-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Профиль <span class="user-modal-name"></span></h5>
            <button type="button" class="close close-user-profile" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <div class="d-flex justify-content-center mb-4">
            <img class="user-modal-img" src="" alt="">
          </div>
            <h5>О пользователе</h5>
            <span class="user-modal-bio"></span>
          </div>
        </div>
      </div>
    </div>
  `
  return {
    node: $el
  }
}
