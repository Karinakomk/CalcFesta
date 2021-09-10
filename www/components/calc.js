// This is a JavaScript file

  var refrigerante =  600;
  var agua =200;
  var bolo = 100;
  var salgado = 3;
  var doce = 10;

  function somar(){
    var pessoa = document.getElementById('display').value;
      document.getElementById('display1').value=pessoa*refrigerante+"ml";
      document.getElementById('display2').value=pessoa*agua+"ml";
      document.getElementById('display3').value=pessoa*bolo+"g";
      document.getElementById('display4').value=pessoa*salgado+"un";
      document.getElementById('display5').value=pessoa*doce+"un";
  }


