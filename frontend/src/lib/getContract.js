import { ethers } from "ethers";

import { marketplaceAbi, nftAbi, marketPlace_address, nft_address } from "@/constants";

export function getProviderOrSigner(needSigner = false) {
    if(typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        if(needSigner) {
            return provider.getSigner();
        }

        return provider;
    }
}

export function getNftContract(needSigner = false) {
    const providerOrSigner = getProviderOrSigner(needSigner);

    return new ethers.Contract(nft_address, nftAbi, providerOrSigner);
}

export function getMarketplaceContract(needSigner = false) {
    const providerOrSigner = getProviderOrSigner(needSigner);

    return new ethers.Contract(marketPlace_address, marketplaceAbi, providerOrSigner);
}

