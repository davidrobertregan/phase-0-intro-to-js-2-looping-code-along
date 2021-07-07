const names = ["Bill", "Ian", "Tom"];
const events = ["surprise"]

function writeCards(names) {
  let final = []
    for (let i = 0; i < names.length; i++) {
    final.push (`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }
  return final
}

let countdown = 10; 
function countDown(countdown) {
    while (countdown > -1) {
    console.log(countdown--)
    }
}