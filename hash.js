var CryptoJS = require("crypto-js");

var generateNextBlock = (blockData) => {
    var previousHash = 0, nextIndex = 1;
    var nextTimestamp = new Date().getTime() / 1000;
    var nextHash = calculateHash(nextIndex, previousHash, nextTimestamp, blockData);
    return {hash:nextHash,time:nextTimestamp};
};

var calculateHash = (index, previousHash, timestamp, data) => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
}
console.log(JSON.stringify(generateNextBlock({data:"some data"})));
