# Getting started with Solidity and Hardhat

- Start the project with hardhat bootstrap

```
npx hardhat
```

## Creating new contracts

- You can create new contracts under /contracts

- If you want to compile the contracts

## Compiling

```
npx compile
```

## Running tests

1. Configure the hard.config.js file to generate random accounts addresses

```
require('@nomiclabs/hardhat-waffle');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: '0.8.4'
};
```

2. Create new tests files under /test with [contract-name].test.js filename

3. Running tests

```
npx hardhat test
```

- Or with yarn

```
yarn test
```
