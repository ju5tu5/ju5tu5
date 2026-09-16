// Main menu button
document.querySelector('nav ul button').addEventListener('click', ()=>{
  document.querySelector('nav').classList.toggle('open')
  document.querySelector('body').classList.toggle('noscroll')
})

// Diwhy
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
    Object.assign(document.createElement('style'), { textContent: stylesheet })
  )
}