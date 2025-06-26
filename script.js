function soma(){
  let numero_um = parseInt(document.getElementById('primeiro_nmr').value);
  let numero_dois = parseInt(document.getElementById('segundo_nmr').value);
  let soma = numero_um + numero_dois;
  
document.getElementById('resultado').textContent = 'resultado: ' + soma;

}
function subtrair(){
  let numero_um = parseInt(document.getElementById('primeiro_nmr').value);
  let numero_dois = parseInt(document.getElementById('segundo_nmr').value);
  let subtraçao = numero_um - numero_dois;
  
document.getElementById('resultado').textContent = 'resultado: ' + subtraçao;
}
function multiplicar(){
  let numero_um = parseInt(document.getElementById('primeiro_nmr').value);
  let numero_dois = parseInt(document.getElementById('segundo_nmr').value);
  let multiplicar = numero_um * numero_dois;
  
document.getElementById('resultado').textContent = 'resultado: ' + multiplicar;
}
function dividir(){
  let numero_um = parseFloat(document.getElementById('primeiro_nmr').value);
  let numero_dois = parseFloat(document.getElementById('segundo_nmr').value);
 
  
  if(numero_dois == 0){
    alert("ERRO:nao é possivel dividir esse nmr por zero");
    return;
  }
   let dividir = numero_um / numero_dois;
  document.getElementById('resultado').textContent = 'resultado: ' + dividir;

 
  
}
function comparaçao(){

  let numero_um = parseInt(document.getElementById('primeiro_nmr').value);
  let numero_dois = parseInt(document.getElementById('segundo_nmr').value);

  if(numero_um > numero_dois){
     document.getElementById('resultado').textContent = "o maior é " + numero_um;
     return;
    
    }else if(numero_um < numero_dois){
       document.getElementById('resultado').textContent = "o maior é" + numero_dois;
       return;
     
      }else{
       document.getElementById('resultado').textContent = "sao iguais";
       
    
  
}
}
