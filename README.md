# nft_demo
NFT project written in solidity 


# NFT-s
![An Image of NFT's](nft_logo.jpg)

--------------------------
### Making NFT's using Solidity

This project creates a smart contract and then deploys it to Rinkeby public testnet. NFT's can then be minted by sending transaction to the deployed smart contract.


Dependencies:
* NodeJS
* https://nodejs.org/en/download/
* Ganache UI
* https://www.trufflesuite.com/ganache
(Ganache UI is not required in case you want to work with ganache-cli)
--------------------------
Usage:
Clone the repo and run npm install.
git clone https://github.com/neha01/nft-demo.git && cd nft-demo && npm install

Put image file that you want to convert into an NFT under assets folder.

Create a account in Pinata (https://www.pinata.cloud/) and create an API Key.
Click on top right profile picture -> API Keys -> New Key
Note down The API Key and API Key Secret and update in .env file.

* Update the name of your image file in assets folder.
* Update filePath with your image filepath.
* Run node scripts/runScript command.
* This will call Pinata API's and will upload file to IPFS and a new file will be created in data folder ipfsHash.json and the Pinata response containing the ipfsHash will be populated in that file.

* Now create a metadata.json file with the details about your NFT. For Reference checkout data/metadata.json file . Update filePath with your metadata filepath. Again Run node scripts/runScript command. This will call Pinata API's and will upload metadata file to IPFS and the Pinata response containing the ipfsHash will be again populated in ipfsHash.json file.

* Install latest solidity version by running npm install solc and Dont forget to update this solidity version in truffle-config.

* Update Rinkeby test network details in truffle-config.js .
* Update your account mnemonic in .env file.
* Now run truffle console --network rinkeby to connect to Rinkeby Public test network.
* Run migrate command to deploy the contract on Rinkeby testnet.
* Run let art = await ArtCollectible.deployed().
* Run await art.claimItem('https://gateway.pinata.cloud/ipfs/QmfUULbuetexj4dXkMbx7ErgfGqoNFxc2bHjf4E4AAKWAM')
* Pass the correct metadata file IPFS address to claimItem.
* Run art.address to get contract address.

NFT Image to IPFS Cloud: https://gateway.pinata.cloud/ipfs/QmfUULbuetexj4dXkMbx7ErgfGqoNFxc2bHjf4E4AAKWAM
