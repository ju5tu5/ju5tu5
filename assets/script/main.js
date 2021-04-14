'use strict'

const customStyleElement = document.head.appendChild(Object.assign(document.createElement('style'), { textContent: getItem('personalStyle') }))
const editor = document.querySelector('section.console textarea')

if (editor !== null) {
  editor.value = getItem('personalStyle')
  editor.addEventListener('input', () => {
    window.localStorage.setItem('personalStyle', editor.value)
    customStyleElement.textContent = editor.value
  })
}

function getItem (item) {
  if (window.localStorage.getItem(item) === null) {
    window.localStorage.setItem(item, '')
  }
  return window.localStorage.getItem(item)
}

function customStyleSwitch () {
  window.localStorage.setItem('usePersonalStyle', !(getItem('usePersonalStyle') === 'true'))
}
