const hre = require("hardhat");

async function main() {
  const Web4Asset = await hre.ethers.getContractFactory("Web4Asset");
  const contract = await Web4Asset.deploy("https://yourdomain.com/metadata/");
  await contract.deployed();
  console.log("Web4Asset deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
