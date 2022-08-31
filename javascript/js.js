function displayAlert(elemento_a){
    console.log(elemento_a); //desplegará el elemento completo
    var location = elemento_a.innerText;
    alert("Cargando informe meteorológico de: " + location);
}

function dismissCookie(){
    var cookieElement = document.querySelector('.cookier')
    cookieElement.remove(); //para eliminarlo por completo
}

function changeTemperature(elemento_select){
    var fOc = elemento_select.value;
    console.log(fOc);

    for(i = 1; i <=8 ; i++ ){
        var elemento_temp = document.querySelector('#temp'+ i);
        var temperatura = elemento_temp.innerText;
        temperatura = parseInt(temperatura); //transforma el texto a numero entero
        console.log(temperatura);
        var new_temp= 0;

        if (fOc === "C"){
            new_temp = Math.round((temperatura -32) * 5 / 9);
        }else{
            new_temp = Math.round((temperatura * 9/5) + 32);
        }
        elemento_temp.innerText = new_temp;
    }
    
}