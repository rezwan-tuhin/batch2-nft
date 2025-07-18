'use client'
import { getMarketplaceContract } from "@/lib/getContract";
import { ethers } from "ethers";


export default function useWeb3() {

    const listNft = async(nftAddress, tokenId, price) => {
        if(!price || isNaN(price)) {
            throw new Error("Invalid price");
        }

       try {
        const contract = getMarketplaceContract(true);
        const listingPrice = await contract.listingPrice();

        const tx = await contract.createMarketItem(nftAddress, tokenId, ethers.utils.parseEther(price), {value: listingPrice});
        await tx.wait();
        alert("Listed Successfully");
       } catch (error) {
        console.error("Error listing nft", error);
       }
    }

    const buyNft = async(itemId, price) => {
        try {
            const contract = getMarketplaceContract(true);
            const tx = await contract.buyMarketItem(itemId, {value:price});
            await tx.wait();
        } catch (error) {
            console.log("Error buying nft", error);
        }
    }

    return {listNft, buyNft};
}