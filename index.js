let rate1 = document.querySelector('#b-1')
let rate2 = document.querySelector('#b-2')
let rate3 = document.querySelector('#b-3')
let rate4 = document.querySelector('#b-4')
let rate5 = document.querySelector('#b-5')
let submit = document.querySelector('#submit')
let rate = 0
let vote = localStorage.setItem("hasVoted", "0")

rate1.addEventListener('click', e => {
    rate = 1
    vote = localStorage.setItem("hasVoted", "1")
})
rate2.addEventListener('click', e => {
    rate = 2
    vote = localStorage.setItem("hasVoted", "2")
})
rate3.addEventListener('click', e => {
    rate = 3
    vote = localStorage.setItem("hasVoted", "3")
})
rate4.addEventListener('click', e => {
    rate = 4
    vote = localStorage.setItem("hasVoted", "4")
})
rate5.addEventListener('click', e => {
    rate = 5
    vote = localStorage.setItem("hasVoted", "5")
})

submit.addEventListener('click', e => {
    console.log('Send to new page')
    if(rate > 0){
        e.preventDefault();
        window.location.href = "thx.html"
    }
    else {
        alert('Pick 1 to 5')
    }  
})
