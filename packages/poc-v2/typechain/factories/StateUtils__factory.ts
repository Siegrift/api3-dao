/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StateUtils } from "../StateUtils";

export class StateUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(api3TokenAddress: string, overrides?: Overrides): Promise<StateUtils> {
    return super.deploy(
      api3TokenAddress,
      overrides || {}
    ) as Promise<StateUtils>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(api3TokenAddress, overrides || {});
  }
  attach(address: string): StateUtils {
    return super.attach(address) as StateUtils;
  }
  connect(signer: Signer): StateUtils__factory {
    return super.connect(signer) as StateUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StateUtils {
    return new Contract(address, _abi, signerOrProvider) as StateUtils;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "api3TokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newApr",
        type: "uint256",
      },
    ],
    name: "Epoch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toEpoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "locked",
        type: "uint256",
      },
    ],
    name: "UserUpdate",
    type: "event",
  },
  {
    inputs: [],
    name: "currentApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "genesisEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetEpoch",
        type: "uint256",
      },
    ],
    name: "getUserLocked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastEpochPaid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payOldestUnpaidReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "payReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardEpochLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardVestingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "bool",
        name: "paid",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "atBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeTarget",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unstakeWaitPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateCoeff",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetEpoch",
        type: "uint256",
      },
    ],
    name: "updateUserLocked",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "unstaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "locked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeScheduledFor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdateEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "oldestLockedEpoch",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052622625a060065563047868c06007556a084595161401484a000000600855620f424060095562093a80600a55600654600b553480156200004357600080fd5b5060405162001cdb38038062001cdb833981810160405260208110156200006957600080fd5b8101908080519060200190929190505050600260405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600360405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200018562093a80426200019360201b620012741790919060201c565b6080818152505050620002b0565b6000620001dd83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250620001e560201b60201c565b905092915050565b6000808311829062000295576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620002595780820151818401526020810190506200023c565b50505050905090810190601f168015620002875780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581620002a257fe5b049050809150509392505050565b6080516119fc620002df60003980610848528061099e528061121052806112e0528061131652506119fc6000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063784b3c5d116100a2578063a87430ba11610071578063a87430ba14610343578063b70e6be6146103be578063decac4f5146103dc578063e7460a52146103fa578063f301af421461041857610116565b8063784b3c5d146102df5780638dab995b146102fd578063917656b91461030757806392093b361461032557610116565b806341cb8c20116100e957806341cb8c20146101ee5780634eb05c47146102375780634f322ae81461025557806353a50ccd146102735780637842a3a4146102d557610116565b8063106644131461011b57806313f2dad01461013957806318dbf7331461018257806320a0a0e9146101d0575b600080fd5b61012361046a565b6040518082815260200191505060405180910390f35b6101656004803603602081101561014f57600080fd5b8101908080359060200190929190505050610470565b604051808381526020018281526020019250505060405180910390f35b6101ce6004803603604081101561019857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104a1565b005b6101d861057c565b6040518082815260200191505060405180910390f35b61021a6004803603602081101561020457600080fd5b8101908080359060200190929190505050610583565b604051808381526020018281526020019250505060405180910390f35b61023f6105b4565b6040518082815260200191505060405180910390f35b61025d6105ba565b6040518082815260200191505060405180910390f35b6102bf6004803603604081101561028957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105c0565b6040518082815260200191505060405180910390f35b6102dd610972565b005b6102e7610ddb565b6040518082815260200191505060405180910390f35b610305610de1565b005b61030f6111c6565b6040518082815260200191505060405180910390f35b61032d6111cc565b6040518082815260200191505060405180910390f35b6103856004803603602081101561035957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111d2565b60405180878152602001868152602001858152602001848152602001838152602001828152602001965050505050505060405180910390f35b6103c661120e565b6040518082815260200191505060405180910390f35b6103e4611232565b6040518082815260200191505060405180910390f35b610402611237565b6040518082815260200191505060405180910390f35b6104446004803603602081101561042e57600080fd5b810190808035906020019092919050505061123d565b604051808415158152602001838152602001828152602001935050505060405180910390f35b60095481565b6002818154811061047d57fe5b90600052602060002090600202016000915090508060000154908060010154905082565b6104a9610972565b60006104b583836105c0565b90506000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905081816002018190555061050b6112be565b81600701819055508281600601819055508373ffffffffffffffffffffffffffffffffffffffff167f6aa46aa24dd78d66eaff80fdc122ff406f1b5afe46204d8008b60282c8ec79af848360020154604051808381526020018281526020019250505060405180910390a250505050565b62093a8081565b6003818154811061059057fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60085481565b600b5481565b6000806105d962093a804261127490919063ffffffff16565b905060006105e56112be565b90506000600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160060154905083861115801561064257508086115b801561064d57508286115b6106bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f496e76616c69642074617267657400000000000000000000000000000000000081525060200191505060405180910390fd5b8281101561077d576000808490505b87811161076f57600060046000838152602001908152602001600020905060006106fd60028360020154611355565b90506000610712876001018460020154611355565b905061074f610740836107328487600101546114e790919063ffffffff16565b61127490919063ffffffff16565b8661156d90919063ffffffff16565b945050505061076860018261156d90919063ffffffff16565b90506106ce565b50809550505050505061096c565b600082600201549050600061079c60018461156d90919063ffffffff16565b90505b87811161084057600060046000838152602001908152602001600020905060006107ce60028360020154611355565b905060006107e3876001018460020154611355565b9050610820610811836108038487600101546114e790919063ffffffff16565b61127490919063ffffffff16565b8661156d90919063ffffffff16565b945050505061083960018261156d90919063ffffffff16565b905061079f565b5061087560347f000000000000000000000000000000000000000000000000000000000000000061156d90919063ffffffff16565b8710610963576000836007015490505b6108996001866115f590919063ffffffff16565b8111610961576000600460006108b96034856115f590919063ffffffff16565b8152602001908152602001600020905060006108da60028360020154611355565b905060006108ef876001018460020154611355565b9050600061091c8361090e8487600101546114e790919063ffffffff16565b61127490919063ffffffff16565b905080861161092c576000610940565b61093f81876115f590919063ffffffff16565b5b95505050505061095a60018261156d90919063ffffffff16565b9050610885565b505b80955050505050505b92915050565b600061098a62093a804261127490919063ffffffff16565b9050600060055414156109d2576109cb60017f00000000000000000000000000000000000000000000000000000000000000006115f590919063ffffffff16565b6005819055505b806005541015610dd75760006109f4600160055461156d90919063ffffffff16565b90506000610a02600361163f565b905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bbb30c5d306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610a8b57600080fd5b505afa158015610a9f573d6000803e3d6000fd5b505050506040513d6020811015610ab557600080fd5b8101908080519060200190929190505050610b8557604051806060016040528060011515815260200160008152602001438152506004600085815260200190815260200160002060008201518160000160006101000a81548160ff021916908315150217905550602082015181600101556040820151816002015590505082600581905550827fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde46000600b54604051808381526020018281526020019250505060405180910390a2505050610dd9565b5b828211610d6d57610b9681611652565b6000610bd66305f5e100610bc86034610bba600b54876114e790919063ffffffff16565b61127490919063ffffffff16565b61127490919063ffffffff16565b90506040518060600160405280600115158152602001828152602001438152506004600085815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160010155604082015181600201559050506000811115610d085760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b158015610cda57600080fd5b505af1158015610cee573d6000803e3d6000fd5b50505050610d05818361156d90919063ffffffff16565b91505b82600581905550827fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde482600b54604051808381526020018281526020019250505060405180910390a2610d6560018461156d90919063ffffffff16565b925050610b86565b610d77600361163f565b8114610dd45760036040518060400160405280438152602001838152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550505b50505b505b565b60065481565b6000610df9600160055461156d90919063ffffffff16565b9050610e1162093a804261127490919063ffffffff16565b8110610e85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f496e76616c69642074617267657400000000000000000000000000000000000081525060200191505060405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bbb30c5d306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610f0c57600080fd5b505afa158015610f20573d6000803e3d6000fd5b505050506040513d6020811015610f3657600080fd5b8101908080519060200190929190505050610f9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611978602e913960400191505060405180910390fd5b6000610fa8600361163f565b9050610fb381611652565b6000610ff36305f5e100610fe56034610fd7600b54876114e790919063ffffffff16565b61127490919063ffffffff16565b61127490919063ffffffff16565b90506040518060600160405280600115158152602001828152602001438152506004600085815260200190815260200160002060008201518160000160006101000a81548160ff021916908315150217905550602082015181600101556040820151816002015590505060008111156111785760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156110f757600080fd5b505af115801561110b573d6000803e3d6000fd5b5050505060036040518060400160405280438152602001611135848661156d90919063ffffffff16565b8152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550505b82600581905550827fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde482600b54604051808381526020018281526020019250505060405180910390a2505050565b60055481565b60075481565b60016020528060005260406000206000915090508060000154908060020154908060030154908060040154908060060154908060070154905086565b7f000000000000000000000000000000000000000000000000000000000000000081565b603481565b600a5481565b60046020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020154905083565b60006112b683836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506117f1565b905092915050565b6000806112d762093a804261127490919063ffffffff16565b905061130d60347f000000000000000000000000000000000000000000000000000000000000000061156d90919063ffffffff16565b81101561133a577f000000000000000000000000000000000000000000000000000000000000000061134f565b61134e6034826115f590919063ffffffff16565b5b91505090565b6000808380549050141561136c57600090506114e1565b82611385600185805490506115f590919063ffffffff16565b8154811061138f57fe5b90600052602060002090600202016000015482106113e357826113c0600185805490506115f590919063ffffffff16565b815481106113ca57fe5b90600052602060002090600202016001015490506114e1565b826000815481106113f057fe5b90600052602060002090600202016000015482101561141257600090506114e1565b60008061142d600186805490506115f590919063ffffffff16565b90505b818111156114be57600061147360026114656001611457878761156d90919063ffffffff16565b61156d90919063ffffffff16565b61127490919063ffffffff16565b90508486828154811061148257fe5b906000526020600020906002020160000154116114a1578092506114b8565b6114b56001826115f590919063ffffffff16565b91505b50611430565b8482815481106114ca57fe5b906000526020600020906002020160010154925050505b92915050565b6000808314156114fa5760009050611567565b600082840290508284828161150b57fe5b0414611562576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806119a66021913960400191505060405180910390fd5b809150505b92915050565b6000808284019050838110156115eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600061163783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506118b7565b905092915050565b600061164b8243611355565b9050919050565b6000600854141561166b57600654600b819055506117ee565b600060085482106116905761168b600854836115f590919063ffffffff16565b6116a6565b6116a5826008546115f590919063ffffffff16565b5b905060006116d56008546116c76305f5e100856114e790919063ffffffff16565b61127490919063ffffffff16565b90506000611703620f42406116f5600954856114e790919063ffffffff16565b61127490919063ffffffff16565b90506000600854851015611759576117526305f5e100611744611733856305f5e10061156d90919063ffffffff16565b600b546114e790919063ffffffff16565b61127490919063ffffffff16565b90506117b0565b816305f5e1001161176b5760006117ad565b6117ac6305f5e10061179e61178d856305f5e1006115f590919063ffffffff16565b600b546114e790919063ffffffff16565b61127490919063ffffffff16565b5b90505b6006548110156117c857600654600b819055506117e9565b6007548111156117e057600754600b819055506117e8565b80600b819055505b5b505050505b50565b6000808311829061189d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611862578082015181840152602081019050611847565b50505050905090810190601f16801561188f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816118a957fe5b049050809150509392505050565b6000838311158290611964576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561192957808201518184015260208101905061190e565b50505050905090810190601f1680156119565780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838503905080915050939250505056fe4d696e74696e6720746f207468697320636f6e74726163742069732063757272656e746c792064697361626c6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212204241db69480225fb728827be22f9ba819e938e0c51a44480047c3fbcbfb67b4964736f6c634300060c0033";
