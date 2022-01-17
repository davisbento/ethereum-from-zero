// contracts/Lottery.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lottery {
    address private _manager;
    address payable[] private _players;

    constructor() {
        _manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > .01 ether);

        _players.push(payable(msg.sender));
    }

    function getManager() public view returns (address) {
        return _manager;
    }

    function random() private view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        block.difficulty,
                        block.timestamp,
                        _players
                    )
                )
            );
    }

    function pickWinner() public restricted {
        uint256 index = random() % _players.length;
        _players[index].transfer(address(this).balance);
        _players = new address payable[](0);
    }

    modifier restricted() {
        require(msg.sender == _manager);
        _;
    }

    function getPlayers() public view returns (address payable[] memory) {
        return _players;
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
