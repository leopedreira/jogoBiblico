var perguntas = fetch('perguntas.json');
let arrayPerguntas = [];


perguntas.then( data => data.json())
.then( data => data.map( perguntas =>{
    arrayPerguntas.push(perguntas);
}));

$('#iniciar').click(() => {
    $('.progress-bar').css("width","100%");
    limparTela();       
    selecionarPergunta(arrayPerguntas);
    cronometro(); 
})

  

function adicionarJogo(results){                     
                $('.alert-heading').text(results.questao);
                $('.mb-0').text(results.texto);
                setTimeout(function(){
                    $('.texto').text(results.resposta);
                },60000);
            }     
            
function selecionarPergunta(array){
    let indice = aleatorio();
    array.map( array =>{
        if(indice == array.ID){
            adicionarJogo(array);
        }
    })
}
function limparTela(){
    $('.alert-heading').text('Pergunta');
    $('.mb-0').text('Dica');
    $('.texto').text('Resposta');
}
function cronometro(){
    let teste = 60;
    let progresso = 100;    
    var regride = setInterval(function(){        
        if(teste > 0){           
            progresso = progresso - 1.7;
            teste --;
            if(teste <= 5){
                $('.centralizar').removeClass("apaga");
                $('.centralizar').text(teste);
                console.log(teste);
            }            
            console.log(teste);
        }
       
        $('#iniciar').addClass("apaga");
        $('.progress-bar').css("width",progresso + "%");
        
    },1000)
    setTimeout(function(){
        clearInterval(regride);
        $('#iniciar').toggleClass("apaga");
        $(".centralizar").toggleClass("apaga");        
    },60000)
}

function aleatorio(){
    return Math.floor(Math.random() *10);
}