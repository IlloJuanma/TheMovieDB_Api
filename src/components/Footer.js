// Aqui vamos a renderizar el Footer para importarlo dinámicamente en el main.js y luego en el index.html

export function renderFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer-background');

    footer.innerHTML = `
        <div class="footer-container">
                <ul class="footer-container_data layout-box">
                    <li class="footer-datalist_title">
                        <span class="title">Filmax</span>
                        <ul class="footer-data_rights">
                            <li>ThemeRex © 2024. All rights reserved</li>
                            <li>Juanma Rodríguez</li>
                        </li>
                    </ul>
                    <li class="footer-datalist_title">
                        <span class="title-data">Movies</span>
                        <ul class="footer-datalist">
                            <li><a href="#">Film News</a></li>
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Coming Soon</a></li>
                            <li><a href="#">Most Popular</a></li>
                            <li><a href="#">Top Trailers</a></li>
                        </ul>
                    </li>
                    <li class="footer-datalist_title">
                        <span class="title-data">Additional Links</span>
                        <ul class="footer-datalist">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Service Plus</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Contacts</a></li>
                        </ul>
                    </li>
                    <li class="footer-datalist_title">
                        <span class="title-data">Newsletter</span>
                        <ul>
                            <li class="footer-datalist">
                                <form action>
                                    <input type="text" name="newsletter"
                                        id="newsletter"
                                        placeholder="Here for a subscribe">
                                    <input type="submit" name="subscribe"
                                        id="subscribe" value="subscribe">
                                </form>
                                <!-- <a href="#" class="footer-news">
                            Newsletter sing up
                        </a> -->
                            </li>
                        </ul>
                        <span class="footer-datalist_separator"></span>
                        <div class="footer-data_social">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48" width="48px"
                                    height="48px"
                                    baseProfile="basic"><lineargradient
                                        id="U8Yg0Q5gzpRbQDBSnSCfPa"
                                        x1="4.338"
                                        x2="38.984" y1="-10.056" y2="49.954"
                                        gradientUnits="userSpaceOnUse"><stop
                                            offset="0"
                                            stop-color="#4b4b4b" /><stop
                                            offset=".247"
                                            stop-color="#3e3e3e" /><stop
                                            offset=".686"
                                            stop-color="#2b2b2b" /><stop
                                            offset="1"
                                            stop-color="#252525" /></lineargradient><path
                                        fill="url(#U8Yg0Q5gzpRbQDBSnSCfPa)"
                                        d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z" /><path
                                        fill="#fff"
                                        d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z" /><polygon
                                        fill="#fff"
                                        points="15.866,34 23.069,25.656 22.127,24.407 13.823,34" /><polygon
                                        fill="#fff"
                                        points="24.45,21.721 25.355,23.01 33.136,14 31.136,14" /></svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48" width="48px"
                                    height="48px"><lineargradient
                                        id="awSgIinfw5_FS5MLHI~A9a"
                                        x1="6.228"
                                        x2="42.077" y1="4.896" y2="43.432"
                                        gradientUnits="userSpaceOnUse"><stop
                                            offset="0"
                                            stop-color="#0d61a9" /><stop
                                            offset="1"
                                            stop-color="#16528c" /></lineargradient><path
                                        fill="url(#awSgIinfw5_FS5MLHI~A9a)"
                                        d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z" /><path
                                        d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z"
                                        opacity=".05" /><path
                                        d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z"
                                        opacity=".07" /><path fill="#fff"
                                        d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z" /></svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48" width="48px"
                                    height="48px"><radialgradient
                                        id="yOrnnhliCrdS2gy~4tD8ma"
                                        cx="19.38"
                                        cy="42.035" r="44.899"
                                        gradientUnits="userSpaceOnUse"><stop
                                            offset="0"
                                            stop-color="#fd5" /><stop
                                            offset=".328"
                                            stop-color="#ff543f" /><stop
                                            offset=".348"
                                            stop-color="#fc5245" /><stop
                                            offset=".504"
                                            stop-color="#e64771" /><stop
                                            offset=".643"
                                            stop-color="#d53e91" /><stop
                                            offset=".761"
                                            stop-color="#cc39a4" /><stop
                                            offset=".841"
                                            stop-color="#c837ab" /></radialgradient><path
                                        fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><radialgradient
                                        id="yOrnnhliCrdS2gy~4tD8mb"
                                        cx="11.786"
                                        cy="5.54" r="29.813"
                                        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                                        gradientUnits="userSpaceOnUse"><stop
                                            offset="0"
                                            stop-color="#4168c9" /><stop
                                            offset=".999"
                                            stop-color="#4168c9"
                                            stop-opacity="0" /></radialgradient><path
                                        fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><path
                                        fill="#fff"
                                        d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" /><circle
                                        cx="31.5" cy="16.5" r="1.5"
                                        fill="#fff" /><path fill="#fff"
                                        d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z" /></svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48" width="48px"
                                    height="48px"><path fill="#FF3D00"
                                        d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z" /><path
                                        fill="#FFF"
                                        d="M20 31L20 17 32 24z" /></svg>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
    `;

    // Insertamos el footer al final del body
    document.body.appendChild(footer);
}