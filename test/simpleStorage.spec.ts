import {ethers} from "hardhat";
import {expect} from "chai";

describe("👷🏽‍♂️ - SimpleStorage Unit Testing", () => {
    // Constant for the default message in the contract.
    const DEFAULT_MSG = "Chainlink Contract!!";

    // Fixture function for deploying the SimpleStorage contract.
    // This setup will be reused across tests to ensure consistency.
    const deploySimpleStorageFixture = async () => {
        // Get signers. The first signer is usually the deployer.
        const [owner, otherAccount] = await ethers.getSigners();

        // Deploy the SimpleStorage contract using the ContractFactory.
        const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        const simpleStorage = await simpleStorageFactory.deploy();

        return {simpleStorage, owner, otherAccount};
    };

    describe("Deployment", () => {
        // Test to check if the contract is deployed with the default message.
        it("Should set message to 'Chainlink Contract!!'", async () => {
            const {simpleStorage} = await deploySimpleStorageFixture();
            const actualMsg = await simpleStorage.getMessage();
            expect(actualMsg).to.equal(DEFAULT_MSG);
        });

        // Test to check the setMessage functionality.
        it("Should set message to new message", async () => {
            const {simpleStorage} = await deploySimpleStorageFixture();
            const newMessage = "New Message";
            await simpleStorage.setMessage(newMessage);
            const actualMsg = await simpleStorage.getMessage();
            expect(actualMsg).to.equal(newMessage);
        });
    });

    describe("Failures", () => {
        // Test to ensure that only the owner can set a new message.
        it("Should revert if caller is not the owner when setting message", async () => {
            const {simpleStorage, otherAccount} = await deploySimpleStorageFixture();
            const invalidMessage = "Invalid Message";
            await expect(simpleStorage.connect(otherAccount).setMessage(invalidMessage))
                .to.be.revertedWith("Caller is not the owner");
            const actualMsg = await simpleStorage.getMessage();
            expect(actualMsg).to.equal(DEFAULT_MSG);
        });

        // Test to ensure that setting an empty message is reverted.
        it("Should revert when setting an empty string as the message", async () => {
            const {simpleStorage, owner} = await deploySimpleStorageFixture();
            const emptyMessage = "";
            await expect(simpleStorage.setMessage(emptyMessage))
                .to.be.revertedWith("Empty strings are not allowed");
            const actualMsg = await simpleStorage.getMessage();
            expect(actualMsg).to.equal(DEFAULT_MSG);
        });
    });
});
