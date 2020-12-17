const AggregatorMock = artifacts.require("AggregatorMock");
const OptionsExchange = artifacts.require("OptionsExchange");

module.exports = function(deployer) {
  deployer.deploy(AggregatorMock)
	.then(() =>
  deployer.deploy(OptionsExchange, AggregatorMock.address));
};