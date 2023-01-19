const hre = require("hardhat");

async function main() {
  
  let contractAddressToExecute = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

  let mainContract = await hre.ethers.getContractFactory("Sample");
  let deployedContract = await mainContract.deploy(); 

  await deployedContract.deployed(); 

  console.log(`Deployed contract Address: ${deployedContract.address}`); 

  const response = await deployedContract.accessExternalContract(contractAddressToExecute);

  console.log(`response: ${response}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
