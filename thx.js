let vote = localStorage.getItem("hasVoted")
let rating = document.querySelector('#rating')

rating.innerHTML = `You selected ${vote} out of 5`

console.log(vote)
