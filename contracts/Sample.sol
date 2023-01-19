//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

interface Contract {
    function attempt() external;
}

contract Sample {
    uint public counter; 

    event Redirect(address, address);

    constructor() {
        counter = 0; 
    }

    function accessExternalContract(address contractAddress) external {
        Contract(contractAddress).attempt();
        counter++; 
        emit Redirect(msg.sender, contractAddress);
    }

}