const {ethers} = require("hardhat")
const { assert, expect } = require("chai")
describe("test fundme contract",async function(){
    let fristAccount
    let fundMe
    beforeEach(async function(){
        fristAccount = (await ethers.getSigners())[0];
        const fundMeFactory = await ethers.getContractFactory("FundMe")
        fundMe = await fundMeFactory.deploy(180)
    })
    it("test if owner is msg.sender",async function(){
        await fundMe.waitForDeployment()
        assert(fristAccount,(await fundMe.owner()))
    })
    it ("test if the datafeed is assigned correctly",async function(){
        await fundMe.waitForDeployment()
        //const dataFeed = await fundMe.dataFeed()
       // console.log(`the datafeed is ${dataFeed}`)
        assert.equal((await fundMe.dataFeed()), "0x694AA1769357215DE4FAC081bf1f309aDC325306")
    })
})