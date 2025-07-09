const emailsList = ['matteo@gmail.com', 'marco@gmail.com' , 'luca@gmial.com', 'giovanni@gmail.com'];
const userMail = prompt ('Inserisci la tua email');

let check = false;

for(let i=0; i<emailsList.length; i++){
  if(userMail === emailsList[i]){
      check = true;
  }
}

if(check === true){
  console.log('la mail trovata')
}
else{
  console.log('Mail non trovata')
}