var loteria = 0
var array = new Array()
function ordernar(a, b){
    return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
}



function geraAposta(jogo){
    switch(jogo) {

        case "mega":
            while(array.length < 6){
             var x = Math.floor((Math.random() * 60) + 1);
             var exist = array.indexOf(x) >= 0;
                if (!exist) {
                    array.push(x);
                }

              loteria++
            }

            loteria = 0
            array.sort(ordernar)

            for(var i = 0; i < array.length;i++){
                var resultado = array.toString().replace(/,/g, " "); 
                document.getElementById("res").innerHTML = resultado
            }
            array = new Array()
            break;

        case "facil":

            while(array.length < 15){
                var x = Math.floor((Math.random() * 25) + 1);
                var exist = array.indexOf(x) >= 0;
                if (!exist) {
                    array.push(x);
                }

                loteria++
            }

            loteria = 0
            array.sort(ordernar)

            for(var i = 0; i < array.length;i++){
                var resultado = array.toString().replace(/,/g, " "); 
                document.getElementById("res").innerHTML = resultado
            }
            array = new Array()
            break;

        case "quina":

            while(array.length < 5){
                var x = Math.floor((Math.random() * 80) + 1);
                var exist = array.indexOf(x) >= 0;
                if (!exist) {
                    array.push(x);
                }

                loteria++
            }

            loteria = 0
            array.sort(ordernar)

            for(var i = 0; i < array.length;i++){
                var resultado = array.toString().replace(/,/g, " "); 
                document.getElementById("res").innerHTML = resultado
            }
            array = new Array()
            break;

       case "mania":
       
            while(array.length < 50){
                var x = Math.floor((Math.random() * 100) + 1);
                var exist = array.indexOf(x) >= 0;
                if (!exist) {
                    array.push(x);
                }

                loteria++
            }

            loteria = 0
            array.sort(ordernar)

            for(var i = 0; i < array.length;i++){
                var resultado = array.toString().replace(/,/g, " "); 
                document.getElementById("res").innerHTML = resultado
            }
            array = new Array()
            break; 

        default:
            console.log("JOGO NÃO EXISTE")
    }
}