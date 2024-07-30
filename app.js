let listOfTheDrawings = [];
let drawn;
let maximum;
let minimum;
let times;
let result;


function roll(maximum, minimum){ //essa foi a função que eu escrevi sem conhecer o Math.float, só fazendo testes e tendo problemas com a tipagem, mas consegui e funciona. 
    drawn = parseInt(Math.random() * (maximum - minimum + 1)) + parseInt(minimum); //Os parseInt são um recurso que encontrei para resolver os problemas de tipagem fraca. 
    return drawn;
}

function sortear(){
    times = document.getElementById('quantidade').value;
    minimum = document.getElementById('de').value;
    maximum = document.getElementById('ate').value;
    if(times < 1 || times > (maximum - minimum + 1) || minimum > maximum){
        alert('Opções invalidas');
        reiniciar();
    }else{
        while(times > 0){
            drawn = roll(maximum, minimum);
            if (!listOfTheDrawings.includes(drawn)){
                listOfTheDrawings.push(drawn);
                times--;
            }
        }
        console.log(listOfTheDrawings);
        result = document.getElementById('resultado');
        result.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listOfTheDrawings}</label>`;
    }
}

function reiniciar(){
    times = document.getElementById('quantidade');
    times.value = '';
    minimum = document.getElementById('de');
    minimum.value = '';
    maximum = document.getElementById('ate');
    maximum.value = '';
    result = document.getElementById('resultado');
    result.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    listOfTheDrawings = [];
}