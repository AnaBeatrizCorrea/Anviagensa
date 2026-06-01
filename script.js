    //botao e entrada de funçao
    let btnCalcular = document.getElementById("Calcular");
        btnCalcular.addEventListener('click', clique);
    let btnImprime = document.getElementById("Imprimir");
        btnImprime.addEventListener('click', imprimir);
    
        const scriptHtml2Canvas = document.createElement('script');
        scriptHtml2Canvas.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
        document.head.appendChild(scriptHtml2Canvas);
    function clique(){

        let destino=[document.getElementById("Floresta"),
        document.getElementById("Lencois"),
        document.getElementById("Pantanal"),
        document.getElementById("Cataratas"),
        document.getElementById("Chapada"),
        document.getElementById("Bonito")
        ];

        let adicionais=[document.getElementById("Refeicoes"),
        document.getElementById("Guia"),
        document.getElementById("Cesta"),
        document.getElementById("Festa")        
        ];

        // entradas

        let NomeC= document.getElementById("Nome").value;
        let Cupom_usado=document.getElementById("cupom").value;
        let Cupons=["BRASIL20", "CUPONZ10", "MPBE10", "ULTIMO05"];
        let Possui_Desconto;
        let Descontos=[0.2, 0.1, 0.1, 0.05];
        let ValorDesc = 0;
        let Valor_Total=0;
        let Valor_Destino=0;
        let Valor_Total_Desc=0;
        let Valor_Adicionais=0;
        let contador=0;

        // saidas

        let p_nome = document.getElementById("Nome-Cliente");
        let p_valorT = document.getElementById("Valor-Total");
        let p_cupomU = document.getElementById("Cupom-usado");
        let p_valorD= document.getElementById("Valor-Desconto");       
        let p_valorP= document.getElementById("Valor-Pagar");
        
        for(let i = 0; i<= 5; i++){
            if(destino[i].checked){
                Valor_Destino = Number( destino[i].value);
                break; 
            }
        }
        
        for(let indC = 0; indC<= 3; indC++){
            if(adicionais[indC].checked){
                Valor_Adicionais +=Number(adicionais[indC].value);           
            }
        }

        Valor_Total = Valor_Destino + Valor_Adicionais; 
        //length mede o tamanho do array
        if(Cupom_usado !="") {
            for(let indCC= 0; indCC < Cupons.length; indCC++){
                if (Cupons[indCC]==Cupom_usado) {
                    Possui_Desconto=Descontos[indCC];
                    ValorDesc = (Number(Possui_Desconto)) * Valor_Total;
                    break;
                } else {
                    contador++;
                }
            }
        }
        
        Valor_Total_Desc = Valor_Total - ValorDesc;
 // .toFixed coloca um numero fixo de caracteres após a virgula
        p_nome.innerHTML = "Nome do Cliente: " + NomeC;
        p_valorT.innerHTML = "O Valor Total foi de: R$ " + Valor_Total.toFixed(2);

        if (contador == Cupons.length) {
            p_cupomU.innerHTML = "O Cupom Usado foi: " + Cupom_usado + ", cupom inválido."
        } else {
            p_cupomU.innerHTML = "O Cupom Usado foi: " + Cupom_usado;
        }
        p_valorD.innerHTML =  "O Valor de desconto é: R$ " + ValorDesc.toFixed(2);
        p_valorP.innerHTML  =  "O Valor a Pagar é: R$ " + Valor_Total_Desc.toFixed(2);
        
    }

function imprimir(notinha) {

// Configura a ação de clique do botão para capturar a div "notinha"
    const elemento = document.getElementById('notinha');
    
    if (!elemento) {
        alert('Erro: A div com o ID "notinha" não foi encontrada nesta página.');
        return;
    }
    // PROTEÇÃO: Verifica se o script externo já foi totalmente processado pelo navegador
    if (typeof html2canvas === 'undefined') {
        alert('A biblioteca ainda está carregando. Por favor, aguarde 2 segundos e tente novamente.');
        return;
    }

    // Executa a captura da div "notinha" em alta definição
    html2canvas(elemento, {
        useCORS: true,
        scale: 3
    }).then(canvas => {
        const urlImagem = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'notinha.png';
        link.href = urlImagem;
        link.click();
    });

}

// INCORPOREI Codigo externo para transformar a notinha em uma imagem :)