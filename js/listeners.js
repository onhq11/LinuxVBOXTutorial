addEventListener('click', () => {
    endLoading()
})

window.addEventListener('load', () => {
    startLoading()

    changeOOBESize(oobeContentSize[oobeStep])
})

window.addEventListener('resize', () => {
    changeOOBESize(oobeContentSize[oobeStep])
})

document.getElementsByClassName('oobeNext')[0].addEventListener('click', () => {
    oobeStep++
    if(oobeStep > 0) {
        togglePrev(false)
    }

    if(oobeStep > 1) {
        toggleNext(true)
    }

    replaceOOBEContent(oobeContentTab[oobeStep])
    changeOOBESize(oobeContentSize[oobeStep])
})

document.getElementsByClassName('oobePrev')[0].addEventListener('click', () => {
    if(oobeStep <= 1) {
        oobeStep = 0

        togglePrev(true)
    } else {
        oobeStep--
    }

    if(oobeStep === 3 || oobeStep === 10) {
        replaceOOBEContent(oobeContentTab[oobeStep], true)

        document.getElementsByClassName('popupCenter')[0].style.opacity = 1.0
        document.getElementsByClassName('popupCenter')[0].style.width = '60%'
    } else if(oobeStep < 2) {
        toggleNext(false)

        replaceOOBEContent(oobeContentTab[oobeStep])
    } else if(oobeStep > 1) {
        replaceOOBEContent(oobeContentTab[oobeStep], true)
    }

    changeOOBESize(oobeContentSize[oobeStep])
})

addEventListener('keypress', (event) => {
    if(event.code === 'Space') {
        const map = document.getElementsByClassName('map')[0]
        
        if(map) {
            map.click()
        } else if(!dataFilled) {
            dataFilled = true
    
            oobeStep++
            replaceOOBEContent(oobeContentTab[oobeStep], true, false)
        } else if(oobeStep === 5 || oobeStep === 11) {
            document.getElementsByClassName('popupCenter')[0].click()
        } else {
            document.getElementsByClassName('oobeNext')[0].click()
        }

        return
    }

    if(dataFilled) return
    if(oobeStep === 19 && event.key !== 'Enter') return
    dataFilled = true
    
    oobeStep++
    replaceOOBEContent(oobeContentTab[oobeStep], true, false)
})