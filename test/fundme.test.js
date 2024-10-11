const {ethers} = require("hardhat")
const { assert, expect } = require("chai")
const helpers = require("@nomicfoundation/hardhat-network-helpers")
const {devlopmentChains} = require("../helper-hardhat-config")
!devlopmentChains ? describe.skip : 
describe("test fundme contract",async function(){
    let fundMe
    let fundMeSecondAccount
    let firstAccount
    let secondAccount
    let mockV3Aggregator
    beforeEach(async function(){
        await deployments.fixture(["all"])
        firstAccount = (await getNamedAccounts()).firstAccount
        secondAccount = (await getNamedAccounts()).secondAccount
        const fundMeDeployment = await deployments.get("FundMe")
        mockV3Aggregator = await deployments.get("MockV3Aggregator")
        fundMe = await ethers.getContractAt("FundMe", fundMeDeployment.address)
        fundMeSecondAccount = await ethers.getContract("FundMe", secondAccount)
    })

    it("test if the owner is msg.sender", async function() {
        await fundMe.waitForDeployment()
        assert.equal((await fundMe.owner()), firstAccount)
    })

    it("test if the datafeed is assigned correctly", async function() {
        await fundMe.waitForDeployment()
        assert.equal((await fundMe.dataFeed()), mockV3Aggregator.address)
    })
    
})