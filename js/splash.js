const endLoading = () => {
    loadingText.style.fontSize = '0.4vw'
    loadingText.style.opacity = 0.0

    setTimeout(() => {
        saginText.style.fontSize = '4vw'
        saginText.style.opacity = 0.0
    }, 1800)

    setTimeout(() => {
        playerWindow.style.display = 'block'
        saginText.style.display = 'none'
    }, 2200)

    setTimeout(() => {
        playerWindow.style.height = '100vh'
        playerWindow.style.width = '100vw'

        playerWindow.style.opacity = 1.0
    }, 2600)
}

const startLoading = () => {
    setTimeout(() => {
        loadingText.style.opacity = 1.0
        loadingText.style.fontSize = '0.9vw'

        saginText.style.opacity = 1.0
        saginText.style.fontSize = '5vw'
    }, 200)
}