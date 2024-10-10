npm init
npm install hardhat --save-dev

npx hardhat

git init 
git add .
git status
git commit -m 'project init'

git remote add origin https://github.com/jiasenwqbr/web3_tutorial.git
git branch -M main
git push -u origin main

npm install @chainlink/contracts
npm uninstall @chainlink/contracts
npm install @chainlink/contracts --save-dev


Compiling your contracts
npx hardhat compile

Testing your contracts
npx hardhat test


npx hardhat run .\scripts\deployFundMe.js
```bash
contract deploying
contract has been deployed successfully, contract address is 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

npx hardhat run .\scripts\deployFundMe.js --network sepolia
```bash
contract deploying
contract has been deployed successfully, contract address is 0xa5808eA06f5CA32d5b6C3f9Ee4f1eb0107e77f5d
```


npm install --save-dev dotenv

创建.env

npm install --save-dev @chainlink/env-enc
对关键信息进行加密

npx env-enc set

verify
npx hardhat verify --network sepolia 0xa5808eA06f5CA32d5b6C3f9Ee4f1eb0107e77f5d "300"

```bash
[INFO] Sourcify Verification Skipped: Sourcify verification is currently disabled. To enable it, add the following entry to your Hardhat configuration:

sourcify: {
  enabled: true
}

Or set 'enabled' to false to hide this message.

For more information, visit https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify#verifying-on-sourcify
Successfully submitted source code for contract
contracts/FundMe.sol:FundMe at 0xa5808eA06f5CA32d5b6C3f9Ee4f1eb0107e77f5d
for verification on the block explorer. Waiting for verification result...

Successfully verified contract FundMe on the block explorer.
https://sepolia.etherscan.io/address/0xa5808eA06f5CA32d5b6C3f9Ee4f1eb0107e77f5d#code
```
https://sepolia.etherscan.io/address/0xa5808eA06f5CA32d5b6C3f9Ee4f1eb0107e77f5d#code









