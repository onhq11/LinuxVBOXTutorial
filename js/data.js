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
    <img src="./img/windows/1.png" class="windowSS">
    <div class="hint">
        <div></div>
        <h1>Krok 1</h1>
        <h2>Utwórz nową maszynę, klikając na górze przycisk "Nowa"</h2>
    </div>`,

    `<img src="./img/windows/1.png" class="windowSS">
    <img src="./img/windows/2.png" class="windowSS popupCenter">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 2</h1>
        <h2>Uzupełnij pole "Nazwa" i wybierz na dole typ systemu (*Kliknij dowolny przycisk*)</h2>
    </div>`,

    `<div class="map imBlue" style="height: 3.25%; width: 6.1%; top: 74.3%; left: 66.25%"></div>
    <img src="./img/windows/1.png" class="windowSS">
    <img src="./img/windows/3.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 3</h1>
        <h2>Kliknij przycisk "Next"</h2>
    </div>`,

    `<img src="./img/windows/1.png" class="windowSS">
    <img src="./img/windows/4.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 4</h1>
        <h2>Ustaw pamięć RAM i ilość rdzeni tak, aby spełniały minimalne wymagania systemu</h2>
    </div>`,

    `<div class="map imBlue" style="height: 3.25%; width: 6.1%; top: 74.3%; left: 66.25%"></div>
    <img src="./img/windows/1.png" class="windowSS">
    <img src="./img/windows/5.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 5</h1>
        <h2>Kliknij przycisk "Next"</h2>
    </div>`,

    `<div class="map imBlue" style="height: 3.25%; width: 6.1%; top: 74.3%; left: 66.25%"></div>
    <img src="./img/windows/1.png" class="windowSS">
    <img src="./img/windows/6.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 6</h1>
        <h2>Tutaj można ustawić rozmiar dysku, jeżeli potrzeba. (zostawiamy domyślnie)</h2>
    </div>`,

    `<div class="map imBlue" style="height: 3.25%; width: 6.1%; top: 74.3%; left: 66.25%"></div>
    <img src="./img/windows/1.png" class="windowSS">    
    <img src="./img/windows/7.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 7</h1>
        <h2>Wyświetla się nam podsumowanie, jeżeli wszystko się zgadza klikamy przycisk "Zakończ"</h2>
    </div>`,

    `<div class="map" style="height: 11.5%; width: 7.2%; top: 7.25%; left: 41.9%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 8</h1>
        <h2>Teraz edytujemy ustawienia maszyny, aby dodać plik ISO systemu. Klikamy w zębatkę na górze na pasku.</h2>
    </div>`,

    `<div class="map" style="height: 5%; width: 11.5%; top: 32.25%; left: 20.75%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/9.png" class="windowSS popupCenter">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 9</h1>
        <h2>Kliknij w zakładkę "Ekran"</h2>
    </div>`,

    `<img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/10.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 10</h1>
        <h2>Ustaw tutaj suwak na 128MB</h2>
    </div>`,

    `<div class="map" style="height: 5%; width: 11.5%; top: 34.25%; left: 20.75%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/11.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 11</h1>
        <h2>Przejdź do zakładki "Pamięć"</h2>
    </div>`,

    `<div class="map imBlue" style="height: 3.5%; width: 16%; top: 32.5%; left: 34.25%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/12.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 12</h1>
        <h2>Klikamy na płytę po prawej stronie w liście</h2>
    </div>`,

    `<div class="map" style="height: 3.5%; width: 1.75%; top: 28.75%; left: 77.5%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/13.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 13</h1>
        <h2>Następnie klikamy po prawej stronie w ikonę płyty</h2>
    </div>`,

    `<div class="map" style="height: 3.5%; width: 21%; top: 34.75%; left: 58.2%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/14.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 14</h1>
        <h2>Klikamy na pole "Wybierz plik dysku"</h2>
    </div>`,

    `<div class="map imBlue" style="height: 2.5%; width: 38%; top: 38.4%; left: 31.2%;"></div>
    <div class="map imBlue" style="height: 3%; width: 5.5%; top: 77.25%; left: 67.2%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/13.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">
    <img src="./img/windows/15.png" class="windowSS popupCenter">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 15</h1>
        <h2>Wybieramy pobrany plik ISO systemu</h2>
    </div>`,

    `<div class="map imBlue" style="height: 3.5%; width: 5.75%; top: 80.5%; left: 61%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <img src="./img/windows/16.png" class="windowSS popupCenter" style="opacity: 1; width: 60%;">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 16</h1>
        <h2>Zatwierdzamy klikając OK</h2>
    </div>`,

    `<div class="map" style="height: 11.5%; width: 5.5%; top: 7.25%; left: 54%;"></div>
    <img src="./img/windows/8.png" class="windowSS">
    <div class="hint" style="opacity: 0.0; bottom: -30px">
        <div></div>
        <h1>Krok 17</h1>
        <h2>Uruchamiamy maszynę na górze przyciskiem "Uruchom"</h2>
    </div>`,

    `<img src="./img/windows/17.png" class="windowSS">
    <div class="hint" style="opacity: 0.0; bottom: -30px; padding: 2.5%">
        <div></div>
        <h1>Krok 18</h1>
        <h2>Wybierz opcję "Try or Install Ubuntu" przyciskiem Enter</h2>
    </div>`,

    `<div class="map" style="height: 5%; width: 21%; top: 60.25%; left: 66.3%;"></div>
    <img src="./img/windows/18.png" class="windowSS">
    <div class="hint" style="opacity: 0.0; bottom: -30px; padding: 2.5%">
        <div></div>
        <h1>Krok 19</h1>
        <h2>Kliknij przycisk "Install Ubuntu"</h2>
    </div>`,

    `<div class="map" style="height: 4.5%; width: 13%; top: 78%; left: 84.5%;"></div>
    <img src="./img/windows/19.png" class="windowSS">
    <div class="hint" style="opacity: 0.0; bottom: -30px; padding: 2.5%">
        <div></div>
        <h1>Krok 20</h1>
        <h2>Teraz wybieramy język klawiatury, kliknij przycisk "Continue"</h2>
    </div>`,

    `<div class="map" style="height: 4.5%; width: 13%; top: 78%; left: 84.5%;"></div>
    <img src="./img/windows/20.png" class="windowSS">
    <div class="hint" style="opacity: 0.0; bottom: -30px; padding: 2.5%">
        <div></div>
        <h1>Krok 21</h1>
        <h2>Tutaj możemy ustawić typ instalacji, zostawiamy domyślnie i klikamy przycisk "Continue"</h2>
    </div>`,
    
    `<div class="map" style="height: 4.5%; width: 13.5%; top: 78%; left: 83.75%;"></div>
    <img src="./img/windows/21.png" class="windowSS">
    <div class="hint" style="opacity: 0.0; bottom: -30px; padding: 2.5%">
        <div></div>
        <h1>Krok 22</h1>
        <h2>Tutaj mamy ustawienia partycji, zostawiamy domyślnie i klikamy "Install now"</h2>
    </div>`,
    
    `<div class="map" style="height: 5%; width: 14%; top: 78.2%; left: 83.5%;"></div>
    <img src="./img/windows/22.png" class="windowSS">
    <div class="hint" style="opacity: 0.0; bottom: -30px; padding: 2.5%">
        <div></div>
        <h1>Krok 23</h1>
        <h2>Wybieramy strefę czasową i klikamy przycisk "Continue"</h2>
    </div>`,
    
    `<img src="./img/windows/23.png" class="windowSS">
    <div class="hint" style="opacity: 0.0; bottom: -30px; padding: 2.5%">
        <div></div>
        <h1>Krok 24</h1>
        <h2>Tutaj uzupełniamy dane (*Kliknij dowolny przycisk*)</h2>
    </div>`,
    
    `<div class="map" style="height: 4.5%; width: 14%; top: 78.2%; left: 83.5%;"></div>
    <img src="./img/windows/24.png" class="windowSS">
    <div class="hint" style="opacity: 0.0; bottom: -30px; padding: 2.5%">
        <div></div>
        <h1>Krok 25</h1>
        <h2>Klikamy przycisk "Continue"</h2>
    </div>`,

    `<img src="./img/windows/25-1.png" class="windowSS">`,

    `<div class="map" style="height: 3.5%; width: 7.75%; top: 52.5%; left: 54.2%;"></div>
    <img src="./img/windows/26.png" class="windowSS">
    <div class="hint" style="opacity: 0.0; bottom: -30px; padding: 2.5%">
        <div></div>
        <h1>Krok 26</h1>
        <h2>Klikamy przycisk "Restart Now"</h2>
    </div>`,

    `<div class="map" style="height: 3.5%; width: 7.75%; top: 52.5%; left: 54.2%;"></div>
    <img src="./img/windows/27.png" class="windowSS">
    <div class="hint" style="opacity: 0.0; bottom: -30px; padding: 2.5%">
        <div></div>
        <h1>Krok 27</h1>
        <h2>Klikamy Enter</h2>
    </div>`,

    `<div class="map" style="height: 12.5%; width: 42%; top: 41%; left: 28.5%;"></div>
    <img src="./img/windows/28.png" class="windowSS">
    <div class="hint" style="opacity: 0.0; bottom: -30px; padding: 2.5%">
        <div></div>
        <h1>Krok 28</h1>
        <h2>Po uruchomieniu logujemy się</h2>
    </div>`,

    `<div class="map" style="height: 100%; width: 100%;"></div>
    <img src="./img/windows/29.png" class="windowSS">
    <div class="hint" style="opacity: 0.0; bottom: -30px; padding: 2.5%">
        <div></div>
        <h1>Krok 29</h1>
        <h2>Koniec</h2>
    </div>`,

    `<h1>Instalacja systemu Ubuntu zakończona</h1>
    <h4>Instalacja zakończona, nie wiesz co teraz? Naucz się podstawowych komend systemu, używając naszej wyszukiwarki komend dostępnej pod <a href="https://sagin.pl" target="_blank">tym linkiem</a></h4>`
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
    {w: 37.75, h: 70},
    {w: 37.75, h: 70},
    {w: 37.75, h: 70},
    {w: 37.75, h: 70},
    {w: 37.75, h: 70},
    {w: 37.75, h: 70},
    {w: 37.75, h: 70},
    {w: 37.75, h: 70},
    {w: 37.75, h: 70},
    {w: 60, h: 70},
    {w: 37.75, h: 70},
    {w: 37.75, h: 70},
    {w: 37.75, h: 70},
    {w: 37.75, h: 70},
    {w: 37.75, h: 70},
    {w: 37.75, h: 70},
    {w: 37.75, h: 70}
]