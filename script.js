const lista = window.document.querySelector(".lista")
const toggle = window.document.querySelector(".toggle")

toggle.addEventListener('click', () => {
    const visivel = lista.getAttribute('data-visible')
    
    if (visivel === "false") {
        lista.setAttribute('data-visible', true)
        toggle.setAttribute('aria-expanded', true)
    } else {
        lista.setAttribute('data-visible', false)
        toggle.setAttribute('data-visible', true)
        
    }
})


