// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

/**
 * @title Simple Storage Contract
 * @dev A basic contract to store and retrieve a message.
 * This contract demonstrates a simple contract for storing a single string in the blockchain.
 * The stored string is kept in a private state variable and can be accessed via a public function.
 */
contract SimpleStorage {
    // State variable to store a message.
    // It's marked as private, meaning it can only be accessed within this contract.
    // Note: While marked private, it is still publicly visible on the blockchain and not hidden.
    string private s_message;

    /**
     * @dev Constructor that sets the initial message.
     * The constructor is a special function that is only called once when the contract is deployed.
     * It sets the initial value of the message to "Chainlink Contract!!".
     */
    constructor() {
        s_message = "Chainlink Contract!!";
    }

    /**
     * @dev Function to retrieve the stored message.
     * This is a 'view' function, meaning it doesn't modify the contract's state,
     * thus calling it is free and doesn't consume any gas.
     * @return message - The stored message.
     */
    function getMessage() public view returns (string memory message) {
        message = s_message;
    }

    /**
     * @dev Function to update the stored message.
     * This function allows users to change the message stored in the contract.
     * @param newMessage - The new message to be stored.
     */
    function setMessage(string memory newMessage) public {
        s_message = newMessage;
    }
}
