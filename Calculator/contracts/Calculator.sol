// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Calculator {

    function add(uint256 x, uint256 y) public pure returns (uint256) {
        return x + y;
    }

    function substraction(uint256 x, uint256 y) public pure returns (uint256) {
        return x > y ? x - y : y - x;
    }

    function multiplication(uint256 x, uint256 y) public pure returns (uint256) {
        return x * y;
    }

    function division(uint256 x, uint256 y) public pure returns (uint256) {
        return x / y;
    }
  
}
