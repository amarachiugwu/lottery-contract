// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

interface ILottery {

    function enter() external payable;

    function getBalance() external view returns (uint);

    function getRandomNumber() external view returns (uint);

    function pickWinner() external;

    function getPlayers() external view returns (address payable[] memory);

    function getWinnerByLottery(uint lottery) external view returns (address payable);
}