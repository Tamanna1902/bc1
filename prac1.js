const prompt = require("prompt-sync")();
const BlockChain = require("./Blockchain1");
var bitcoin = new BlockChain();
bitcoin.createNewBlock(123, "genesis", "block1");
var nonce;
var hash;
var phash;
for (var i = 0; i < 3; i++) {
  nonce = prompt("Enter nonce: ");
  hash = prompt("Enter hash: ");
  phash = bitcoin.previousBlockHash();
  bitcoin.createNewBlock(nonce, phash, hash);
}
console.log(bitcoin);
