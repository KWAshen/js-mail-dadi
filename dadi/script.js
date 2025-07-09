const number = [];
const pcNumber = Math.floor(Math.random() * 6) + 1 ;
const userNumber = Math.floor(Math.random() * 6) + 1 ;

if(pcNumber > userNumber){
  console.log(`Numero pc: ${pcNumber}, numero utente: ${userNumer}. ha vinto il pc`)
}else if(pcNumber < userNumber){
  console.log(`numero pc: ${pcNumber}, numero utente: ${userNumber}. hi vinto`)
}
else{
  console.log('Pareggio')
}