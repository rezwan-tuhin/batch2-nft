'use client'
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useMemo } from "react";

export default function useWallet() {

    const [currentAccount, setCurrentAccount] = useState(null);

    const checkWalletConnected = async() => {
        if(!window.ethereum) return alert("Please install metamask");

        try{
            const accounts = await window.ethereum.request({
                method: 'eth_accounts',
            });

            if(accounts.length > 0) {
                setCurrentAccount(accounts[0]);
            }else{
                console.log("No accounts found");
            }
        }catch(error) {
            console.error("error checking wallet connection", error)
        }
    }

    const connectWallet = async() => {
        if(!window.ethereum) return alert("Please install metamask");
        
        try {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });

            if(accounts.length > 0) {
                setCurrentAccount(accounts[0]);
            }else{
                console.log("No accounts found");
            }
        } catch (error) {
            console.error("Error connecting wallet", error)
        }
    }


    useEffect(() => {
        checkWalletConnected();

        const handleAccountChange = (accounts) => {
            if(accounts.length > 0) {
                setCurrentAccount(accounts[0]);
            }else{
                setCurrentAccount('');
            }
        }

        if(window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountChange);
        }

        return() => {
            window.ethereum.off('accountsChanged', handleAccountChange);
        }

    },[]);


    const wallet = useMemo(() => ({ currentAccount, connectWallet }), [currentAccount]);
    return wallet;

    // return {currentAccount, connectWallet}
}