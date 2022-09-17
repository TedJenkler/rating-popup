let rate1 = document.querySelector('#b-1')
let rate2 = document.querySelector('#b-2')
let rate3 = document.querySelector('#b-3')
let rate4 = document.querySelector('#b-4')
let rate5 = document.querySelector('#b-5')
let submit = document.querySelector('#submit')
let rate = 0

rate1.addEventListener('click', e => {
    rate = 1
})
rate2.addEventListener('click', e => {
    rate = 2
})
rate3.addEventListener('click', e => {
    rate = 3
})
rate4.addEventListener('click', e => {
    rate = 4
})
rate5.addEventListener('click', e => {
    rate = 5
})

submit.addEventListener('click', e => {
    console.log('Send to new page')
    e.preventDefault();

    window.location.href = "thx.html"
})





