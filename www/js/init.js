(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs({ "swipeable": true });
  });
})(jQuery)

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    $(document).ready(function(){
        $('.collapsible').collapsible();
        matriculacionInfo();
        user();
    });  
}
function user(){
var alumne = {
    "codeInstitut": "1",
    "nameInstitut": "Esteve Terradas - Illa",
    "alumnes": {
        "alumne": {
            "name": "Carlos",
            "firstname": "Jurado Garcia",
            "code": "Alumne1",
            "edat": "22"
            }
        }
    }
    $.each(alumne['alumnes'], function( i, user){
    $('.user').first().append('<form>'+'<div class="card-panel z-depth-5">'+'<div class="col s6 m12 l12 center">'+' <img src="../img/Brook.jpg" class="responsive-img circle" style="width:200px;"><h1>Datos Alumno</h1>'+'</div>'+'<div class="">'+'<label style="font-size:15px;">Nombre: </label>'+'<span>'+ user['name']+'</span>'+'</div> '+'<div class="">'+'<label style="font-size:15px;">Apellidos: </label>'+'<span>'+user['firstname']+'</span>'+'</div>'+'<div class="">'+'<label id="edat" style="font-size:15px;">Edad: </label>'+'<span>'+user['edat']+'</span>'+'</div>'+'</div>'+'</div>'+'</div>'+'</form>');
});
}

function matriculacionInfo(){
$.each(modulos['modules'], function( i, mp){
    var horas = "horas";
    $('.collapsible').first().append('<li><div class="collapsible-header">'+mp['code']+' - '+mp['name']+'</div><div class="collapsible-body"><div class="row"></div></div></li>');
    $.each(mp['ufs'], function(x, uf){
    $('.row').last().append('<div id="uf" class="col s6"><span>'+uf['code']+' - '+uf['name']+'</span></div>');
    })
});
}
