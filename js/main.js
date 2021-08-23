let modalBtn = document.querySelector('.modal-btn')
let closeBtn = document.querySelector('.close-btn')
let modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none'
})


window.onclick = (e) => {
    if (e.target === modal ) {
        document.querySelector('.modal').style.display = 'none'
    }
}