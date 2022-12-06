const lista = window.document.querySelector(".lista")
const toggle = window.document.querySelector(".toggle")



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