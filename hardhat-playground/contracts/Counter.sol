// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Counter {
    uint public count;

    event CountUpdate(uint count, uint when);

    constructor() {
        count = 0;
    }

    function increaseCount() public {
        count += 1;
        emit CountUpdate(count, block.timestamp);
    }

    function decreaseCount() public {
        require(count > 0, "Count can't be less then a zero");
        count -= 1;
        emit CountUpdate(count, block.timestamp);
    }
}
