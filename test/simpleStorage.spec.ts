import {ethers} from "hardhat";
import {expect} from "chai";

describe("👷🏽‍♂️ - SimpleStorage Unit Testing", () => {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    const deployOneYearLockFixture = async () => {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();
        const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        const simpleStorage = await simpleStorageFactory.deploy();

        return {simpleStorage, owner, otherAccount};
    }

    describe("Deployment", async () => {
        it("Should set message to 'Chainlink Contract!!'", async () => {
            const {simpleStorage, owner, otherAccount} = await deployOneYearLockFixture();
            console.log("🎖️ - SimpleStorage ", simpleStorage)
            const expectedMsg: string = "Chainlink Contract!!"
            const actualMsg = await simpleStorage.getMessage();
            expect(actualMsg).to.be.equal(expectedMsg);
        })
    });

    describe("Withdrawals", () => {

    });
});
