let oobeContentTab = [
    `<h1>Interaktywny poradnik instalacji Linuxa</h1>
    <h4>przy użyciu wirtualnej maszyny Virtual Box</h4>`,

    `<h1>Wymagania przed instalacją</h1>
    <p>
        <ul>
            <li>Przynajmniej <strong>2 rdzenie CPU</strong></li>
            <li>Minimum <strong>2GB RAM</strong></li>
            <li>Włączona <strong>Wirtualizacja CPU</strong> lub <strong>Hyper-V</strong></li>
            <li>Zainstalowany <a href="https://www.virtualbox.org/wiki/Downloads" target="_blank">Virtual Box</a></li>
            <li>Pobrany wcześniej obraz systemu <a href="https://ubuntu.com/download/desktop" target="_blank">Ubuntu</a></li>
        </ul>
    </p>`,

    `<div class="map" style="height: 11.5%; width: 4.2%; top: 7.25%; left: 57.25%"></div>
    <img src="./img/windows/1.png" class="windowSS">`,

    `<img src="./img/windows/1.png" class="windowSS">
    <img src="./img/windows/2.png" class="windowSS popupCenter">`,

    `<div class="map imBlue" style="height: 3.25%; width: 6.1%; top: 74.3%; left: 66.25%"></div>
    <img src="./img/windows/1.png" class="windowSS">
    <img src="./img/windows/3.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">`,

    `<img src="./img/windows/1.png" class="windowSS">
    <img src="./img/windows/4.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">`,

    `<div class="map imBlue" style="height: 3.25%; width: 6.1%; top: 74.3%; left: 66.25%"></div>
    <img src="./img/windows/1.png" class="windowSS">
    <img src="./img/windows/5.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">`,

    `<div class="map imBlue" style="height: 3.25%; width: 6.1%; top: 74.3%; left: 66.25%"></div>
    <img src="./img/windows/1.png" class="windowSS">
    <img src="./img/windows/6.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">`,

    `<div class="map imBlue" style="height: 3.25%; width: 6.1%; top: 74.3%; left: 66.25%"></div>
    <img src="./img/windows/1.png" class="windowSS">
    <img src="./img/windows/7.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">`,

    `<div class="map" style="height: 11.5%; width: 7.2%; top: 7.25%; left: 41.9%;"></div>
    <img src="./img/windows/8.png" class="windowSS">`,

    `<div class="map" style="height: 5%; width: 11.5%; top: 32.25%; left: 20.75%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/9.png" class="windowSS popupCenter">`,

    `<img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/10.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">`,

    `<div class="map" style="height: 5%; width: 11.5%; top: 34.25%; left: 20.75%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/11.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">`,

    `<div class="map imBlue" style="height: 3.5%; width: 16%; top: 32.5%; left: 34.25%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/12.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">`,

    `<div class="map" style="height: 3.5%; width: 1.75%; top: 28.75%; left: 77.5%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/13.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">`,

    `<div class="map" style="height: 3.5%; width: 21%; top: 34.75%; left: 58.2%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/14.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">`,

    `<div class="map imBlue" style="height: 2.5%; width: 38%; top: 38.4%; left: 31.2%;"></div>
    <div class="map imBlue" style="height: 3%; width: 5.5%; top: 77.25%; left: 67.2%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/13.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">
    <img src="./img/windows/15.png" class="windowSS popupCenter">`,

    `<div class="map imBlue" style="height: 3.5%; width: 5.75%; top: 80.5%; left: 61%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/16.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">`,

    `<div class="map" style="height: 11.5%; width: 5.5%; top: 7.25%; left: 54%;"></div>
    <img src="./img/windows/8.png" class="windowSS">`,

    `<img src="./img/windows/17.png" class="windowSS">`
]

let oobeContentSize = [
    {w: 0, h: 0},
    {w: 0, h: 0},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 72, h: 80},
    {w: 37.75, h: 55}
]