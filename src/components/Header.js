// Aqui vamos a renderizar el Header para importarlo dinámicamente en el main.js y luego en el index.html
export function renderHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    // <img src="../assets/images/logo-1x.png" alt class="logo">
    header.innerHTML = `
        <div class="layout-box2">
                <nav class="nav">
                    <ul class="menu">
                        <li class="item"><a href="#">Home</a></li>
                        <li>
                            <span class="separator">/</span>
                        </li>
                        <li class="item"><a href="#">Features</a></li>
                        <li>
                            <span class="separator">/</span>
                        </li>
                        <li class="item"><a href="#">About</a></li>
                        <li>
                            <span class="separator">/</span>
                        </li>
                        <li class="item"><a href="#">News</a></li>
                        <li>
                            <span class="separator">/</span>
                        </li>
                        <li class="item"><a href="#">Contacts</a></li>
                    </ul>
                </nav>
                <div class="tools">
                    <search class="search">
                        <button class="icon outlined">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960" width="24px"
                                fill="#e8eaed">
                                <path
                                    d="M784-120 532-372q-30 24-69 38t-83 14q-109
                 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 
                 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 
                 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                            </svg>
                        </button>
                    </search>
                    <span class="separator">|</span>
                    <nav class="nav">
                        <ul class="social">
                            <li class="icon outlined">
                                <a href="https://twitter.com/MrFlexaverde"
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 50 50"
                                        width="48px"
                                        height="48px"><path
                                            d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 
                        L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 
                        21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 
                        L 5.9199219 6 z M 9.7167969 8 
                            L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" /></svg>
                                </a>
                            </li>
                            <li class="icon outlined">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 50 50"
                                        width="48px"
                                        height="48px"><path
                                            d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 
                        45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 
                        29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 
                        C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 
                        27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 
                        33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 
                        16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 
                        20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703
                             C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z" /></svg>
                                </a>
                            </li>
                            <li class="icon outined">
                                <a
                                    href="https://www.instagram.com/juanma_rodrguez/"
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 50 50"
                                        width="48px"
                                        height="48px"><path
                                            d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 
                        C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 
                        47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 
                        40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 
                        L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 
                        37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 
                        25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 
                        36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34
                             C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" /></svg>
                                </a>
                            </li>
                            <li class="icon outlined">
                                <a
                                    href="https://www.youtube.com/watch?v=ArHSMbhjLiE"
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48" width="48px"
                                        height="48px">
                                        <path fill="#FF3D00"
                                            d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2
                    -4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z" />
                                        <path fill="#FFF"
                                            d="M20 31L20 17 32 24z" /></svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
    `;

    // Insertamos al principio del body
    document.body.prepend(header);
}