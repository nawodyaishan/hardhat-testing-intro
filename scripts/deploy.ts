import {ethers} from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const string = "Hi 2024!!";

  const lockedAmount = ethers.parseEther("0.001");

  const lock = await ethers.deployContract("SimpleStorage", [string], {
    value: lockedAmount,
  });

  await lock.waitForDeployment();

  console.log(
      `Lock with ${ethers.formatEther(
          lockedAmount,
      )}ETH and unlock timestamp ${string} deployed to ${lock.target}`,
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
