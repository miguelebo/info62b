// Confirm
let button=document.querySelector("#btn");
button.onclick=function(){

//Variaveis
    let tempCel;
    let tempFar;
    let tempKel;
    let tempRan;

        let tempInicial=parseInt(document.querySelector("#temp").value);
        let opt=parseInt(document.querySelector("#opt").value); 
        let celsius=document.querySelector("#Cel");
        let fahrenheit=document.querySelector("#Far");
        let kelvin=document.querySelector("#Kel");
        let rankine=document.querySelector("#Ran");

        let entrada=document.querySelector("#temp");
        entrada.value="";
//equações
                if(opt==0)
    {
        tempCel=tempInicial;
            }else
                if(opt==1)
    {
        tempFar=tempInicial;

        tempCel=(tempFar-32)*5/9;
            }else
                if(opt==2)
    {
        tempKel=tempInicial;

        tempCel=tempKel-273;
            }else
                if(opt==3)
    {
        tempRan=tempInicial;

        tempCel=(tempRan-491.67)*5/9;
    }

    tempFar=(tempCel*9/5)+32;
    tempKel=tempCel+273;
    tempRan=tempCel*9/5+491.67;
//temperaturasa
    celsius.innerHTML=tempCel.toFixed(2)+" ºC";
    celsius.style.display="inline";
    
    fahrenheit.innerHTML=tempFar.toFixed(2)+" ºF";
    fahrenheit.style.display="inline";

    kelvin.innerHTML=tempKel.toFixed(2)+" K";
    kelvin.style.display="inline";

    rankine.innerHTML=tempRan.toFixed(2)+" ºRa";
    rankine.style.display="inline";

    return false;
}