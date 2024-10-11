
const {getNameAccounts} = require("hardhat");


module.exports = async ({getNameAccounts,deployments})=>{
    const firstAccount = (await getNameAccounts()).firstAccount
    console.log(`first account is ${firstAccount}`)

}

