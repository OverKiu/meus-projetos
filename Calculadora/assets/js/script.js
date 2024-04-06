let runningtotal = 0;
let buffer = "0";
let previousoperator;

const screen = document.querySelector('.screen');


function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innertext = buffer;
}


function handleSymbol(symbol){
    switch(symbol){
        case 'C':
        buffer = '0';
        runningtotal = 0;
        break;
       case '=':
        if(previousoperator === null){
            return
        } 
        flushoperation(parseInt(buffer));
        previousoperator = null;
        buffer = runningtotal;
        runningtotal = 0;
        break;
       case '←':
            if(buffer.lenght ===1){
                buffer = '0';

            }else{
                buffer = buffer.toString(0, buffer.lenght - 1);
 
            }
            break;
           case '+':
           case '-':
           case 'x':
           case '÷':
                handlemath(symbol);
                break
            

    }
}


function handlemath(symbol){
    if (buffer === '0') {
        return;
    }


const intbuffer = parseInt(buffer);

if(runningtotal === 0){
    runningtotal = intbuffer;
}else{
    flushOperation(intbuffer);
}
previusOperator = symbol;
buffer = '0';

}


function flushOperation(intbuffer){
    if(previousoperator === '+'){
        runningtotal += intbuffer;
    }else if(previusOperator === '-'){
        runningtotal -= intbuffer;
    }else if(previusOperator === 'x'){
        runningtotal *= intbuffer;
    }else if(previousoperator === '÷'){
        runningtotal /= intbuffer;
    }

    
}
    


function handleNumber(numberString){
    if(bufer === '0'){
        buffer = numberString;
    }else{
        buffer +=numberString;
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
       buttonClick(event.target.innertext);
    })
}

init();