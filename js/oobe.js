const fakeCursor = () => {
    if(oobeStep !== 3) return

    document.getElementsByClassName('popupCenter')[0].setAttribute('src', `./img/windows/${cursorOn ? '2-1' : '2'}.png`)
    cursorOn = !cursorOn
}

const changeOOBESize = (sizes) => {
    if(sizes.w !== 0) {
        oobeWindow.style.width = sizes.w+'%'
    } else {
        oobeWindow.style.width = ''
    }

    if(sizes.h !== 0) {
        oobeWindow.style.height = sizes.h+'%'
    } else {
        oobeWindow.style.height = ''
    }
}

const replaceOOBEContent = (content, playerRunning, openPopup) => {
    if(playerRunning) {
        oobeContent.innerHTML = content

        setTimeout(() => {
            if(openPopup) {
                popupFade(true)
            }

            if(oobeStep === 3) {
                cursorInterval = setInterval(fakeCursor, 500)
            } else {
                clearInterval(cursorInterval)
            }

            if(oobeStep === 8 || oobeStep === 17) {
                document.getElementsByClassName('map')[0].addEventListener('click', () => {
                    popupFade(false)
                    document.getElementsByClassName('map')[0].style.display = 'none'

                    setTimeout(() => {
                        oobeStep++
                        replaceOOBEContent(oobeContentTab[oobeStep], true)
                    }, 300)
                })
            } else if(oobeStep === 18) {
                document.getElementsByClassName('oobeContent')[0].style.transition = '0.2s'
                changeOOBESize(oobeContentSize[oobeStep])

                document.getElementsByClassName('map')[0].addEventListener('click', () => {
                    document.getElementsByClassName('oobeContent')[0].style.opacity = 0.0
                    changeOOBESize(oobeContentSize[oobeStep+1])

                    setTimeout(() => {
                        oobeStep++
                        replaceOOBEContent(oobeContentTab[oobeStep], true)

                        document.getElementsByClassName('oobeContent')[0].style.opacity = 1.0
                    }, 500)
                    
                })
            } else if(oobeStep === 9 || oobeStep === 2 || oobeStep === 15) {
                document.getElementsByClassName('map')[0].addEventListener('click', () => {
                    oobeStep++
                    replaceOOBEContent(oobeContentTab[oobeStep], true, true)
                })
            } else if(oobeStep === 16) {
                document.getElementsByClassName('map')[0].addEventListener('click', () => {
                    popupFade(false)
                    document.getElementsByClassName('map')[0].style.display = 'none'

                    setTimeout(() => {
                        oobeStep++
                        replaceOOBEContent(oobeContentTab[oobeStep], true)
                    }, 300)
                })

                document.getElementsByClassName('map')[1].addEventListener('click', () => {
                    popupFade(false)
                    document.getElementsByClassName('map')[1].style.display = 'none'

                    setTimeout(() => {
                        oobeStep++
                        replaceOOBEContent(oobeContentTab[oobeStep], true)
                    }, 300)
                })
            } else if((oobeStep === 4 || oobeStep > 5) && document.getElementsByClassName('map').length > 0) {
                document.getElementsByClassName('map')[0].addEventListener('click', () => {
                    oobeStep++
                    replaceOOBEContent(oobeContentTab[oobeStep], true)
                })
            }
            
            if(oobeStep === 3 || oobeStep === 5 || oobeStep == 10 || oobeStep === 19) {
                dataFilled = false
            }

            if(document.getElementsByClassName('map').length > 0) {
                document.getElementsByClassName('map')[0].style.display = 'block'
            }
        }, 10)
        return
    }

    oobeContent.style.marginTop = '-1000px'
    oobeContent.style.opacity = 0.0

    setTimeout(() => {
        oobeContent.innerHTML = content
        oobeContent.style.marginTop = ''
        oobeContent.style.opacity = 1.0

        if(oobeStep === 2) {
            document.getElementsByClassName('map')[0].addEventListener('click', () => {
                oobeStep++
                replaceOOBEContent(oobeContentTab[oobeStep], true, true)
            })
        }
    }, 300)
}