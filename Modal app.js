const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const modal = document.querySelector('.modal')

modal.style.opacity ='0'
openBtn.addEventListener('click',function() {
    modal.style.opacity ='1'
    document.body.style.backgroundColor= 'red'
    openBtn.style.opacity='0'
})
closeBtn.addEventListener('click',function() {
    modal.style.opacity ='0'
    document.body.style.backgroundColor= ''
    openBtn.style.opacity='1'
})