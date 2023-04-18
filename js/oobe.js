const fakeCursor = () => {
    let img
    if(oobeStep === 3) {
        img = "2"
    } else if(oobeStep === 25) {
        img = "23"
    } else {
        return
    }

    if(oobeStep === 3) {
        document.getElementsByClassName('popupCenter')[0].setAttribute('src', `./img/windows/${cursorOn ? img+'-1' : img}.png`)
    } else if(oobeStep === 25) {
        document.getElementsByClassName('windowSS')[0].setAttribute('src', `./img/windows/${cursorOn ? img+'-1' : img}.png`)
    }

    cursorOn = !cursorOn
}

let installationInterval, installationIndex = 1
const installationLoop = () => {
    document.getElementsByClassName('windowSS')[0].setAttribute('src', `./img/windows/25-${installationIndex}.png`)

    installationIndex++
}

const showUnsupported = (show) => {
    if(show) {
        document.getElementsByClassName('notSupported')[0].style.display = 'block'
    } else {
        document.getElementsByClassName('notSupported')[0].style.display = 'none'
    }
}

const changeOOBESize = (sizes) => {
    if(window.innerHeight < 450) {
        showUnsupported(true)
        return
    }

    if(window.innerWidth < window.innerHeight / 2) {
        showUnsupported(true)
        return
    }

    showUnsupported(false)

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
    if(oobeStep >= 32) {
        replaceOOBEContent(oobeContentTab[oobeStep])
        changeOOBESize(oobeContentSize[oobeStep])
    }

    if(playerRunning) {
        const playerHint = document.getElementsByClassName('hint')[0]
        
        if(playerHint) {
            playerHint.style.bottom = '-30px'
            playerHint.style.opacity = 0.0
    
            setTimeout(() => {
                document.getElementsByClassName('hint')[0].style.bottom = '30px'
                document.getElementsByClassName('hint')[0].style.opacity = 1.0
            }, 300)
        }


        oobeContent.innerHTML = content

        setTimeout(() => {
            if(openPopup) {
                popupFade(true)
            }

            if(oobeStep === 3 || oobeStep === 25) {
                cursorInterval = setInterval(fakeCursor, 500)
            } else {
                clearInterval(cursorInterval)
                clearInterval(installationInterval)
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
            } else if(oobeStep === 5 || oobeStep === 11) {
                document.getElementsByClassName('popupCenter')[0].addEventListener('click', () => {
                    oobeStep++
                    replaceOOBEContent(oobeContentTab[oobeStep], true, false)
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
                    changeOOBESize(oobeContentSize[oobeStep])
                    replaceOOBEContent(oobeContentTab[oobeStep], true)
                })
            } else if(oobeStep === 27) {
                installationIndex = 1
                installationInterval = setInterval(installationLoop, 500)

                setTimeout(() => {
                    clearInterval(installationInterval)
                    if(oobeStep !== 27) {
                        return
                    }

                    oobeStep++
                    changeOOBESize(oobeContentSize[oobeStep])
                    replaceOOBEContent(oobeContentTab[oobeStep], true)
                }, 8500)
            }
            
            if(oobeStep === 3 || oobeStep === 19 || oobeStep === 25 || oobeStep === 29 || oobeStep === 31) {
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