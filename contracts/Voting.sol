// contracts/Voting.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    address private _manager;
    address[] private _voters;

    constructor() {
        _manager = msg.sender;
    }

    function addVoter(address _voter) public {
        _voters.push(_voter);
    }

    function getManager() public view returns (address) {
        return _manager;
    }

    function getVoters() public view returns (address[] memory) {
        return _voters;
    }
}
