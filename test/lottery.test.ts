import { ethers } from 'hardhat';
import { expect } from 'chai';

describe('Lottery Contract', function () {
	it('should deploy the contract, enter and get balance', async function () {
		const Contract = await ethers.getContractFactory('Lottery');
		const contract = await Contract.deploy();

		await contract.deployed();

		const [owner, ...players] = await ethers.getSigners();

		expect(await contract.getManager()).to.equal(owner.address);

		await contract.connect(players[0]).enter({
			value: ethers.utils.parseEther('1')
		});

		await contract.connect(players[1]).enter({
			value: ethers.utils.parseEther('1')
		});

		await contract.connect(players[2]).enter({
			value: ethers.utils.parseEther('1')
		});

		const balance = await contract.connect(owner).getContractBalance();

		expect(balance).to.equal(ethers.utils.parseEther('3'));
	});
});
