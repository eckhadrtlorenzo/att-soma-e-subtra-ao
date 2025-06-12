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