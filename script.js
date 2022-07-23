# encriptador-de-texto
desafio 1 de alura latam

function encriptar() {
    
    document.getElementById('btn').addEventListener('click', function() {
        
        let input = document.getElementById('input').value;
        let result = document.getElementById('result')
        const array = ["enter", "imes", "ai", "ober", "ufat"];
        let newString;
       
        
        
        newString = input.replace(/[e]/g, array[0]).replace(/[i]/g, array[1]).replace(/[a]/g, array[2]).replace(/[o]/g, array[3]).replace(/[u]/g, array[4]);
        result.value = newString;
        copyInput(result);
        
        if (input.match(/[A-Z]/g)){
            
            result.value = "Por favor evite usar mayúsculas";
            
        }
        
        if (input.match(/[#\$\!\%\&\?\¿\¡\+\-\*\=\|]/g)){
            
            result.value = "Por favor evite los caracteres especiales solo letras minúsculas";
            
        }
        
        if (input.match(/[áéíóú]/g)){
            
           result.value = "Por favor evite letras acentuadas";
            

        }
        
        if (input.match(/[0-9]/g)){
            
           result.value = "Por favor evite usar números";  

        }
    });
};


function copyInput(valor) {
    const btnCopy = document.getElementById("btnCopy");
    
    btnCopy.addEventListener("click", function(){
        
        valor.focus();
        document.execCommand("selectAll");
        document.execCommand("copy");
    });            
};


encriptar();
function desencriptar() {
    
    document.getElementById('btn2').addEventListener('click', function() {
        
        let input = document.getElementById('input').value;
        let result = document.getElementById('result');
        let newString;
       
        
        
        newString = input.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        result.value = newString;
        copyInput(result);
        
        if (input.match(/[A-Z]/g)){
            
            result.value = "Por favor evite usar mayúsculas";
            
        }
        
        if (input.match(/[#\$\!\%\&\?\¿\¡\+\-\*\=\|]/g)){
            
            result.value = "Por favor evite los caracteres especiales solo letras minúsculas";
            
        }
        
        if (input.match(/[áéíóú]/g)){
            
           result.value = "Por favor evite letras acentuadas";
            

        }
        
       

    });
};



function copyInput(valor) {
    const btnCopy = document.getElementById("btnCopy");
    
    btnCopy.addEventListener("click", function(){
        
        valor.focus();
        document.execCommand("selectAll");
        document.execCommand("copy");
    });            
};


desencriptar();
