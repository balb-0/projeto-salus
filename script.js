const lista = window.document.querySelector(".lista")
const toggle = window.document.querySelector(".toggle")
const home = window.document.querySelector('.home-close')
const sobre = window.document.querySelector('.sobre-close')
const servicos = window.document.querySelector('.servicos-close')



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


const botaoEmail = document.querySelector('.button-email')

botaoEmail.addEventListener('click', () => {
    botaoEmail.submit(function(e) {
        e.preventDefault()
        return false
    })
})