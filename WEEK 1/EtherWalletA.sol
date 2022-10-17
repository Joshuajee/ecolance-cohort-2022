//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract Etherwallet {


    address payable public owner;

    mapping(address => uint256) private s_deposit;

    constructor() {
        owner = payable(msg.sender);
    }

    function deposit() public payable {
        require(msg.value > 0, "Value must be greater than 0");
        s_deposit[msg.sender] += msg.value;
    }

    function withdrawEther(uint _amount) public { 
        require(msg.sender == owner, "Caller is not Owner");
        payable(msg.sender).transfer(_amount);
    }
    
    function withdrawDeposit() public {

        address sender = payable(msg.sender);

        uint256 amount = s_deposit[sender];

        (bool success, ) = sender.call{value:  amount}("Withdrawal");

        require(success, "Withdrawal Failed");

        s_deposit[sender] = 0;
    }

    function getDeposit() public view returns (uint256) {
        return s_deposit[msg.sender];
    }

    function getbalance() public view returns(uint) {
        return address(this).balance;
    }

}