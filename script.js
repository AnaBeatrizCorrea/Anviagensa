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

    let NomeC= document.getElementById("Nome").value;
    let Cupom_usado;
    let Cupons=["BRASIL20", "CUPONZ10", "MPBE10", "ULTIMO05"];
    let Possui_Desconto;
    let Descontos=[0.2, 0.1, 0.1, 0.5];
    let ValorDesc;
    let Valor_Total;
    let Valor_Total_Desc;

    for(let i = 0; i<= 5; i++){
        if(destino[i]){
            let valorNumerico=destino[i];
            break; 
        }
    }
    
    for(let indC = 0; indC<= 3; indC++){
        if(adicionais[indC]){
            let valorNumerico_Adicionais =adicionais[indC];           
        }
    }

    for(let indCC= 0; indCC <= 3; indCC++){
        if(Cupons[indCC]){
            Cupom_usado =Cupons[indCC];
            Possui_Desconto=Descontos[indCC];
            ValorDesc=(Number(Possui_Desconto))*Valor_Total
            break;
        }
    }
    
    "Valor-Total"
    "Cupom-usado"
    "Valor-Desconto"         
    "Valor-Pagar"

}

