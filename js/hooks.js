const loadingText = document.getElementsByClassName('assetsLoading')[0].getElementsByTagName('span')[1]
const saginText = document.getElementsByClassName('assetsLoading')[0].getElementsByTagName('span')[0]

const playerWindow = document.getElementsByClassName('playerWindow')[0]
const oobeWindow = document.getElementsByClassName('oobe')[0]
const oobeContent = document.getElementsByClassName('oobeContent')[0]

let oobeStep = 0
let dataFilled = true

let cursorInterval
let cursorOn = true