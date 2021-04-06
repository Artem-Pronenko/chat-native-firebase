export const renderInDocument = ({node, oldMessage}, inSelector = '#app') => {
  if (oldMessage) {
    oldMessage.insertAdjacentElement('afterend', node)
    oldMessage.remove()
    return
  }

  return document.querySelector(inSelector).insertAdjacentElement('beforeend', node)

}

export const removeNode = selector => {
  document.querySelector(selector).remove()
}

export const setLocation = url => {
  try {
     history.pushState(null, null, url)
    return
  } catch(e) {}
  location.hash = url
}

export const getUrlHash = () => window.location.hash
