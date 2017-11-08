let perguntas = fetch('perguntas.json');
//perguntas.then( data => data.json());
setTimeout(() => {
    perguntas.then( data => data.json())
             .then( data => data.map( perguntas =>{
                 console.log(perguntas.questao);
                 console.log(perguntas.resposta);
                 $('.alert-heading').text(perguntas.questao);
                 $('.texto').text(perguntas.resposta);
             }));
},2000);


