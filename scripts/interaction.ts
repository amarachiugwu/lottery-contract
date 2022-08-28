import {ethers} from "hardhat";

async function main() {
    const Lottery = await ethers.getContractAt("ILottery", "0x28E895C45Bf5BB7565bA75A29D36796B498Efe9A");

    // const enter = await Lottery.enter({ value: ethers.utils.parseEther("0.08") });
    // const enterReciept = await enter.wait();
    // console.log(`enter reciept : ${enterReciept}`);

    // const players = await Lottery.getPlayers();
    // console.log(`players : ${players} entered the lottery`);

    // const pickWinner = await Lottery.pickWinner();
    // console.log(`Picking a winner: ${pickWinner}`);

    // const winner = await Lottery.getWinnerByLottery();
    // console.log(`Winner : ${winner}`);


    const balance = await Lottery.getBalance();
    console.log(`contract balance : ${balance}`);


}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exitCode = 1;
})