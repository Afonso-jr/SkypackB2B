/* ============================================= Geral ============================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: rgb(1, 56, 159);
    --secondary-color: rgb(0, 69, 197);
    --tertiary-color: rgb(54, 120, 242);
    --headline: rgb(255, 255, 255);
    --backgroud-white: rgb(255, 255, 255);
    --whats-color: rgb(123, 184, 37);
    --brand-hover: rgb(0, 71, 59);
    --background-gray: rgb(218, 224, 227);
    --sobre-h3: rgb(63, 61, 62);
    --p-color: rgb(80, 93, 104);
    --hover-portifolio: rgb(34, 34, 34);

    --nav-height: 10rem;

    font-size: 62.5%; /* 1 rem = 10px*/
}

@media (max-width: 1024px) {
    ::-webkit-scrollbar{
        width: 0px; 
    }
}

html {
    scroll-behavior: smooth;
}

body {    
    font-family: 'DM Sans';
    font-size: 1.4rem;
    text-align: center;  
}

.wrapper {
    width: min(35rem, 100%);   
    margin-inline: auto;         
    overflow: overlay;
    overflow-x: hidden;
}

ul {
    list-style: none;
}

.button {
    color: white;
    background-color: var(--whats-color);
    border: none;
    border-radius: 1rem;
    padding: 1.6rem 3.2rem;
    width: fit-content;
    font-family: 'DM Sans';  
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    text-decoration: none;
    transition: background 200ms;
}

.button:hover {
    background-color: var(--brand-hover);
}

/* ============================================= Navigation ============================================= */

nav {
    display: flex;
    height: var(--nav-height);
    position: fixed;
    top: 0;
    width: 100vw;    
    z-index: 110;
}

nav .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
}

nav.scroll {
    background-color: var(--secondary-color);
}

nav button {
    background: none;
    border: none;
    cursor: pointer;
}

nav .menu,
nav .close-menu {
    position: fixed;
}

/* ============================================= Menu expended ============================================= */

body.menu-expended {
    overflow: hidden;
}

body.menu-expended > :not(nav) {
    visibility: hidden;
}

.menu,
.close-menu,
body.menu-expended .open-menu {
    opacity: 0;
    visibility: hidden;
}

body.menu-expended .menu,
body.menu-expended .close-menu {
    opacity: 1;
    visibility: visible;
}

.menu {
    transform: translateY(100%);
} 

body.menu-expended .menu {
    top: 0;
    left: 0;
    background-color: var(--primary-color);
    width: 100%;
    height: 100vh;
    padding-top: var(--nav-height);
    transition: transform 700ms;
    transform: translateY(0);
}
    
.menu ul:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
    margin-top: 6rem;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.1rem;
}

.menu ul li a {
    color: white;
    text-decoration: none;
}

.menu .button-menu {
    background-color: var(--headline);
    border-radius: 4rem;
    font-weight: 700;
    font-size: 1.8rem;
    list-style: 2.3rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--primary-color);        
    display: inline-block;
    padding: 1.6rem 3.2rem;       
    margin-top: 4.8rem;
    margin-bottom: 8rem;

}

.menu .button-menu:hover {
    background-color: var(--primary-color);
    color: white;
    filter: brightness(1.3);
}

.social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
}

body.menu-expended .logo-menu-celular,
body.menu-expended button {
    position: relative;
    z-index: 100;
}

.close-menu {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    margin-left: auto; 
}

body.menu-expended .open-menu {
    display: none;
    -webkit-tap-highlight-color: transparent;
    outline: none;
}

/* ============================================= Inicio ============================================= */

.inicio {
    padding-top: calc(4.1rem + var(--nav-height));
    background-image: url('../imagens/img-fundo.png');
    background-size: cover;
    background-position: center center;
}

.inicio h1 {
    font-size: 4.5rem;
    color: var(--headline);
    line-height: 130%;
    margin-bottom: 1.2rem;
}

h2 {
    font-size: 3rem;
    color: var(--headline);
    margin-bottom: 2rem;
}

h3 {
    font-size: 1.6rem;
    color: var(--headline);
    line-height: 110%;
    margin-bottom: 1.6rem;
}

.sobre-celular-info p {
    font-size: 1.6rem;
    line-height: 150%;
    font-weight: 400;
    color: var(--headline);
    margin-bottom: 3.2rem;
}

.button-inicio {
    font-size: 1.8rem;
    padding-inline: 8rem;
    margin-inline: auto;
    margin-top: 8rem;
    margin-bottom: 8rem;
}

/* ============================================= Sobre ============================================= */

section.sobre-celular h1 {
    width: 7rem;
    border-bottom: 0.5rem solid var(--primary-color);
    margin-block: 3rem 4rem;
    display: inline-block;    
}

section.sobre-celular {
    background-color: var(--background-gray);
}

.sobre-celular {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.sobre-p {
    text-align: justify;
}

.sobre-celular-info {
    background-color: var(--backgroud-white);       
    margin-inline: auto;
    margin-bottom: 4rem;
    padding: 0.5rem;
}

.sobre-celular h2 {
    margin-top: 6rem;
    margin-bottom: 0;
    color: var(--primary-color);
}

.sobre-celular-info h3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    gap: 2rem;
    margin: 3rem 2rem;
    font-size: 2rem;
    color: var(--sobre-h3);
} 

.sobre-celular-info p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    width: 30rem;
    font-family: 'DM Sans';  
    font-size: 1.6rem;
    margin-inline: auto;
    color: var(--p-color);
}

.sobre-celular > div > p:first-of-type {
    line-height: 3rem;
    font-size: 1.7rem;
    color: var(--p-color);
    padding: 1.2rem;
    margin-bottom: 3rem;
}

.sobre-celular-info:last-child {
    margin-bottom: 8rem;
}

/* ============================================= Curva ABC ============================================= */

.curvaABC {
    background-color: var(--backgroud-white);
}

.curvaABC h2 {
    width: 35rem;
    margin-top: 6rem;
    margin-bottom: 3rem;
    color: var(--primary-color);
}

.curvaABC > div > p:first-of-type {
    line-height: 3rem;
    font-size: 1.7rem;
    color: var(--p-color);
    padding: 1.2rem;
}

.colA p {
    font-size: 1.6rem;
    text-align: justify;
    line-height: 150%;
}

.curvaABC div h3 {
    color: var(--primary-color);
    font-size: 2rem;
    margin-block: 3rem 2rem;    
}

.curvaABC div p {
    color: var(--p-color);
}

.curvaABC div svg {
    margin-bottom: 3rem;
} 

.legenda {
    margin-bottom: 2rem;
    text-align: left;   
}

.destaqueA {
    color: #7C7C7C;
    font-weight: bold;
}

.destaqueB {
    color: var(--secondary-color);
    font-weight: bold; 
}

.destaqueC {
    color: var(--primary-color);
    font-weight: bold;
}

.curvaABC > div > div > p:last-child {
    margin-bottom: 8rem;
}

.abc svg {
    position: relative;
    right: 1.7rem;
}

/* ============================================= Portfolio ============================================= */

.portfolio-celular {
    background-color: var(--background-gray);
}

.portfolio-celular h2 {
    color: var(--primary-color);    
}

#portifolio {
    padding-top: 6rem;
}

.img-portfolio-celular img {
    margin: 0 auto 3rem auto;
    transition: transform 0.3s ease; 
}

section.portfolio-celular h1 {
    width: 7rem;
    border-bottom: 0.5rem solid var(--primary-color);
    margin-block: 3rem 4rem;
    display: inline-block;    
}

section.portfolio-celular h2{
    margin-bottom: 0;
}

.portfolio-celular > div > div:last-child {
    margin-bottom: 8rem;
}

.flip-card-back {
    display: none;
}

.portifolio-final {
    padding-top: 4rem;
}

.portifolio-final img {
    width: 100%;
    height: 100%;
}

div.portifolio-final-texto h2 {
    text-align: left;
}

div.portifolio-final-texto h1 {
    display: block;
    margin: 3rem 0 4rem 0 ;
}

div.portifolio-final-texto p {
    font-family: 'DM Sans';
    text-align: justify;
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 2rem;
    color: var(--p-color);
}

/* ============================================= Contato ============================================= */
.contact-us{
    background-color: var(--primary-color);
}

.contact-us h2 {
    margin-top: 5rem;
}

.contact-us p {
    line-height: 3rem;
    font-size: 1.8rem;
    color: var(--backgroud-white);
    margin-bottom: 2rem;
    padding: 2rem;
}

.button-contact {
    margin: 3rem auto 8rem auto;
    text-align: center;
    width: 32rem;
    font-size: 1.8rem;
}

.contato-cel {
    text-align: left;
    background-color: var(--backgroud-white);
}

.contato-cel h2 {
    margin-bottom: 1rem;
    color: var(--primary-color);    
}

.contato-cel ul {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-block: 6rem;
}

.contato-cel ul li {
    display: flex;
    align-items: center;
    gap: 0.8rem;    
    margin-bottom: 2rem;
}

.contato {
    padding-top: 0;
    margin-top: 6rem;
}

.logo-contato {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
    margin-bottom: 6rem;
}

div.infos li {
    font-size: 1.5rem;
    line-height: 150%;
    font-weight: 400;
    color: var(--p-color);
}

.image-container {
    position: relative;
    height: 100%;
    width: 100%;
    text-align: center;
    overflow: hidden;
}

.seja-fornecedor {
    width: 100%;
    height: auto;
    display: block;
    margin: 6rem auto;
}

.image-button {
    position: absolute;
    bottom: 20rem;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    text-transform: uppercase;
    padding: 2rem;
    background-color: var(--whats-color);
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    text-decoration: none;
}

.image-button:hover {
    background-color: var(--brand-hover);
}

/* ============================================= Politica de Privacidade ============================================= */

.politica-privacidade {
    background-color: black;
}

.politica-privacidade p {
    color: var(--backgroud-white);
    height: 10rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}


/* ============================================= Footer ============================================= */

footer {
    background-color: var(--backgroud-white);
    padding-block: 6rem;   
}

div .logo-footer {
    display: inline-block;
    margin-bottom: 6rem;
}

.social-links-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

/* ============================================= Desenvolvedor ============================================= */

.desenvolvido{
    padding-top: 6rem;
    font-size: 1.2rem;

}

.desenvolvido a {
    text-decoration: none;
    color: var(--primary-color);    
    margin-top: 1.5rem;
    font-size: 2rem;
}

/* ============================================= Botões fixos ============================================= */

.backToTopButton {
    position: fixed;
    bottom: 1rem;
    right: 2.5rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(100%);
    transition: 200ms;
}

.backToTopButton.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}


.WhatsappButtonFixed {
    position: fixed;
    bottom: 1rem;
    left: 2.5rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(100%);
    transition: 200ms;
}

.WhatsappButtonFixed.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* ============================================= Responsivo ============================================= */

@media (min-width: 1024px) {
    /* =================== Geral =================== */ 
    .wrapper {
        width: min(150rem, 95%);
        display: grid;
    }

    /* =================== Navigation =================== */ 
    /* ===== Reset ===== */ 
    nav#navigation .wrapper * {
        margin: 0;
        padding: 0;
        visibility: initial;
        display: initial;
        opacity: initial;
        flex-direction: initial;
        position: initial;
        font-size: initial;
        font-weight: initial;
        transform: initial;
        color: initial;
        background-color: initial;
        filter: initial;
    } 

    nav#navigation .close-menu,
    nav#navigation .open-menu,
    nav#navigation .social-links {
        display: none;
    }

    nav#navigation .menu {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 4rem; 
    }

    nav#navigation .menu ul:nth-child(1) {
        display: flex;
        gap: 3.2rem;
    }

    nav#navigation .menu ul li a {
        color: white;
        opacity: 0.7;
        font-weight: 400;
        font-size: 2.2rem;
    }

    nav#navigation .menu a.button-menu {
        display: flex;
        justify-content: center;
        align-items: center;
        padding:  1.5rem 4rem;
        background-color: var(--whats-color);
        color: var(--backgroud-white);
        font-weight: 700    ;
        font-size: 1.6rem;
        line-height: 1.4rem;
        text-transform: uppercase;
        border-radius: 1rem;
    }

    nav#navigation .menu li a:hover {
        opacity: 1;
    }

    nav#navigation .menu a.button-menu:hover {
        background-color: var(--brand-hover);
    }

    nav#navigation .menu li a::after {
        content: '';
        width: 0%;
        height: 4px;
        background-color: var(--backgroud-white);
        position: relative;
        bottom: -3rem;
        display: block;
    }

    nav#navigation .menu li a {
        transition: opacity 0.4s;
    }

    nav#navigation .menu li a:hover::after {
        padding-inline: 0.3rem;
        width: 100%;
        font-weight: bold;
        transition: width 0.2s;
    } 

    nav#navigation .logo-menu-celular svg {
        width: 28rem;
        height: 10rem;
    }

    /* =================== Inicio =================== */ 
    section#home h1 {
        width: 60rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 3rem auto 0rem auto;        
        text-transform: uppercase;
        font-weight: 700;
        line-height: 10rem;

    }

    section#home h3 {
        padding-top: 2rem;
        font-size: 2rem;
    } 

    section#home a {
        font-size: 2.5rem;
        font-weight: 700;
        padding-inline: 6rem;
        margin-block: 19rem;

    }

    /* =================== Sobre =================== */ 

    section#sobre h1 {
        display: flex;
        text-align: center;
        margin-inline: auto;
    } 

    section#sobre p {
        width: 70rem;
        text-align: justify;
        margin-inline: auto;
        font-size: 2rem
    }

    section#sobre h3 {
        font-size: 2.5rem;
    }

    section#sobre .sobre-celular-info {
        display: flex;
        flex-direction: column;        
        margin: 0;
        padding: 3rem 11rem; 
    }

    section#sobre .cards_sobre {
        display: flex;
        align-items: stretch;
        justify-content: space-between;    
        gap: 2rem;
        margin: 0 auto 8rem auto;
        padding: 3rem;
    }

    section#sobre .cards_sobre div {
        max-width: 100%;
        min-height: 50rem;
        width: 50%;
    }

    #sobre .sobre-celular-info h3 {
        gap: 4rem;
    }

    #sobre .sobre-celular-info p {
        padding: 2rem;
    }

    section#sobre .sobre-celular-info p {
        width: 50rem;      
        line-height: 3rem;
    }

    /* =================== Curva ABC =================== */
    
    .curvaABC .wrapper {
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .curvaABC h2 {
        text-align: left;
        margin-bottom: 4rem;
    }

    .curvaABC p {
        text-align: justify;
        font-size: 2rem;
        line-height: 3rem;
        width: 80%;
    }

    .abc svg {
        position: initial;
    } 

    .colB .legenda{
        text-align: right;
    }

    .colB .destaqueB {
        position: relative;
        right: 1rem;        
    }

    /* =================== Portifolio =================== */ 
    
    .portfolio-celular h1 {
        display: flex;
        text-align: center;
        margin-inline: auto;
    } 
    
    .img-portfolio-celular {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 2rem;
    }
    
    .img-portfolio-celular .img-portfolio-descktop img {
        align-self: center;
        margin: 0;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
      
    .flip-card-back {
        display: none;
    }

    .flip-card {
        width: 100%;
        height: 100%;
        perspective: 1000px;
    }
      
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        background-color: var(--background-gray);
    }
    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }
      
    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }
      
    .flip-card-back {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        transform: rotateY(180deg);
    }
    
    .flip-card-back img {
        width: 100%;
        height: 100%;
        border: 1px solid var(--sobre-h3);
    }

    .portifolio-final {
        padding-top: 6rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    
    .portifolio-final-texto {
        padding-top: 6rem;
    }
    
    div.portifolio-final-texto h2 {
        text-align: left;
    }
    
    div.portifolio-final-texto h1 {
        display: block;
        margin: 3rem 0 4rem 0 ;
    }
    
    div.portifolio-final-texto p {
        font-family: 'DM Sans';
        text-align: justify;
        font-size: 2rem;
        line-height: 3rem;
        margin-bottom: 2rem;
        color: var(--p-color);
    }

    /* =================== Contato =================== */ 

    .infos ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .infos ul div + div {
        border-left: 1px solid var(--primary-color);
    }   
 
    .wrapper .infos div {
        text-align: center;
        padding: 3rem;
    } 

    .contato-cel .wrapper ul li {
        display: inline-flex;        
        font-size: 1.9rem;
        gap: 1rem;
    }

    .infos div strong {
        text-align: left;
    }

    section.contato-cel h2 {
        margin-bottom: 8rem;
    }

    .image-container .image-button {
        position: absolute;
        bottom: 25%;
        left: 66%;
        width: 30%;
        transform: translateX(-30%);
        text-transform: uppercase;
        background-color: var(--whats-color);
        color: white;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: clamp(1.4rem, 1.4vw, 2.6rem);
        text-decoration: none;
    }

    .image-button:hover {
        background-color: var(--brand-hover);
    }
   
    /* =================== Footer =================== */ 
    .footer-logo-links {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    
    footer .desenvolvido header {
        font-size: 1.5rem;
    }
    
    footer .desenvolvido a {
        font-size: 2rem;
    }

    div a.logo-footer {
        margin: 0;
    }
    
    /* =================== Botões fixos =================== */ 

    #backToTopButtonDesktop {
        width: 80px;
        height: 80px;
    }    

    #WhatsappButtonFixed {
        width: 80px;
        height: 80px;
    } 

}