const names = [];
const events = []

function writeCards(names, events) {
  let thankYou = []
    for (let i = 0; i < names.length; i++) {
    thankYou.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }
  return thankYou
}

console.log(writeCards(['jon','dog', 'bill'], "Christmas"))

let countdown = 10; 
function countDown(countdown) {
    while (countdown > -1) {
    console.log(countdown--)
    }
}