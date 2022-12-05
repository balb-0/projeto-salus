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

document.querySelectorAll('nav li').forEach(function(listitem) {
    listitem.addEventListener('click', function() {
        var topPosition = document.getElementById(listitem.dataset.page).offsetTop;
        console.log(topPosition);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
})