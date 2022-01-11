const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Box Contract', function () {
	it('Should return store 10 and return the new value', async function () {
		const Box = await ethers.getContractFactory('Box');
		const box = await Box.deploy();

		await box.deployed();

		await box.store(10);

		expect(await box.retrieve()).to.equal(10);
	});
});
