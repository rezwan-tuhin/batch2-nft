const hre = require('hardhat');


async function main(){
    const Marketplace = await hre.ethers.getContractFactory('Marketplace');
    const marketPlace = await Marketplace.deploy();

    await marketPlace.waitForDeployment();

    const Nft = await hre.ethers.getContractFactory('NFT');

    console.log("Marketplace deployed to: ", await marketPlace.getAddress());

    const nft = await Nft.deploy(await marketPlace.getAddress());

    await nft.waitForDeployment();

    console.log("NFT deployed to: ", await nft.getAddress())

}

main().then(()=>process.exit(0)).catch((err)=>{
    console.error("Error deploying contracts", err);
    process.exit(1);
})