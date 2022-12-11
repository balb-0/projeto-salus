const lista = window.document.querySelector(".lista")
const toggle = window.document.querySelector(".toggle")
const home = window.document.querySelector('.home-close')
const sobre = window.document.querySelector('.sobre-close')
const servicos = window.document.querySelector('.servicos-close')
const contato = window.document.querySelector('.contato-close')



toggle.addEventListener('click', () => {
    const visivel = lista.getAttribute('data-visible')
    
    if (visivel === "false") {
        lista.setAttribute('data-visible', true)
        toggle.setAttribute('aria-expanded', true)
    } else {
        lista.setAttribute('data-visible', false)
        toggle.setAttribute('aria-expanded', false)
        
    }
})

home.addEventListener('click', () => {
    lista.setAttribute('data-visible', false)
    toggle.setAttribute('aria-expanded', false)
})

sobre.addEventListener('click', () => {
    lista.setAttribute('data-visible', false)
    toggle.setAttribute('aria-expanded', false)
})

servicos.addEventListener('click', () => {
    lista.setAttribute('data-visible', false)
    toggle.setAttribute('aria-expanded', false)
})

contato.addEventListener('click', () => {
    lista.setAttribute('data-visible', false)
    toggle.setAttribute('aria-expanded', false)
})

const menuItems = document.querySelectorAll('.navega a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener('click', scroll);
})
 
function scroll(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    
    window.scrollTo({
        left: 0,
        top: to - 114,
        behavior: "smooth"
    });
}

const saibaMaisMidia = window.document.querySelector('.saibamais-servicos-midia')
const saibaMaisSeo = window.document.querySelector('.saibamais-servicos-seo')
const saibaMaisAnuncios = window.document.querySelector('.saibamais-servicos-anuncios')
const saibaMaisSite = window.document.querySelector('.saibamais-servicos-site')

const fecharMidia = window.document.querySelector('.fechar-midia')
const fecharSeo = window.document.querySelector('.fechar-seo')
const fecharAnuncios = window.document.querySelector('.fechar-trafego')
const fecharSite = window.document.querySelector('.fechar-site')


saibaMaisMidia.addEventListener('click', () => {
    window.document.querySelector('.midias-expanded').setAttribute('style', 'display: flex')
})

fecharMidia.addEventListener('click', () => {
    window.document.querySelector('.midias-expanded').setAttribute('style', 'display: none')

})

saibaMaisSeo.addEventListener('click', () => {
    window.document.querySelector('.seo-expanded').setAttribute('style', 'display: flex')
})

fecharSeo.addEventListener('click', () => {
    window.document.querySelector('.seo-expanded').setAttribute('style', 'display: none')
})

saibaMaisAnuncios.addEventListener('click', () => {
    window.document.querySelector('.trafego-expanded').setAttribute('style', 'display: flex')
})

fecharAnuncios.addEventListener('click', () => {
    window.document.querySelector('.trafego-expanded').setAttribute('style', 'display: none')

})

saibaMaisSite.addEventListener('click', () => {
    window.document.querySelector('.site-expanded').setAttribute('style', 'display: flex')
})

fecharSite.addEventListener('click', () => {
    window.document.querySelector('.site-expanded').setAttribute('style', 'display: none')

})
