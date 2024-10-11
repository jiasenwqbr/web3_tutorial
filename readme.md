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


task
npx hardhat
```bash
Hardhat version 2.22.13

Usage: hardhat [GLOBAL OPTIONS] [SCOPE] <TASK> [TASK OPTIONS]

GLOBAL OPTIONS:

  --config              A Hardhat config file.
  --emoji               Use emoji in messages.
  --flamegraph          Generate a flamegraph of your Hardhat tasks
  --help                Shows this message, or a task's help if its name is provided
  --max-memory          The maximum amount of memory that Hardhat can use.
  --network             The network to connect to.
  --show-stack-traces   Show stack traces (always enabled on CI servers).
  --tsconfig            A TypeScript config file.
  --typecheck           Enable TypeScript type-checking of your scripts/tests
  --verbose             Enables Hardhat verbose logging
  --version             Shows hardhat's version.


AVAILABLE TASKS:

  check                 Check whatever you need
  clean                 Clears the cache and deletes all artifacts
  compile               Compiles the entire project, building all artifacts
  console               Opens a hardhat console
  coverage              Generates a code coverage report for tests
  deploy-fundme         deploy and verify fundme conract
  flatten               Flattens and prints contracts and their dependencies. If no file is passed, all the contracts in the project will be flattened.
  gas-reporter:merge
  help                  Prints this message
  interact-fundme       interact with fundme contract
  node                  Starts a JSON-RPC server on top of Hardhat Network
  run                   Runs a user-defined script after compiling the project
  test                  Runs mocha tests
  typechain             Generate Typechain typings for compiled contracts
  verify                Verifies a contract on Etherscan or Sourcify


AVAILABLE TASK SCOPES:

  ignition              Deploy your smart contracts using Hardhat Ignition
  vars                  Manage your configuration variables

To get help for a specific task run: npx hardhat help [SCOPE] <TASK>
```

npx hardhat deploy-fundme --network sepolia

npx hardhat interact-fundme --addr 0xa5808eA06f5CA32d5b6C3f9Ee4f1eb0107e77f5d --network sepolia



npm install -D hardhat-deploy