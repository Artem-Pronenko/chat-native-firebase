export const renderInDocument = node => {
  document.getElementById('app').insertAdjacentHTML('beforeend', node)
}
