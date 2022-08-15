/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TheKoreans1945,
  TheKoreans1945Interface,
} from "../../contracts/TheKoreans1945";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseURI_",
        type: "string",
      },
    ],
    name: "SetBaseURI",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "batchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "burn",
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
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "baseURI_",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "setPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600b81526020016a546865204b6f7265616e7360a81b815250604051806040016040528060078152602001664b4f5245414e5360c81b8152506040518060600160405280603e815260200162002954603e91396001805460ff1916905560026200008884826200026a565b5060036200009783826200026a565b506009620000a682826200026a565b50620000b460003362000115565b620000e07f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63362000115565b6200010c7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3362000115565b50505062000336565b62000121828262000125565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000121576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001813390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620001f057607f821691505b6020821081036200021157634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200026557600081815260208120601f850160051c81016020861015620002405750805b601f850160051c820191505b8181101562000261578281556001016200024c565b5050505b505050565b81516001600160401b03811115620002865762000286620001c5565b6200029e81620002978454620001db565b8462000217565b602080601f831160018114620002d65760008415620002bd5750858301515b600019600386901b1c1916600185901b17855562000261565b600085815260208120601f198616915b828110156200030757888601518255948401946001909101908401620002e6565b5085821015620003265787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61260e80620003466000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80635c975abb11610104578063a22cb465116100a2578063c87b56dd11610071578063c87b56dd146103cc578063d547741f146103df578063e985e9c5146103f2578063f3993d111461040557600080fd5b8063a22cb46514610385578063b2dc5dc314610398578063b88d4fde146103a6578063bedb86fb146103b957600080fd5b806375ceb341116100de57806375ceb3411461034f57806391d148541461036257806395d89b4114610375578063a217fddf1461037d57600080fd5b80635c975abb1461031e5780636352211e1461032957806370a082311461033c57600080fd5b80632f2ff15d1161017157806342842e0e1161014b57806342842e0e146102d257806342966c68146102e55780634f558e79146102f857806355f804b31461030b57600080fd5b80632f2ff15d1461029957806336568abe146102ac57806340c10f19146102bf57600080fd5b8063095ea7b3116101ad578063095ea7b31461023c57806318160ddd1461025157806323b872dd14610263578063248a9ca31461027657600080fd5b806301ffc9a7146101d457806306fdde03146101fc578063081812fc14610211575b600080fd5b6101e76101e2366004611ce1565b610418565b60405190151581526020015b60405180910390f35b61020461045e565b6040516101f39190611d56565b61022461021f366004611d69565b6104f0565b6040516001600160a01b0390911681526020016101f3565b61024f61024a366004611d9e565b610517565b005b6008545b6040519081526020016101f3565b61024f610271366004611dc8565b610632565b610255610284366004611d69565b60009081526020819052604090206001015490565b61024f6102a7366004611e04565b610663565b61024f6102ba366004611e04565b610688565b61024f6102cd366004611d9e565b610706565b61024f6102e0366004611dc8565b610756565b61024f6102f3366004611d69565b610771565b6101e7610306366004611d69565b6107a7565b61024f610319366004611e30565b6107c6565b60015460ff166101e7565b610224610337366004611d69565b610868565b61025561034a366004611ea2565b6108c9565b61024f61035d366004611f09565b610950565b6101e7610370366004611e04565b6109a1565b6102046109ca565b610255600081565b61024f610393366004611f6c565b6109d9565b61024f6102f3366004611f09565b61024f6103b4366004611fac565b6109e4565b61024f6103c7366004612088565b610a1c565b6102046103da366004611d69565b610abb565b61024f6103ed366004611e04565b610b22565b6101e76104003660046120a3565b610b47565b61024f6104133660046120cd565b610b75565b60006001600160e01b031982166380ac58cd60e01b148061044957506001600160e01b03198216635b5e139f60e01b145b80610458575061045882610e33565b92915050565b60606002805461046d9061212e565b80601f01602080910402602001604051908101604052809291908181526020018280546104999061212e565b80156104e65780601f106104bb576101008083540402835291602001916104e6565b820191906000526020600020905b8154815290600101906020018083116104c957829003601f168201915b5050505050905090565b60006104fb82610e68565b506000908152600660205260409020546001600160a01b031690565b600061052282610868565b9050806001600160a01b0316836001600160a01b0316036105955760405162461bcd60e51b815260206004820152602260248201527f455243373231473a20617070726f76616c20746f2063757272656e74206f776e60448201526132b960f11b60648201526084015b60405180910390fd5b336001600160a01b03821614806105b157506105b18133610b47565b6106235760405162461bcd60e51b815260206004820152603f60248201527f455243373231473a20617070726f76652063616c6c6572206973206e6f74207460448201527f6f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00606482015260840161058c565b61062d8383610ec8565b505050565b61063c3382610f36565b6106585760405162461bcd60e51b815260040161058c90612168565b61062d838383610f95565b60008281526020819052604090206001015461067e8161112d565b61062d8383611137565b6001600160a01b03811633146106f85760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840161058c565b61070282826111bb565b5050565b6107307f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336109a1565b61074c5760405162461bcd60e51b815260040161058c906121b7565b6107028282611220565b61062d838383604051806020016040528060008152506109e4565b60405162461bcd60e51b815260206004820152600b60248201526a554e415641494c41424c4560a81b604482015260640161058c565b6000818152600460205260408120546001600160a01b03161515610458565b6107d16000336109a1565b61081d5760405162461bcd60e51b815260206004820152601e60248201527f455243373231473a206d7573742062652064656661756c742061646d696e0000604482015260640161058c565b600961082a82848361224b565b507f23c8c9488efebfd474e85a7956de6f39b17c7ab88502d42a623db2d8e382bbaa828260405161085c92919061230c565b60405180910390a15050565b6000818152600460205260408120546001600160a01b0316806104585760405162461bcd60e51b8152602060048201526019602482015278115490cdcc8c51ce881a5b9d985b1a59081d1bdad95b881251603a1b604482015260640161058c565b60006001600160a01b0382166109345760405162461bcd60e51b815260206004820152602a60248201527f455243373231473a2061646472657373207a65726f206973206e6f742061207660448201526930b634b21037bbb732b960b11b606482015260840161058c565b506001600160a01b031660009081526005602052604090205490565b61097a7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336109a1565b6109965760405162461bcd60e51b815260040161058c906121b7565b61062d838383611270565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60606003805461046d9061212e565b6107023383836112ce565b6109ee3383610f36565b610a0a5760405162461bcd60e51b815260040161058c90612168565b610a168484848461139c565b50505050565b610a467f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336109a1565b610aa25760405162461bcd60e51b815260206004820152602760248201527f455243373231473a206d75737420686176652070617573657220726f6c6520746044820152666f20706175736560c81b606482015260840161058c565b8015610ab357610ab06113cf565b50565b610ab0611423565b6060610ac682610e68565b6000610ad061145c565b90506000815111610af05760405180602001604052806000815250610b1b565b80610afa8461146b565b604051602001610b0b92919061233b565b6040516020818303038152906040525b9392505050565b600082815260208190526040902060010154610b3d8161112d565b61062d83836111bb565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b6001600160a01b038416610bcb5760405162461bcd60e51b815260206004820152601760248201527f5452414e534645525f46524f4d5f414444524553535f30000000000000000000604482015260640161058c565b6001600160a01b038316610c195760405162461bcd60e51b815260206004820152601560248201527405452414e534645525f544f5f414444524553535f3605c1b604482015260640161058c565b8080610c585760405162461bcd60e51b815260206004820152600e60248201526d1253959053125117d05353d5539560921b604482015260640161058c565b6000336001600160a01b0387161480610c765750610c768633610b47565b15610c7f575060015b610c8b8686868661156c565b60005b82811015610dd0576000858583818110610caa57610caa61236a565b6020908102929092013560008181526004909352604090922054919250506001600160a01b03898116911614610d195760405162461bcd60e51b815260206004820152601460248201527313d5d3915497d19493d357d393d517d15455505360621b604482015260640161058c565b82610d6d5733610d28826104f0565b6001600160a01b031614610d6d5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b604482015260640161058c565b610d78600082610ec8565b60008181526004602052604080822080546001600160a01b0319166001600160a01b038b811691821790925591518493918c16916000805160206125b983398151915291a45080610dc881612396565b915050610c8e565b506001600160a01b03861660009081526005602052604081208054849290610df99084906123af565b90915550506001600160a01b03851660009081526005602052604081208054849290610e269084906123c6565b9091555050505050505050565b60006001600160e01b03198216637965db0b60e01b148061045857506301ffc9a760e01b6001600160e01b0319831614610458565b6000818152600460205260409020546001600160a01b0316610ab05760405162461bcd60e51b8152602060048201526019602482015278115490cdcc8c51ce881a5b9d985b1a59081d1bdad95b881251603a1b604482015260640161058c565b600081815260066020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610efd82610868565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610f4283610868565b9050806001600160a01b0316846001600160a01b03161480610f695750610f698185610b47565b80610f8d5750836001600160a01b0316610f82846104f0565b6001600160a01b0316145b949350505050565b826001600160a01b0316610fa882610868565b6001600160a01b03161461100d5760405162461bcd60e51b815260206004820152602660248201527f455243373231473a207472616e736665722066726f6d20696e636f72726563746044820152651037bbb732b960d11b606482015260840161058c565b6001600160a01b0382166110715760405162461bcd60e51b815260206004820152602560248201527f455243373231473a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b606482015260840161058c565b61107c8383836115e1565b611087600082610ec8565b6001600160a01b03831660009081526005602052604081208054600192906110b09084906123af565b90915550506001600160a01b03821660009081526005602052604081208054600192906110de9084906123c6565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716916000805160206125b983398151915291a4505050565b610ab0813361164c565b61114182826109a1565b610702576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556111773390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6111c582826109a1565b15610702576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b610799600854106112665760405162461bcd60e51b815260206004820152601060248201526f10531317d513d2d15397d3525395115160821b604482015260640161058c565b61070282826116b0565b600854610799906112829083906123c6565b11156112c35760405162461bcd60e51b815260206004820152601060248201526f10531317d513d2d15397d3525395115160821b604482015260640161058c565b61062d8383836117f6565b816001600160a01b0316836001600160a01b03160361132f5760405162461bcd60e51b815260206004820152601a60248201527f455243373231473a20617070726f766520746f2063616c6c6572000000000000604482015260640161058c565b6001600160a01b03838116600081815260076020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6113a7848484610f95565b6113b38484848461199d565b610a165760405162461bcd60e51b815260040161058c906123de565b6113d7611a9e565b6001805460ff1916811790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258335b6040516001600160a01b03909116815260200160405180910390a1565b61142b611ae6565b6001805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33611406565b60606009805461046d9061212e565b6060816000036114925750506040805180820190915260018152600360fc1b602082015290565b8160005b81156114bc57806114a681612396565b91506114b59050600a83612447565b9150611496565b60008167ffffffffffffffff8111156114d7576114d7611f96565b6040519080825280601f01601f191660200182016040528015611501576020820181803683370190505b5090505b8415610f8d576115166001836123af565b9150611523600a8661245b565b61152e9060306123c6565b60f81b8183815181106115435761154361236a565b60200101906001600160f81b031916908160001a905350611565600a86612447565b9450611505565b6001600160a01b03841661159557818190506008600082825461158f91906123c6565b90915550505b6001600160a01b0383166115be5781819050600860008282546115b891906123af565b90915550505b60015460ff1615610a165760405162461bcd60e51b815260040161058c9061246f565b6001600160a01b03831661160557600880549060006115ff83612396565b91905055505b6001600160a01b0382166116295760088054906000611623836124b3565b91905055505b60015460ff161561062d5760405162461bcd60e51b815260040161058c9061246f565b61165682826109a1565b6107025761166e816001600160a01b03166014611b2f565b611679836020611b2f565b60405160200161168a9291906124ca565b60408051601f198184030181529082905262461bcd60e51b825261058c91600401611d56565b6001600160a01b0382166117105760405162461bcd60e51b815260206004820152602160248201527f455243373231473a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b606482015260840161058c565b6000818152600460205260409020546001600160a01b0316156117755760405162461bcd60e51b815260206004820152601d60248201527f455243373231473a20746f6b656e20616c7265616479206d696e746564000000604482015260640161058c565b611781600083836115e1565b6001600160a01b03821660009081526005602052604081208054600192906117aa9084906123c6565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392906000805160206125b9833981519152908290a45050565b6001600160a01b0383166118405760405162461bcd60e51b815260206004820152601160248201527004d494e545f544f5f414444524553535f3607c1b604482015260640161058c565b808061187f5760405162461bcd60e51b815260206004820152600e60248201526d1253959053125117d05353d5539560921b604482015260640161058c565b61188c600085858561156c565b60005b818110156119695760008484838181106118ab576118ab61236a565b9050602002013590506118d5816000908152600460205260409020546001600160a01b0316151590565b156119135760405162461bcd60e51b815260206004820152600e60248201526d1053149150511657d3525395115160921b604482015260640161058c565b60008181526004602052604080822080546001600160a01b0319166001600160a01b038a1690811790915590518392906000805160206125b9833981519152908290a4508061196181612396565b91505061188f565b506001600160a01b038416600090815260056020526040812080548392906119929084906123c6565b909155505050505050565b60006001600160a01b0384163b15611a9357604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906119e190339089908890889060040161253f565b6020604051808303816000875af1925050508015611a1c575060408051601f3d908101601f19168201909252611a199181019061257c565b60015b611a79573d808015611a4a576040519150601f19603f3d011682016040523d82523d6000602084013e611a4f565b606091505b508051600003611a715760405162461bcd60e51b815260040161058c906123de565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610f8d565b506001949350505050565b60015460ff1615611ae45760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161058c565b565b60015460ff16611ae45760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161058c565b60606000611b3e836002612599565b611b499060026123c6565b67ffffffffffffffff811115611b6157611b61611f96565b6040519080825280601f01601f191660200182016040528015611b8b576020820181803683370190505b509050600360fc1b81600081518110611ba657611ba661236a565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611bd557611bd561236a565b60200101906001600160f81b031916908160001a9053506000611bf9846002612599565b611c049060016123c6565b90505b6001811115611c7c576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611c3857611c3861236a565b1a60f81b828281518110611c4e57611c4e61236a565b60200101906001600160f81b031916908160001a90535060049490941c93611c75816124b3565b9050611c07565b508315610b1b5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161058c565b6001600160e01b031981168114610ab057600080fd5b600060208284031215611cf357600080fd5b8135610b1b81611ccb565b60005b83811015611d19578181015183820152602001611d01565b83811115610a165750506000910152565b60008151808452611d42816020860160208601611cfe565b601f01601f19169290920160200192915050565b602081526000610b1b6020830184611d2a565b600060208284031215611d7b57600080fd5b5035919050565b80356001600160a01b0381168114611d9957600080fd5b919050565b60008060408385031215611db157600080fd5b611dba83611d82565b946020939093013593505050565b600080600060608486031215611ddd57600080fd5b611de684611d82565b9250611df460208501611d82565b9150604084013590509250925092565b60008060408385031215611e1757600080fd5b82359150611e2760208401611d82565b90509250929050565b60008060208385031215611e4357600080fd5b823567ffffffffffffffff80821115611e5b57600080fd5b818501915085601f830112611e6f57600080fd5b813581811115611e7e57600080fd5b866020828501011115611e9057600080fd5b60209290920196919550909350505050565b600060208284031215611eb457600080fd5b610b1b82611d82565b60008083601f840112611ecf57600080fd5b50813567ffffffffffffffff811115611ee757600080fd5b6020830191508360208260051b8501011115611f0257600080fd5b9250929050565b600080600060408486031215611f1e57600080fd5b611f2784611d82565b9250602084013567ffffffffffffffff811115611f4357600080fd5b611f4f86828701611ebd565b9497909650939450505050565b80358015158114611d9957600080fd5b60008060408385031215611f7f57600080fd5b611f8883611d82565b9150611e2760208401611f5c565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611fc257600080fd5b611fcb85611d82565b9350611fd960208601611d82565b925060408501359150606085013567ffffffffffffffff80821115611ffd57600080fd5b818701915087601f83011261201157600080fd5b81358181111561202357612023611f96565b604051601f8201601f19908116603f0116810190838211818310171561204b5761204b611f96565b816040528281528a602084870101111561206457600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60006020828403121561209a57600080fd5b610b1b82611f5c565b600080604083850312156120b657600080fd5b6120bf83611d82565b9150611e2760208401611d82565b600080600080606085870312156120e357600080fd5b6120ec85611d82565b93506120fa60208601611d82565b9250604085013567ffffffffffffffff81111561211657600080fd5b61212287828801611ebd565b95989497509550505050565b600181811c9082168061214257607f821691505b60208210810361216257634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602f908201527f455243373231473a2063616c6c6572206973206e6f7420746f6b656e206f776e60408201526e195c881b9bdc88185c1c1c9bdd9959608a1b606082015260800190565b60208082526026908201527f455243373231473a206d7573742068617665206d696e74657220726f6c6520746040820152651bc81b5a5b9d60d21b606082015260800190565b601f82111561062d57600081815260208120601f850160051c810160208610156122245750805b601f850160051c820191505b8181101561224357828155600101612230565b505050505050565b67ffffffffffffffff83111561226357612263611f96565b61227783612271835461212e565b836121fd565b6000601f8411600181146122ab57600085156122935750838201355b600019600387901b1c1916600186901b178355612305565b600083815260209020601f19861690835b828110156122dc57868501358255602094850194600190920191016122bc565b50868210156122f95760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b6000835161234d818460208801611cfe565b835190830190612361818360208801611cfe565b01949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016123a8576123a8612380565b5060010190565b6000828210156123c1576123c1612380565b500390565b600082198211156123d9576123d9612380565b500190565b60208082526033908201527f455243373231473a207472616e7366657220746f206e6f6e204552433732315260408201527232b1b2b4bb32b91034b6b83632b6b2b73a32b960691b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b60008261245657612456612431565b500490565b60008261246a5761246a612431565b500690565b60208082526024908201527f455243373231473a20746f6b656e207472616e73666572207768696c652070616040820152631d5cd95960e21b606082015260800190565b6000816124c2576124c2612380565b506000190190565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612502816017850160208801611cfe565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351612533816028840160208801611cfe565b01602801949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061257290830184611d2a565b9695505050505050565b60006020828403121561258e57600080fd5b8151610b1b81611ccb565b60008160001904831182151516156125b3576125b3612380565b50029056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212204764a5b065d7b56667196342848fef3a1d07b3b93ed6484a4b05aa6c40739b9164736f6c634300080f003368747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f776562706c75736f6e652f7468656b6f7265616e732f6d657461646174612f";

type TheKoreans1945ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TheKoreans1945ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TheKoreans1945__factory extends ContractFactory {
  constructor(...args: TheKoreans1945ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TheKoreans1945> {
    return super.deploy(overrides || {}) as Promise<TheKoreans1945>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TheKoreans1945 {
    return super.attach(address) as TheKoreans1945;
  }
  override connect(signer: Signer): TheKoreans1945__factory {
    return super.connect(signer) as TheKoreans1945__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TheKoreans1945Interface {
    return new utils.Interface(_abi) as TheKoreans1945Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TheKoreans1945 {
    return new Contract(address, _abi, signerOrProvider) as TheKoreans1945;
  }
}