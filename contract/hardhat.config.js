require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: 'rpc',
      accounts: [''],
    },
  }
};


//marketplace address: 0x2fcdbe7b0c828289ce7cfeca0f0590e076a2d86d
//NFT address:  0x0627aedbc2ee29040f81562c3fdbe9161c62c828