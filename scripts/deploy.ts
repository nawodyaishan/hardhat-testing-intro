import {ethers, network} from "hardhat";

/**
 * Main async function to deploy the SimpleStorage contract.
 */
const main = async () => {
    // Creating a contract factory for the SimpleStorage contract.
    // This factory is an abstraction used to deploy new smart contracts.
    const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

    // Deploying the SimpleStorage contract.
    // This operation is asynchronous and returns a Promise.
    const simpleStorageContractInstance = await simpleStorageFactory.deploy();

    // Wait for the contract deployment to be confirmed on the network.
    // This ensures the deployment process is complete before proceeding.
    await simpleStorageContractInstance.waitForDeployment();

    // Logging the address to which the SimpleStorage contract was deployed.
    // This address is used to interact with the contract in the future.
    console.log(
        `SimpleStorage deployed to ${await simpleStorageContractInstance.getAddress()} on network: ${network.name}`
    );
};

// and properly handle errors.
main().catch((error) => {
    console.error("Error encountered during contract deployment:", error);
    process.exitCode = 1;
});
