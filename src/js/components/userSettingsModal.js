export const userSettingsModal = ({displayName, photoURL, userBio}) => {
  const $el = document.createElement('div')
  $el.innerHTML = `
    <div class="modal user-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Настройки профиля</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="settings-form">
              <fieldset>
                <fieldset class="form-group">
                  <input
                      type="text"
                      class="form-control form-control-lg input-user-name"
                      placeholder="Имя"
                      aria-label="Username input"
                      value="${displayName}"
                  >
                </fieldset>
                <fieldset class="form-group">
                  <input
                      type="text"
                      class="form-control form-control-lg input-user-photo"
                      placeholder="Фотография"
                      aria-label="Photo input"
                      value="${photoURL}"
                  >
                </fieldset>
                <fieldset class="form-group">
                  <input
                      type="text"
                      class="form-control form-control-lg input-user-bio"
                      placeholder="Кратко о себе"
                      aria-label="Bio input"
                      value="${userBio || ''}"
                  >
                </fieldset>
              </fieldset>
              <button type="submit" class="btn btn-primary float-right">Save changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
  return {
    node: $el
  }
}
