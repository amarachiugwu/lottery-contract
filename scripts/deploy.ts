import { ethers } from "hardhat";

async function main() {
  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy();

  await lottery.deployed();

  console.log(`Lottery contract deployed at rinkeby : ${lottery.address}`);

  // deployed rinkeby contract address : 0x28E895C45Bf5BB7565bA75A29D36796B498Efe9A
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
