const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      resposta: [
        "var",
        "define",
        "let",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes não é um tipo de dado em JavaScript?",
      resposta: [
        "String",
        "Float",
        "Boolean",
      ],
      correta: 1
    },
    {
      pergunta: "Como se escreve um comentário de linha única em JavaScript?",
      resposta: [
        "// Comentário",
        "/* Comentário */",
        "' Comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para exibir algo no console?",
      resposta: [
        "console.show()",
        "console.log()",
        "print()",
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '===' verifica?",
      resposta: [
        "Apenas o valor",
        "Valor e tipo",
        "Apenas o tipo",
      ],
      correta: 1
    },
    {
      pergunta: "Como se define uma função em JavaScript?",
      resposta: [
        "function minhaFuncao() {}",
        "def minhaFuncao() {}",
        "func minhaFuncao() {}",
      ],
      correta: 0
    },
    {
      pergunta: "Qual estrutura de controle é usada para repetir um bloco de código várias vezes?",
      resposta: [
        "if",
        "for",
        "switch",
      ],
      correta: 1
    },
    {
      pergunta: "Como se adiciona um elemento ao final de um array em JavaScript?",
      resposta: [
        "array.push(item)",
        "array.add(item)",
        "array.append(item)",
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses métodos converte um valor em um número inteiro?",
      resposta: [
        "parseInt()",
        "toFixed()",
        "toString()",
      ],
      correta: 0
    },
    {
      pergunta: "Como se cria um objeto em JavaScript?",
      resposta: [
        "let obj = {}",
        "let obj = []",
        "let obj = ()",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  const totalDePerguntas = perguntas.length;
  
  const corretas = new Set();
  // criamos umas função que chama uma tag do HTML, usando o ID dela e depois o filho, pique css
  //tag pai tag filho
  const mostrarTotal = document.querySelector('#acertos span');
  //em seguida concatenamos, tranformando o número de acertos mais o total de perguntas
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  
  // loop ou traço de repetição
  for(const item of perguntas) {
    //aqui estmos criando a chamada aos filhos da tag template, e adicionando os valores do array perguntas na tag H3
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('H3').textContent = item.pergunta
  
    for(let resposta of item.resposta) {
  
      //aqui estamos fazendo a chamada das tags dl e dt pela variavel quizItem que é o template, e alterando as tags span pelos valores do array resposta
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta;
  
      //nessa linha estamos acessando o input e dando um valor a cada name
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
  
      //estamos entrando no valor do input e altendo pelo valor que o usuario selecionar
      //são três respostas, nesse caso o valor será entre 0,1 ou 2, e vai ficar atualizando o programa a cada vez que o usuario apertar
      dt.querySelector('input').value = item.resposta.indexOf(resposta);
  
  
  
      //estamos realizando uma mudança quando o usuario clica em um dos inputs
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item);
        if(estaCorreta) {
          corretas.add(item);
        }
  
        //aqui estamos acessando o for, porque quando o cliente acertar uma pergunta, vai aparecer atualizar no HTML do site
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
      }
    //aqui estamos chamando o template e informando que em dl precisa aparecer a variavel dt
      quizItem.querySelector('dl').appendChild(dt); 
    }
  
    //como deletar uma tag, acesamos a variavel que da acesso ao HTML e pedimos que remova o primeiro 
    quizItem.querySelector('dl dt').remove();
  
  
  //coloca a pergunta na tela
    quiz.appendChild(quizItem);
  }