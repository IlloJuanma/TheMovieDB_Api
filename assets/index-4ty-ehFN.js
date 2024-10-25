(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();function k(){const e=document.createElement("header");e.classList.add("header"),e.innerHTML=`
        <div class="layout-box2">
                <img src="../img/logo-1x.png" alt class="logo">
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
    `,document.body.prepend(e)}function P(){const e=document.createElement("footer");e.classList.add("footer-background"),e.innerHTML=`
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
    `,document.body.appendChild(e)}const L="60a5853d1efe26bdd53ff300c6705db1",g={nowPlaying:"now_playing",popular:"popular",topRated:"top_rated",upcoming:"upcoming"},m={es:"es-ES",en:"en-EN"},D=[{text:"Popular",class:"popular-button"},{text:"Upcoming Movies",class:"upcoming-button"},{text:"Top Rated",class:"topRated-button"},{text:"Now Playing",class:"nowPlaying-button"}];function B(){let e=!1;const t=document.getElementsByClassName("movie-container")[0],i=()=>{e?t.classList.add("list-view"):t.classList.remove("list-view")},s=document.createElement("button");s.textContent="Cambiar vista a lista",s.classList.add("toggle-btn"),document.querySelector(".view-button").appendChild(s),s.addEventListener("click",()=>{e=!e,i(),s.textContent=e?"Cambiar vista a grilla":"Cambiar vista a lista"})}const T={en:"Inglés",es:"Español",fr:"Francés",de:"Alemán",ja:"Japonés",ko:"Coreano",it:"Italiano",zh:"Chino",pt:"Portugués"};function A(e){return T[e]||"Idioma desconocido"}function R(e){const t=Math.floor(e/60),i=e%60;return`${t}h ${i}m`}function I(e){const t=new Date;return new Date(e.release_date)<=t}function N(e){return I(e)?"Estrenada":"No estrenada"}k();P();let w=null,$=g.popular;document.addEventListener("DOMContentLoaded",()=>{B(),C(g.popular,m.es)});async function O(e=m.es){const t=`https://api.themoviedb.org/3/genre/movie/list?api_key=${L}&language=${e}`;return(await(await fetch(t)).json()).genres}async function C(e,t=m.es){const i=`https://api.themoviedb.org/3/movie/${e}?api_key=${L}&language=${t}`;try{const s=await V(i);if(s.results){const o=G(s.results),a=await O(t),n={};a.forEach(l=>{n[l.id]=l.name}),H(s.results,n);const d=o.map(l=>n[l]),h=document.querySelector(".filter-container");h.innerHTML="";const p=document.createElement("select"),r=document.createElement("option");r.textContent="-- No filters --",r.value="",p.appendChild(r),d.forEach((l,c)=>{const u=document.createElement("option");u.textContent=l,u.value=o[c],p.appendChild(u)}),p.addEventListener("change",async l=>{const c=l.target.value;w=c,console.log(w),c?await z(c,n,t):(await C(g.popular,t),w=null)}),document.querySelector(".filter-container").appendChild(p)}else{const o=document.querySelector(".error-container");o.textContent="No se encontraron resultados."}}catch(s){console.log(s)}}async function V(e){return await(await fetch(e)).json()}async function z(e,t,i=m.es){const s=`https://api.themoviedb.org/3/discover/movie?api_key=${L}&with_genres=${e}&language=${i}`;try{const a=await(await fetch(s)).json();if(a.results)H(a.results,t);else{const n=document.querySelector(".error-container");n.textContent="No se encontraron resultados."}}catch(o){console.log(o)}}async function M(e,t=m.es){const i=`https://api.themoviedb.org/3/movie/${e}/credits?api_key=${L}&language=${t}`;try{return await(await fetch(i)).json()}catch(s){console.log(s)}}async function x(e,t=m.es){const i=`https://api.themoviedb.org/3/movie/${e}?api_key=${L}&language=${t}&append_to_response=credits,reviews,recommendations`;try{return await(await fetch(i)).json()}catch(s){console.log(s)}}function j(e,t,i=!1){const{id:s,title:o,overview:a,release_date:n,poster_path:d,vote_average:h,genre_ids:p}=e,r=n.split("-")[0],l=`https://image.tmdb.org/t/p/w300${d}`,c=document.createElement("div");c.classList.add("movie-card");const u=document.createElement("img");u.src=l,u.addEventListener("click",()=>F(e,t));const b=document.createElement("p");b.textContent=`Año: ${r}`;const y=document.createElement("p");y.textContent=`Categoría: ${E(p,t)}`;const _=document.createElement("h3");_.textContent=o,_.addEventListener("click",()=>F(e,t));const f=document.createElement("p");f.classList.add("movie-overview"),f.textContent="Descripción: "+(a||"No se ha encontrado descripción");const v=document.createElement("button");v.textContent="Leer más",v.classList.add("read-more-button"),v.addEventListener("click",()=>{f.classList.contains("expanded")?(f.classList.remove("expanded"),v.textContent="Leer más"):(f.classList.add("expanded"),v.textContent="Leer menos")});const S=document.createElement("p");return S.textContent=`Puntaje: ${h.toFixed(2)}`,c.appendChild(u),c.appendChild(b),c.appendChild(y),c.appendChild(_),c.appendChild(f),c.appendChild(v),c.appendChild(S),c}async function H(e,t){const i=document.querySelector(".movie-container");i.innerHTML="";for(const s of e){const o=await x(s.id);s.runtime=o.runtime,s.tagline=o.tagline;const a=j(s,t,s.runtime,s.tagline),n=document.createElement("button");n.textContent="Ver actores / director",n.classList.add("details-button"),n.addEventListener("click",()=>{U(s,t)}),a.appendChild(n),i.appendChild(a)}}async function U(e,t,i){const s=document.getElementById("movie-modal"),o=document.querySelector(".modal-content"),a=E(e.genre_ids,t),n=await M(e.id),d=n.cast.slice(0,4).map(r=>r.name).join(", "),h=n.crew.filter(r=>r.job==="Director").map(r=>r.name).join(", "),p=n.crew.filter(r=>r.job==="Producer").map(r=>r.name).join(", ");o.innerHTML=`
    <span class="close-btn"></span>
    <img src="https://image.tmdb.org/t/p/w200${e.poster_path}" alt="${e.title}">
    <h2>${e.title}</h2>
    <p><strong>Año: </strong>${e.release_date.split("-")[0]}</p>
    <p><strong>Géneros:</strong> ${a}</p>
    <p><strong>Director/a:</strong> ${h||"No disponible"}</p>
    <p><strong>Productor(es):</strong> ${p||"No disponible"}</p>
    <p><strong>Actores principales:</strong> ${d}</p>
    <p><strong>${e.overview}</strong></p>
    <p>Puntuación: ${e.vote_average.toFixed(2)}</p>
  `,s.style.display="flex",window.addEventListener("click",r=>{r.target===s&&(s.style.display="none")})}D.forEach(e=>{const t=document.createElement("button");t.textContent=e.text,t.classList.add(e.class),document.querySelector(".button-container").appendChild(t)});const q={"popular-button":g.popular,"upcoming-button":g.upcoming,"topRated-button":g.topRated,"nowPlaying-button":g.nowPlaying};Object.keys(q).forEach(e=>{const t=document.querySelector(`.${e}`);t&&t.addEventListener("click",()=>{$=q[e],C($,m.es)})});function G(e){const t=e.flatMap(s=>s.genre_ids);return Array.from(new Set(t))}function E(e,t){return e.map(i=>t[i]||"Desconocido").join(", ")}async function Q(e,t){const i=E(e.genre_ids,t),s=R(e.runtime),a=(await M(e.id)).crew.filter(d=>d.job==="Director"),n=`<li class="info_date--genre">${i}</li>
  `;return`
    <section class="backgroundFilm layout-box2">
  <div class="backgroundFilm__container">
    <div class="backgroundImage">
      <img class="back-backdrop" src="https://image.tmdb.org/t/p/w1280${e.backdrop_path}" alt="${e.title} backdrop">
    </div>
    <div class="backgroundFilm__container--info">
      <img class="back-poster" src="https://image.tmdb.org/t/p/w200${e.poster_path}" alt="${e.title} poster">
      <div class="info__data">
        <h1 class="info__title">${e.title} (${e.release_date.split("-")[0]})</h1>
        <div class="info_date--complete">
          <p class="info_date">${e.release_date}</p>
          <ul class="info_date--genre">
            ${n}
            <li>${s}</li>
          </ul>
        </div>
        <div class="info-summary">
          <p>${e.tagline}</p>
          <h2>Vista General</h2>
          <p>${e.overview?e.overview:"Descripción: No se ha encontrado descripción"}</p>
        </div>
        <div class="info-director">
          <h3>${a[0].name}</h3>
          <p>${a[0].job}</p>
        </div>
      </div>
    </div>
  </div>
</section>

    `}async function Y(e){const t=await x(e.id),i=t.credits.cast.slice(0,6),s=t.budget?`$${t.budget.toLocaleString()}`:"Presupuesto no disponible",o=t.revenue?`$${t.revenue.toLocaleString()}`:"Ganancias no disponible";return`
    <section class="movie-cast layout-box">
      <div class="movie__cast--container">
        <h2>Reparto Principal</h2>
        <div class="cast__data--container">
          ${i.map(n=>`
      <div class="cast__data--info">
        <img src="https://image.tmdb.org/t/p/w200${n.profile_path?n.profile_path:""}" alt="${n.name}">
        <p class ="actor--name" >${n.name}</p>
        <p class ="actor--character">${n.character}</p>
      </div>
    `).join("")} <!-- Aquí se insertan los actores -->
        </div>
      </div>
      <div class = "movie__cast--infoContainer">
        <div class = "movie__cast--state">
        <h4>Estado</h4>
        <p>${N(e)}</p>
        </div>
        <div class = "movie__cast--language">
        <h4>Idioma Original</h4>
        <p>${A(e.original_language)}</p>
        </div>
        <div class = "movie__cast--budget">
        <h4>Presupuesto</h4>
        <p>${s}</p>
        </div>
        <div class = "movie__cast-earnings">
        <h4>Ingresos</h4>
        <p>${o}</p>
        </div>
      </div>
    </section>
  `}async function J(e){try{const i=(await x(e.id)).reviews.results;let s="";return i.length>0?i.forEach(o=>{const a=o.author_details.username,n=o.content;s+=`
        <div class="review">
          <h3>Username</h3>
          <p class= "username">${a}</p>
          <h3>Reseña</h3>
          <p class = "text">${n}</p> 
        </div>
        `}):s="<p>No hay reseñas disponibles.</p>",`
    <section class="reviews layout-box">
      <div class = "reviews__container">
        <h2>Reviews de la película</h2>
        ${s}
      </div>
    </section>   
    `}catch(t){console.error("Error: ",t)}}async function K(e){const s=(await x(e.id)).recommendations.results.filter(a=>a.vote_average>6.5);let o="";return s.length>0?s.forEach(a=>{const n=a.title,d=`https://image.tmdb.org/t/p/w200${a.poster_path}`;o+=`
      <div class="recommended__info">  
          <img src="${d}" alt="${n}" class="recommended-image">
          <h3>${n}</h3>
        </div>
      `}):o="<p>No hay peliculas recomendadas.</p>",`
  <section class="recommended">
    <h2>Peliculas recomendadas</h2>
    <div class="recommended__container">
    ${o}
    </div>
  </section>
  `}async function F(e,t){let i=!1;const s=document.getElementById("root"),o=document.querySelector(".filter-container"),a=document.querySelector(".view-button"),n=document.querySelector(".popular-button"),d=document.querySelector(".upcoming-button"),h=document.querySelector(".topRated-button"),p=document.querySelector(".nowPlaying-button"),r=document.querySelector(".error-container"),l=document.querySelector(".movie-container");o.classList.add("hidden"),a.classList.add("hidden"),n.classList.add("hidden"),d.classList.add("hidden"),h.classList.add("hidden"),p.classList.add("hidden"),r.classList.add("hidden"),l.classList.add("hidden"),l.classList.contains("list-view")&&(i=!0,l.classList.remove("list-view")),await M(e.id);const c=Q(e,t),u=Y(e),b=J(e),y=K(e);s.innerHTML=`
    ${await c}
    ${await u}
    ${await b}
    ${await y}
    <div class = "layout-box">
    <button id="back-catalog">Volver al catálogo</button>
    </div>
  `,document.getElementById("back-catalog").addEventListener("click",()=>{o.classList.remove("hidden"),a.classList.remove("hidden"),n.classList.remove("hidden"),d.classList.remove("hidden"),h.classList.remove("hidden"),p.classList.remove("hidden"),r.classList.remove("hidden"),l.classList.remove("hidden"),i&&l.classList.add("list-view"),s.innerHTML="",w?z(w,t,m.es):C($,m.es)})}
