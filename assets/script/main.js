const localStorageItemName = 'personalStyle'
const personalStyle = getOrCreateLocalStorageItem(localStorageItemName) || ''
const personalStyleElement = createAndReturnStyleElement(personalStyle)
const editor = document.querySelector('section.console textarea')

editor.value = personalStyle
editor.addEventListener('input', () => {
  localStorage.setItem(localStorageItemName, editor.value)
  personalStyleElement.textContent = editor.value
})

function getOrCreateLocalStorageItem(itemName) {
  return localStorage.getItem(itemName) || localStorage.setItem(itemName, '')
}

function createAndReturnStyleElement(stylesheet) {
  return document.head.appendChild(
    Object.assign(document.createElement('style'), {
      textContent: stylesheet,
    })
  )
}

// extend all items in main with the inViewport() function
Array.from(document.querySelectorAll('main > *')).map((element) => {
  element.inViewport = (partial = false) => {
    const { top, left, bottom, right } = element.getBoundingClientRect()
    const { innerHeight, innerWidth } = window
    return partial
      ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
  }
})

// let becoming eclipse being
document.querySelector('#transition button').addEventListener('click', (event) => {
  document.startViewTransition ? document.startViewTransition(transition) : transition()
})
function transition() {
  document.querySelector('#transition').classList.toggle('visual')
}
