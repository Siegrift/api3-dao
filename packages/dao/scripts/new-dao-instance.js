/*global artifacts, web3, Promise*/
// NOTE: The whole script is inspired by 'api3template.js'
const { hash: namehash } = require('eth-ens-namehash')

const { getTemplateAddress } = require('@aragon/templates-shared/lib/ens')(web3, artifacts);
const { getInstalledAppsById, getInstalledApps } = require('@aragon/templates-shared/helpers/events')(artifacts);

const Api3Voting = artifacts.require('Api3Voting');
const Api3Template = artifacts.require('Api3Template');
const Api3Pool = artifacts.require('Api3Pool');
const Agent = artifacts.require('Agent');

module.exports = async (callback) => {
  try {
    const [deployer] = await new Promise((resolve, reject) => {
      web3.eth.getAccounts((err, accounts) => {
        if (err) {
          return reject(err)
        }
        resolve(accounts)
      })
    })

    let api3Template, receipt1, api3Pool;

    const API3_POOL_ADDRESS = '0x69c40A6908Ba996A0c22110117E53e77Fde5bB75'.toLowerCase()

    const SUPPORT_1 = 80e16;
    const ACCEPTANCE_1 = 40e16;
    const VOTING_DURATION_1 = 100;

    const SUPPORT_2 = 50e16;
    const ACCEPTANCE_2 = 20e16;
    const VOTING_DURATION_2 = 60;


    console.log('1')
    console.log('1.2', await getTemplateAddress()) // TODO: fixme here
    api3Template = Api3Template.at(await getTemplateAddress());
    console.log('2')
    api3Pool = Api3Pool.at(API3_POOL_ADDRESS);
    console.log('3')
    receipt1 = await api3Template.newInstance('api3template', (api3Pool.address), [SUPPORT_1, ACCEPTANCE_1, VOTING_DURATION_1], [SUPPORT_2, ACCEPTANCE_2, VOTING_DURATION_2], { from: deployer });
    console.log('4')

    const installedApps = getInstalledAppsById(receipt1);
    const votingApps = getInstalledApps(receipt1, namehash('api3voting.aragonpm.eth'));
    const votingMain = Api3Voting.at(votingApps[0]);
    const votingSecondary = Api3Voting.at(votingApps[1]);
    const agentMain = Agent.at(installedApps.agent[0]);
    const agentSecondary = Agent.at(installedApps.agent[1]);

    console.log(JSON.stringify({
      votingPrimary: votingMain.address,
      votingSecondary: votingSecondary.address,
      agentPrimary: agentMain.address,
      agentSecondary: agentSecondary.address
    }, null, 2))
    // await api3Pool.setDaoApps(agentMain.address, agentSecondary.address, votingMain.address, votingSecondary.address);
    console.log('Do not forget to call api3Pool.setDaoApps(agentMain.address, agentSecondary.address, votingMain.address, votingSecondary.address)!!!')

  } catch (error) {
    callback(error);
  }
  callback();
};
