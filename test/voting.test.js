const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Voting Contract', function () {
	it('should deploy the contract return the manager and voters', async function () {
		const Contract = await ethers.getContractFactory('Voting');
		const contract = await Contract.deploy();

		[manager, secondPerson, thirdPerson] = await ethers.getSigners();

		await contract.deployed();

		expect(await contract.getManager()).to.equal(manager.address);

		await contract.addVoter(secondPerson.address);
		await contract.addVoter(thirdPerson.address);

		const voters = await contract.getVoters();
		expect(voters).to.deep.equal([secondPerson.address, thirdPerson.address]);
		expect(voters.length).to.equal(2);
	});
});
