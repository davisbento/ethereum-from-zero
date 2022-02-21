import { ethers } from 'hardhat';
import { expect } from 'chai';

describe('Box Contract', function () {
	it('Should return store 10 and return the new value', async function () {
		const Contract = await ethers.getContractFactory('Box');
		const contract = await Contract.deploy();
		await contract.deployed();

		await contract.store(10);

		expect(await contract.retrieve()).to.equal(10);
	});
});
