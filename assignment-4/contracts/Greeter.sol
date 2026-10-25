
 // SPDX-License-Identifier: MIT
pragma solidity 0.8.34;

contract Greeter {
    string private greeting;

    constructor(string memory _name) {
        greeting = string.concat("Hello, ", _name, "!");
    }

    function greet() public view returns (string memory) {
        return greeting;
    }
}
