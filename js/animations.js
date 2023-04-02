const togglePrev = (hide) => {
    if(hide) {
        document.getElementsByClassName('oobePrev')[0].style.opacity = 0.0
        setTimeout(() => {
            document.getElementsByClassName('oobePrev')[0].style.display = 'none'
        }, 200)
    } else {
        document.getElementsByClassName('oobePrev')[0].style.display = 'block'
        setTimeout(() => {
            document.getElementsByClassName('oobePrev')[0].style.opacity = 1.0
        }, 200)
    }
}

const toggleNext = (hide) => {
    if(hide) {
        document.getElementsByClassName('oobeNext')[0].style.opacity = 0.0
        setTimeout(() => {
            document.getElementsByClassName('oobeNext')[0].style.display = 'none'
        }, 200)
    } else {
        document.getElementsByClassName('oobeNext')[0].style.display = 'block'
        setTimeout(() => {
            document.getElementsByClassName('oobeNext')[0].style.opacity = 1.0
        }, 200)
    }
}

const popupFade = (fadeIn) => {
    let popup = document.getElementsByClassName('popupCenter')[0]
    if(oobeStep === 16) {
        popup = document.getElementsByClassName('popupCenter')[1]
    }

    if(fadeIn) {
        popup.style.opacity = 1.0
        popup.style.width = '60%'
    } else {
        popup.style.opacity = ''
        popup.style.width = ''
    }
}