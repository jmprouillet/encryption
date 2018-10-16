var CryptoJS = require("crypto-js");
var hashsecret = CryptoJS.SHA256("secret").toString(CryptoJS.enc.Base64);


var encrypt = (message) => {
    return CryptoJS.AES.encrypt(message, hashsecret).toString();
};
var decrypt = (emessage) => {
    return CryptoJS.AES.decrypt(emessage, hashsecret).toString(CryptoJS.enc.Utf8);
};
var signMessage = (encrypted) =>{
    return CryptoJS.HmacSHA256(encrypted, hashsecret).toString(CryptoJS.enc.utf8);
};
var message = "hello world";
var emessage = "U2FsdGVkX1+QYquCas81IWWCC95KAjd/yE+UJLFhXvI=";
console.log(decrypt(emessage));
console.log(signMessage(emessage));
