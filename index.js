//  Made by Poukam Pierre

const container = document.querySelector('.container')
const btn = document.querySelector('.search-btn')
const input = document.querySelector('.input-search')

btn.addEventListener('click', ()=>{
    container.classList.toggle('active')
    input.focus()
})