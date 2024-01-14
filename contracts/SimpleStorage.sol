// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

/**
 * @title Simple Storage Contract
 * @dev This contract allows storing and retrieving a text message on the blockchain.
 * It demonstrates fundamental concepts like state variables, visibility, events, and access control.
 */
contract SimpleStorage {
    // State variable to store a message. It's private, which means it can only be
    // accessed internally within the contract. However, its value is still publicly visible.
    string private s_message;

    // Immutable public variable to store the address of the contract owner.
    // Immutable variables can be set once (in the constructor) and can't be changed afterwards.
    // This variable is public, allowing anyone to see the owner's address.
    address public immutable i_owner;

    // Event emitted when the message is changed.
    event MessageChanged(string newMessage);

    /**
     * @dev Constructor sets the initial message and the contract owner.
     * "Chainlink Contract!!" is set as the initial message.
     * The owner is set to the address deploying the contract (msg.sender).
     */
    constructor() {
        s_message = "Chainlink Contract!!";
        i_owner = msg.sender; // msg.sender is the address deploying the contract.
    }

    // Modifier to restrict function access to only the contract owner.
    modifier onlyOwner() {
        require(msg.sender == i_owner, "Caller is not the owner");
        _; // Continues execution of the modified function.
    }

    /**
     * @dev Retrieves the stored message.
     * Being a 'view' function, it doesn't modify the contract's state and doesn't consume gas when called externally.
     * @return message
    The current stored message.
    */
    function getMessage() public view returns (string memory message) {
        message = s_message;
    }

    /**
    @dev Updates the stored message.
    Allows changing the message stored in the contract. This function is not restricted and can be called by anyone.
    Emits the MessageChanged event upon successful update.
    @param newMessage - The new message to be stored. Must not be an empty string.
    */
    function setMessage(string memory newMessage) public onlyOwner {
        require(bytes(newMessage).length > 0, "Empty strings are not allowed");
        s_message = newMessage;
        emit MessageChanged(newMessage);
    }
}
