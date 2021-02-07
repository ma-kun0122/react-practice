//○×交代の関数→各マスが何個埋まっているかで○×を決定
function CountTurn(){
    let number =0;
    for(let i = 0; i<=8; i++){
        if(document.getElementById(i).innerHTML !=""){
            number = number +1;
        }
        };
    return number;
  }
  
export default CountTurn;