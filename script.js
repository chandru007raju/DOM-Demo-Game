let redd = document.getElementById('red');
let yell = document.getElementById('yellow');
let gree = document.getElementById('green');
//
// {
// redd.onclick = () => console.log('you clicked red box')
// yell.onclick = () => console.log('you clicked yellow box')
// gree.onclick = () => console.log('you clicked green box')
// }

//                   OR       

// redd.onclick = () => {
//   console.log('User choose Rock')
// }
//get computer choice..let that be 'paper'
//user choice vs computer choice..then decide Result
// -1, 0, 1
//show everything on the DOM(screen)


//instead of writing like this we can make this in this form
// we Loop Through all of these



// we are Retriving data from HTML using the class (.colorSquare)
const squares = document.querySelectorAll('.colorSquare')
console.log(squares)

//{                         // instead of this we can use loop rather than writig it many times
// console.log(squares[0].value)    
// console.log(squares[1].value)
// console.log(squares[2].value)
//}

//  we will use a for ****EachLoop here

// squares.forEach(square => console.log(square.value))

// squares.forEach(square => {
//   square.onclick = () => console.log(square.value)
// })
//
// Dom  Red-Yellow-Green squares Game

const timesclicked = {'red' : 0, 'yellow' : 0, 'green' : 0}
squares.forEach(square => {
  square.onclick = () => {
    timesclicked[square.value]+=1
     square.innerText = timesclicked[square.value]
  }
})


 function clearScores() {
   timesclicked.red = 0
   timesclicked.yellow = 0
   timesclicked.green = 0
   squares.forEach(square => {
     square.innerText = ''
     })
 }  

const clearGamebtn = document.getElementById('clear-game')

clearGamebtn.onclick = () => clearScores()

 