window.onload = function(){
	document.getElementById("botao").onclick = function(){
		calcular();
}}
	function calcular (){
		var elemento_plano = document.getElementById("falemais");
		var elemento_origem = document.getElementById("origem");
        var elemento_recebe = document.getElementById("recebe");
        var elemento_tempo = document.getElementById("tempo");
		var elemento_resposta = document.getElementById("txtresult");
		
		var plano = parseFloat(elemento_plano.value);
		var ddorigem = parseFloat(elemento_origem.value);
        var ddrecebe = parseFloat(elemento_recebe.value);        
        var txttempo = parseFloat(elemento_tempo.value);
        
        var msg= "";
        var msgplano="";
		var valorfinal = 0;
				
        if (ddorigem == 1 && ddrecebe == 1){            
			valorfinal = 1.90 * txttempo;            
            if(plano == 1){
              if(txttempo >= 30){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 30 )*1.90)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }else if(plano == 2){
                if(txttempo >= 60){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 60 )*1.90)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }else if(plano == 3){
                if(txttempo >= 120){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 120 )*1.90)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }
			msg = "valor por minuto: $" + valorfinal + msgplano;
			
		}else if (ddorigem == 1 && ddrecebe == 3){
			valorfinal = 1.70 * txttempo;
            if(plano == 1){
              if(txttempo >= 30){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 30 )*1.70)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }else if(plano == 2){
                if(txttempo >= 60){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 60 )*1.70)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }else if(plano == 3){
                if(txttempo >= 120){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 120 )*1.70)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }            
			msg = "valor por minuto: $" + valorfinal + msgplano;
			

		}else if (ddorigem == 1 && ddrecebe == 4){
			valorfinal = 0.90 * txttempo + msgplano;
            if(plano == 1){
              if(txttempo >= 30){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 30 )*0.90)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }else if(plano == 2){
                if(txttempo >= 60){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 60 )*0.90)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }else if(plano == 3){
                if(txttempo >= 120){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 120 )*0.90)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }
			msg = "valor por minuto: $" + valorfinal;
            
        }else if (ddorigem == 2 && ddrecebe == 2){
			valorfinal = 2.90 * txttempo + msgplano;
            if(plano == 1){
              if(txttempo >= 30){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 30 )*2.90)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }else if(plano == 2){
                if(txttempo >= 60){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 60 )*2.90)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }else if(plano == 3){
                if(txttempo >= 120){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 120 )*2.90)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }
			msg = "valor por minuto: $" + valorfinal;
            
        }else if (ddorigem == 3 && ddrecebe == 2){
			valorfinal = 2.70 * txttempo + msgplano;
            if(plano == 1){
              if(txttempo >= 30){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 30 )*2.70)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }else if(plano == 2){
                if(txttempo >= 60){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 60 )*2.70)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }else if(plano == 3){
                if(txttempo >= 120){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 120 )*2.70)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }
			msg = "valor por minuto: $" + valorfinal;
            
        }else if (ddorigem == 4 && ddrecebe == 2){
			valorfinal = 1.90 * txttempo + msgplano;
            if(plano == 1){
              if(txttempo >= 30){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 30 )*1.90)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }else if(plano == 2){
                if(txttempo >= 60){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 60 )*1.90)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }else if(plano == 3){
                if(txttempo >= 120){                  
                 msgplano = "Valor(com faleMais): $" + (((txttempo - 120 )*1.90)*1.10).toFixed(2);
               }else{
                 msgplano = "Valor(com faleMais): $" + 0;
               }
            }
			msg = "valor por minuto: $" + valorfinal + msgplano;
            
        }else{
           msg = "-"
        }
        			

		elemento_resposta.value = msg;
		
}
