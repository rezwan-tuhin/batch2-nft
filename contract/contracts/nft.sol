//SPDX-License-Identifier:MIT
pragma solidity ^0.8.28;


import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage {
    uint256 private _tokenIds;
    address marketplaceAddress;

    constructor (address _marketPlaceAddress) ERC721('NonAcademy','NA') {
        marketplaceAddress = _marketPlaceAddress;
    }


    function createToken(string memory tokenURI) public returns(uint256) {
        _tokenIds++;
        uint256 newItemId = _tokenIds;

        _mint(msg.sender, newItemId);

        _setTokenURI(newItemId, tokenURI);

        approve(marketplaceAddress, newItemId);

        return newItemId;

    }

    
}