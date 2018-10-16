var CryptoJS = require("crypto-js");
var hashsecret = CryptoJS.SHA256("secret").toString(CryptoJS.enc.Base64);


var write = (message) => {
    var encrypted = encrypt(message);
    var hmac = signMessage(encrypted);
    return {hmac:hmac, encrypted:encrypted};       
};
var encrypt = (message) => {
    return CryptoJS.AES.encrypt(message, hashsecret).toString();
};
var decrypt = (emessage) => {
    return CryptoJS.AES.decrypt(emessage, hashsecret).toString(CryptoJS.enc.Utf8);
};
var signMessage = (encrypted) =>{
    return CryptoJS.HmacSHA256(encrypted, hashsecret).toString(CryptoJS.enc.utf8);
};
var validateMessage = (signedToken) => {
    // complete the part below
    var hmac = signedToken.hmac;  // jrw extract hmac
    var encrypted = signedToken.encrypted;
    var decryptedhmac = signMessage(encrypted);
    
    // return decrypted message if signatures match !!!
    if(decryptedhmac === hmac) return decrypt(encrypted); // strong check on hmac
    else return "error";
};

var message = "hello world";
var signed = write(message);
console.log(JSON.stringify(signed)+"\n");
console.log('validated = '+validateMessage(signed));

