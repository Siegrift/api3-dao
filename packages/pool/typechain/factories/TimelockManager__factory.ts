/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TimelockManager } from "../TimelockManager";

export class TimelockManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    api3TokenAddress: string,
    timelockManagerOwner: string,
    overrides?: Overrides
  ): Promise<TimelockManager> {
    return super.deploy(
      api3TokenAddress,
      timelockManagerOwner,
      overrides || {}
    ) as Promise<TimelockManager>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    timelockManagerOwner: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      api3TokenAddress,
      timelockManagerOwner,
      overrides || {}
    );
  }
  attach(address: string): TimelockManager {
    return super.attach(address) as TimelockManager;
  }
  connect(signer: Signer): TimelockManager__factory {
    return super.connect(signer) as TimelockManager__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockManager {
    return new Contract(address, _abi, signerOrProvider) as TimelockManager;
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
      {
        internalType: "address",
        name: "timelockManagerOwner",
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
        indexed: false,
        internalType: "address",
        name: "api3PoolAddress",
        type: "address",
      },
    ],
    name: "Api3PoolUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "PermittedTimelockToBeReverted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RevertedTimelock",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "releaseStart",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "releaseEnd",
        type: "uint256",
      },
    ],
    name: "TransferredAndLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "api3PoolAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "WithdrawnToPool",
    type: "event",
  },
  {
    inputs: [],
    name: "api3Pool",
    outputs: [
      {
        internalType: "contract Api3Pool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "api3Token",
    outputs: [
      {
        internalType: "contract IApi3Token",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "getIfTimelockIsRevertible",
    outputs: [
      {
        internalType: "bool",
        name: "revertStatus",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "getRemainingAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "remainingAmount",
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
        name: "recipient",
        type: "address",
      },
    ],
    name: "getTimelock",
    outputs: [
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "releaseStart",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "releaseEnd",
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
        name: "recipient",
        type: "address",
      },
    ],
    name: "getWithdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "withdrawable",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "permitTimelockToBeReverted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
    ],
    name: "revertTimelock",
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
    name: "timelocks",
    outputs: [
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "remainingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "releaseStart",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "releaseEnd",
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
        name: "source",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "releaseStart",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "releaseEnd",
        type: "uint256",
      },
    ],
    name: "transferAndLock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "releaseStarts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "releaseEnds",
        type: "uint256[]",
      },
    ],
    name: "transferAndLockMultiple",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "api3PoolAddress",
        type: "address",
      },
    ],
    name: "updateApi3Pool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "api3PoolAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "withdrawToPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001d6a38038062001d6a833981810160405260408110156200003757600080fd5b50805160209091015160006200004c620000aa565b600080546001600160a01b0319166001600160a01b03831690811782556040519293509160008051602062001d4a833981519152908290a3506001600160601b0319606083901b16608052620000a281620000ae565b5050620001c7565b3390565b620000b8620000aa565b6001600160a01b0316620000cb620001b8565b6001600160a01b03161462000127576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166200016e5760405162461bcd60e51b815260040180806020018281038252602681526020018062001d246026913960400191505060405180910390fd5b600080546040516001600160a01b038085169392169160008051602062001d4a83398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031690565b60805160601c611b2b620001f96000398061070d5280610a095280610eb2528061118952806115785250611b2b6000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80636fe2a2d7116100a2578063bf1e799b11610071578063bf1e799b146103e6578063cd7cea041461040c578063e1b1c2161461043a578063f2fde38b14610474578063faf7eba61461049a5761010b565b80636fe2a2d7146103c6578063715018a6146103ce5780638da5cb5b146103d6578063aa483e7c146103de5761010b565b8063355efbed116100de578063355efbed146102065780633ccfd60b1461022c5780635af6025314610234578063613d517d146103a25761010b565b80631369a9271461011057806324dcb3851461015c57806329765acf146101a057806332cc6ae6146101ce575b600080fd5b6101366004803603602081101561012657600080fd5b50356001600160a01b03166104c0565b604080519485526020850193909352838301919091526060830152519081900360800190f35b61019e600480360360a081101561017257600080fd5b506001600160a01b038135811691602081013590911690604081013590606081013590608001356104e9565b005b61019e600480360360408110156101b657600080fd5b506001600160a01b038135811691602001351661082d565b6101f4600480360360208110156101e457600080fd5b50356001600160a01b0316610c4a565b60408051918252519081900360200190f35b61019e6004803603602081101561021c57600080fd5b50356001600160a01b0316610c97565b61019e610db0565b61019e600480360360a081101561024a57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561027457600080fd5b82018360208201111561028657600080fd5b803590602001918460208302840111600160201b831117156102a757600080fd5b919390929091602081019035600160201b8111156102c457600080fd5b8201836020820111156102d657600080fd5b803590602001918460208302840111600160201b831117156102f757600080fd5b919390929091602081019035600160201b81111561031457600080fd5b82018360208201111561032657600080fd5b803590602001918460208302840111600160201b8311171561034757600080fd5b919390929091602081019035600160201b81111561036457600080fd5b82018360208201111561037657600080fd5b803590602001918460208302840111600160201b8311171561039757600080fd5b509092509050610fe8565b6103aa611187565b604080516001600160a01b039092168252519081900360200190f35b6103aa6111ab565b61019e6111ba565b6103aa611266565b61019e611275565b610136600480360360208110156103fc57600080fd5b50356001600160a01b031661137b565b61019e6004803603604081101561042257600080fd5b506001600160a01b03813581169160200135166113aa565b6104606004803603602081101561045057600080fd5b50356001600160a01b0316611687565b604080519115158252519081900360200190f35b61019e6004803603602081101561048a57600080fd5b50356001600160a01b03166116a5565b6101f4600480360360208110156104b057600080fd5b50356001600160a01b03166117a7565b600360208190526000918252604090912080546001820154600283015492909301549092919084565b6104f16117c5565b6001600160a01b0316610502611266565b6001600160a01b03161461054b576040805162461bcd60e51b81526020600482018190526024820152600080516020611ad6833981519152604482015290519081900360640190fd5b6001600160a01b038416600090815260036020526040902060010154156105b9576040805162461bcd60e51b815260206004820152601e60248201527f526563697069656e74206861732072656d61696e696e6720746f6b656e730000604482015290519081900360640190fd5b82610600576040805162461bcd60e51b81526020600482015260126024820152710416d6f756e742063616e6e6f7420626520360741b604482015290519081900360640190fd5b81811161063e5760405162461bcd60e51b8152600401808060200182810382526027815260200180611a8e6027913960400191505060405180910390fd5b428211610692576040805162461bcd60e51b815260206004820152601e60248201527f72656c656173655374617274206e6f7420696e20746865206675747572650000604482015290519081900360640190fd5b604080516080810182528481526020808201868152828401868152606084018681526001600160a01b03808b16600090815260038087528882209751885594516001880155925160028701559051949092019390935583516323b872dd60e01b815289821660048201523060248201526044810188905293517f0000000000000000000000000000000000000000000000000000000000000000909116936323b872dd9360648083019493928390030190829087803b15801561075457600080fd5b505af1158015610768573d6000803e3d6000fd5b505050506040513d602081101561077e57600080fd5b50516107d1576040805162461bcd60e51b815260206004820152601e60248201527f4150493320746f6b656e207472616e7366657246726f6d206661696c65640000604482015290519081900360640190fd5b604080516001600160a01b03878116825260208201869052818301859052606082018490529151918616917fd1f652d80d5c06196c1cc9329a51edb16e16aa626e4a7715de03fb8a98547ef69181900360800190a25050505050565b3360008181526003602052604090206001015461087b5760405162461bcd60e51b8152600401808060200182810382526028815260200180611a666028913960400191505060405180910390fd5b6001600160a01b0382166108d6576040805162461bcd60e51b815260206004820152601760248201527f62656e65666963696172792063616e6e6f742062652030000000000000000000604482015290519081900360640190fd5b6002546001600160a01b031661092b576040805162461bcd60e51b81526020600482015260156024820152741054124cc81c1bdbdb081b9bdd081cd95d081e595d605a1b604482015290519081900360640190fd5b6002546001600160a01b0384811691161461098d576040805162461bcd60e51b815260206004820181905260248201527f4150493320706f6f6c2061646472657373657320646f206e6f74206d61746368604482015290519081900360640190fd5b33600061099982610c4a565b6001600160a01b0383166000908152600360205260408120600101549192506109c282846117c9565b6001600160a01b038086166000908152600360209081526040808320600101839055600254815163095ea7b360e01b815290851660048201526024810188905290519495507f00000000000000000000000000000000000000000000000000000000000000009093169363095ea7b393604480820194918390030190829087803b158015610a4f57600080fd5b505af1158015610a63573d6000803e3d6000fd5b505050506040513d6020811015610a7957600080fd5b50508215610af55760025460408051633d14d1b760e21b8152306004820152602481018690526001600160a01b0389811660448301529151919092169163f45346dc91606480830192600092919082900301818387803b158015610adc57600080fd5b505af1158015610af0573d6000803e3d6000fd5b505050505b8015610bfa57600280546001600160a01b038681166000908152600360205260409020909201549116906356d4a7fe90309084908a904211610b52576001600160a01b038916600090815260036020526040902060020154610b54565b425b600360008b6001600160a01b03166001600160a01b03168152602001908152602001600020600301546040518663ffffffff1660e01b815260040180866001600160a01b03168152602001858152602001846001600160a01b0316815260200183815260200182815260200195505050505050600060405180830381600087803b158015610be157600080fd5b505af1158015610bf5573d6000803e3d6000fd5b505050505b604080516001600160a01b03898116825288811660208301528251908716927fa2fd4f03989448c5a69bab0c0454f2baf5667413a4e4b87fd7379a8ab69fae3f928290030190a250505050505050565b6001600160a01b038116600090815260036020526040812081610c6c84611814565b60018301548354919250600091610c82916117c9565b9050610c8e82826117c9565b95945050505050565b610c9f6117c5565b6001600160a01b0316610cb0611266565b6001600160a01b031614610cf9576040805162461bcd60e51b81526020600482018190526024820152600080516020611ad6833981519152604482015290519081900360640190fd5b6002546001600160a01b0382811691161415610d5c576040805162461bcd60e51b815260206004820152601b60248201527f496e7075742077696c6c206e6f74207570646174652073746174650000000000604482015290519081900360640190fd5b600280546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f9758fe2c5611eaaf02f90cf70038ecb1e23f3d218aed0b239a67c393d14276759181900360200190a150565b33600081815260036020526040902060010154610dfe5760405162461bcd60e51b8152600401808060200182810382526028815260200180611a666028913960400191505060405180910390fd5b336000610e0a82610c4a565b905080610e5e576040805162461bcd60e51b815260206004820152601a60248201527f4e6f20776974686472617761626c6520746f6b656e7320796574000000000000604482015290519081900360640190fd5b6001600160a01b038216600090815260036020526040902060010154610e8490826117c9565b60036000846001600160a01b03166001600160a01b03168152602001908152602001600020600101819055507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb83836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610f2757600080fd5b505af1158015610f3b573d6000803e3d6000fd5b505050506040513d6020811015610f5157600080fd5b5051610fa4576040805162461bcd60e51b815260206004820152601a60248201527f4150493320746f6b656e207472616e73666572206661696c6564000000000000604482015290519081900360640190fd5b6040805182815290516001600160a01b038416917f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5919081900360200190a2505050565b610ff06117c5565b6001600160a01b0316611001611266565b6001600160a01b03161461104a576040805162461bcd60e51b81526020600482018190526024820152600080516020611ad6833981519152604482015290519081900360640190fd5b868514801561105857508683145b801561106357508681145b6110b4576040805162461bcd60e51b815260206004820181905260248201527f506172616d657465727320617265206f6620756e657175616c206c656e677468604482015290519081900360640190fd5b601e87111561110a576040805162461bcd60e51b815260206004820152601d60248201527f506172616d657465727320617265206c6f6e676572207468616e203330000000604482015290519081900360640190fd5b60005b8781101561117b576111738a8a8a8481811061112557fe5b905060200201356001600160a01b031689898581811061114157fe5b9050602002013588888681811061115457fe5b9050602002013587878781811061116757fe5b905060200201356104e9565b60010161110d565b50505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6002546001600160a01b031681565b6111c26117c5565b6001600160a01b03166111d3611266565b6001600160a01b03161461121c576040805162461bcd60e51b81526020600482018190526024820152600080516020611ad6833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b336000818152600360205260409020600101546112c35760405162461bcd60e51b8152600401808060200182810382526028815260200180611a666028913960400191505060405180910390fd5b3360009081526001602052604090205460ff1615611328576040805162461bcd60e51b815260206004820152601b60248201527f496e7075742077696c6c206e6f74207570646174652073746174650000000000604482015290519081900360640190fd5b33600081815260016020818152604092839020805460ff1916909217909155815192835290517f865c01aec16d8b95381881920a512ac95cc026764ba224093ad00b5824136d0b9281900390910190a150565b6001600160a01b0316600090815260036020819052604090912080546001820154600283015492909301549093565b6113b26117c5565b6001600160a01b03166113c3611266565b6001600160a01b03161461140c576040805162461bcd60e51b81526020600482018190526024820152600080516020611ad6833981519152604482015290519081900360640190fd5b6001600160a01b03821660009081526003602052604090206001015482906114655760405162461bcd60e51b8152600401808060200182810382526028815260200180611a666028913960400191505060405180910390fd5b6001600160a01b0382166114b6576040805162461bcd60e51b815260206004820152601360248201527224b73b30b634b2103232b9ba34b730ba34b7b760691b604482015290519081900360640190fd5b6001600160a01b03831660009081526001602052604090205460ff16611523576040805162461bcd60e51b815260206004820181905260248201527f4e6f74207065726d697474656420746f207265766572742074696d656c6f636b604482015290519081900360640190fd5b6001600160a01b038084166000908152600160208181526040808420805460ff1916905560038252808420909201805490849055825163a9059cbb60e01b8152878616600482015260248101829052925190947f0000000000000000000000000000000000000000000000000000000000000000169363a9059cbb936044808201949392918390030190829087803b1580156115be57600080fd5b505af11580156115d2573d6000803e3d6000fd5b505050506040513d60208110156115e857600080fd5b505161163b576040805162461bcd60e51b815260206004820152601a60248201527f4150493320746f6b656e207472616e73666572206661696c6564000000000000604482015290519081900360640190fd5b604080516001600160a01b038581168252602082018490528251908716927f57da8465c206f4c67271e5b44533d488e9305cc666290a0b4d56df0e71750c02928290030190a250505050565b6001600160a01b031660009081526001602052604090205460ff1690565b6116ad6117c5565b6001600160a01b03166116be611266565b6001600160a01b031614611707576040805162461bcd60e51b81526020600482018190526024820152600080516020611ad6833981519152604482015290519081900360640190fd5b6001600160a01b03811661174c5760405162461bcd60e51b8152600401808060200182810382526026815260200180611a406026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b031660009081526003602052604090206001015490565b3390565b600061180b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506118ad565b90505b92915050565b6001600160a01b03811660009081526003602052604081206002810154421161184057600091506118a7565b8060030154421061185457805491506118a7565b600061186d8260020154426117c990919063ffffffff16565b9050600061188c836002015484600301546117c990919063ffffffff16565b8354909150610c8e9082906118a19085611944565b9061199d565b50919050565b6000818484111561193c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156119015781810151838201526020016118e9565b50505050905090810190601f16801561192e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000826119535750600061180e565b8282028284828161196057fe5b041461180b5760405162461bcd60e51b8152600401808060200182810382526021815260200180611ab56021913960400191505060405180910390fd5b600061180b83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060008183611a295760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156119015781810151838201526020016118e9565b506000838581611a3557fe5b049594505050505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373526563697069656e7420646f6573206e6f7420686176652072656d61696e696e6720746f6b656e7372656c65617365456e64206e6f74206c6172676572207468616e2072656c656173655374617274536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220d117284355002ed83289b7dde97197ca71dc7a2b028d5c6284f3effdb9a5568064736f6c634300060c00334f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573738be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0";
