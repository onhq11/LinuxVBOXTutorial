const s_img_windows = [
    './img/windows/1.png',
    './img/windows/2.png',
    './img/windows/2-1.png',
    './img/windows/3.png',
    './img/windows/4.png',
    './img/windows/5.png',
    './img/windows/6.png',
    './img/windows/7.png',
    './img/windows/8.png',
    './img/windows/9.png',
    './img/windows/10.png',
    './img/windows/11.png',
    './img/windows/12.png',
    './img/windows/13.png',
    './img/windows/14.png',
    './img/windows/15.png',
    './img/windows/16.png',
    './img/windows/17.png'
]


const s_additional = [
    './img/bg.png'
]

const s_main_dataimages = s_img_windows.concat(s_additional)

function loadImages(images) {
    const promises = images.map((imagePath) => {
        return new Promise((resolve, reject) => {
            const image = new Image()
            image.onload = () => resolve()
            image.onerror = (err) => reject(err)
            image.src = imagePath
        });
    });

    return Promise.all(promises).then(() => {
        endLoading()
    });
}


loadImages(s_main_dataimages)