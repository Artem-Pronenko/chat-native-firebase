export const renderInDocument = (node, inSelector) => {
  document.querySelector(inSelector ? inSelector : '#app').insertAdjacentHTML('beforeend', node)
}

export const removeNode = (selector) => {
  document.querySelector(selector).remove()
}
