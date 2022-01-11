# Getting started with Solidity and Hardhat

- Start the project with hardhat bootstrap

```
npx hardhat
```

- If you want to compile the contracts

```
npx compile
```

- Run tests files

```
npx test
```

- Configure the hard.config.js file to generate random accounts addresses

```
require('@nomiclabs/hardhat-waffle');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: '0.8.4'
};

```
