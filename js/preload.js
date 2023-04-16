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
    './img/windows/17.png',
    './img/windows/18.png',
    './img/windows/19.png',
    './img/windows/20.png',
    './img/windows/21.png',
    './img/windows/22.png',
    './img/windows/23.png',
    './img/windows/23-1.png',
    './img/windows/24.png',
    './img/windows/25-1.png',
    './img/windows/25-2.png',
    './img/windows/25-3.png',
    './img/windows/25-4.png',
    './img/windows/25-5.png',
    './img/windows/25-6.png',
    './img/windows/25-7.png',
    './img/windows/25-8.png',
    './img/windows/25-9.png',
    './img/windows/25-10.png',
    './img/windows/25-11.png',
    './img/windows/25-12.png',
    './img/windows/25-13.png',
    './img/windows/25-14.png',
    './img/windows/25-15.png',
    './img/windows/25-16.png',
    './img/windows/25-17.png',
    './img/windows/26.png',
    './img/windows/27.png',
    './img/windows/28.png',
    './img/windows/29.png'
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