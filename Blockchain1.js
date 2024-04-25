function BlockChain() {
  this.chain = [];
  this.newTransactions = [];
}
BlockChain.prototype.createNewBlock = function (
  nonce,
  perivousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransactions,
    nonce: nonce,
    hash: hash,
    perivousBlockHash: perivousBlockHash,
  };
  this.newTransactions = [];
  this.chain.push(newBlock);
  return newBlock;
};
BlockChain.prototype.previousBlockHash = function () {
  return this.chain[this.chain.length - 1].hash;
};
module.exports = BlockChain;
