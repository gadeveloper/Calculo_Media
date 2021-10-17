let datostotal = [];

function calculoMedia(datostotal){
    console.log(datostotal);
    let sum = 0
    let media=0
    datostotal.forEach(function(datostotali){
        sum+= parseInt(datostotali)
    });
    
    media=sum/datostotal.length;
    console.log(media);
    document.getElementById("mediaValue").innerText="La media es: "+media
    document.getElementById("InputValue").value=""
}

function botonMedia(){
    const input1 = document.getElementById("InputValue").value
    const inputDatos = document.getElementById("datos").value
    if(input1!=""){
        if(inputDatos==""){
            document.getElementById("datos").value=input1;
        }else{
            document.getElementById("datos").value=inputDatos+", "+input1;
        }
        datostotal.push(input1);
        calculoMedia(datostotal)
    }else{
        alert("Campo debe ser numerico")
    }
 }