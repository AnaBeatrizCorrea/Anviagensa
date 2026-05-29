    //botao e entrada de funçao
    let btnCalcular = document.getElementById(Calcular);
        btnCalcular.addEventListener('click', clique);
    
    function clique(){

        let destino=[Number(document.getElementById("Floresta").value),
        Number(document.getElementById("Lencois").value),
        Number(document.getElementById("Pantanal").value),
        Number(document.getElementById("Cataratas").value),
        Number(document.getElementById("Chapada").value),
        Number(document.getElementById("Bonito").value)
        ];

        let adicionais=[Number(document.getElementById("Refeicoes").value),
        Number(document.getElementById("Guia").value),
        Number(document.getElementById("Cesta").value),
        Number(document.getElementById("Festa").value)        
        ];

        // entradas

        let NomeC= document.getElementById("Nome").value;
        let Cupom_usado;
        let Cupons=["BRASIL20", "CUPONZ10", "MPBE10", "ULTIMO05"];
        let Possui_Desconto;
        let Descontos=[0.2, 0.1, 0.1, 0.5];
        let ValorDesc = 0;
        let Valor_Total=0;
        let Valor_Destino=0;
        let Valor_Total_Desc=0;
        let Valor_Adicionais=0;
        let contador=0;

        // saidas

        let p_nome = document.getElementById(Nome-Cliente);
        let p_valorT = document.getElementById(Valor-Total);
        let p_cupomU = document.getElementById(Cupom-usado);
        let p_valorD= document.getElementById(Valor-Desconto);       
        let p_valorP= document.getElementById(Valor-Pagar);
        
        for(let i = 0; i<= 5; i++){
            if(destino[i]){
                Valor_Destino=destino[i];
                break; 
            }
        }
        
        for(let indC = 0; indC<= 3; indC++){
            if(adicionais[indC]){
                Valor_Adicionais =adicionais[indC];           
            }
        }

        Valor_Total = Valor_Destino + Valor_Adicionais; 
        
        for(let indCC= 0; indCC <= 3; indCC++){
            if (Cupons[indCC]) {
                Cupom_usado =Cupons[indCC];
                Possui_Desconto=Descontos[indCC];
                ValorDesc = (Number(Possui_Desconto)) * Valor_Total;
                break;
            } else {
                contador++;
            }
        }
        Valor_Total_Desc = Valor_Total - ValorDesc;

        p_nome.innerText = "Nome do Cliente: " + NomeC;
        p_valorT.innerText = "O Valor Total foi de: " + Valor_Total;

        if (contador == 3) {
        p_cupomU.innerText = "O Cupom Usado foi:" + Cupom_usado + ", cupom inválido."  
        }

        p_cupomU.innerText = "O Cupom Usado foi:" + Cupom_usado;
        p_valorD.innerText =  "O Valor de desconto é: " + ValorDesc;
        p_valorP.innerText =  "O Valor a Pagar é: " + Valor_Total_Desc;

    }         

