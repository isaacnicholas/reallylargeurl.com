(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function makegibberish(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function numbertostring(number){
    hexString = number.toString(16);
    string = "0".repeat(3-hexString.length) + hexString
  return string;
}

function lengthen(){

    shorturl = document.getElementById('shorturl').value;
    if (shorturl.substr(0,8) != 'https://' && shorturl.substr(0,7) != 'http://'){
        shorturl = 'http://' + shorturl;
    }
    if (shorturl.length>1400){
      shorturl = shorturl.substring(0,1400);
    }
    usablelength = shorturl.length;
    key = makegibberish(32);
    numberstring = numbertostring(usablelength)
    shorturl = shorturl + makegibberish(1401-usablelength);
    shorturl = CryptoJS.AES.encrypt(shorturl, key);
    longurl = "https://reallylargeurl.com/"+key+numberstring+shorturl;
    document.getElementById('longurl').value = longurl;
}

function copy(){
  var url = document.getElementById("longurl").value;
  var copything = document.createElement('input');
  document.body.appendChild(copything);
  copything.value = url;
  copything.select();
  copything.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(copything);
}
