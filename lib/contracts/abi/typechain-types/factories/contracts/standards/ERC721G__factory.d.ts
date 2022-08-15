import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ERC721G, ERC721GInterface } from "../../../contracts/standards/ERC721G";
declare type ERC721GConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC721G__factory extends ContractFactory {
    constructor(...args: ERC721GConstructorParams);
    deploy(name_: PromiseOrValue<string>, symbol_: PromiseOrValue<string>, baseURI_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ERC721G>;
    getDeployTransaction(name_: PromiseOrValue<string>, symbol_: PromiseOrValue<string>, baseURI_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ERC721G;
    connect(signer: Signer): ERC721G__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162002cf738038062002cf7833981016040819052620000349162000256565b6001805460ff1916905560026200004c848262000376565b5060036200005b838262000376565b5060096200006a828262000376565b5062000078600033620000d9565b620000a47f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000d9565b620000d07f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000d9565b50505062000442565b620000e58282620000e9565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000e5576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001453390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001b157600080fd5b81516001600160401b0380821115620001ce57620001ce62000189565b604051601f8301601f19908116603f01168101908282118183101715620001f957620001f962000189565b816040528381526020925086838588010111156200021657600080fd5b600091505b838210156200023a57858201830151818301840152908201906200021b565b838211156200024c5760008385830101525b9695505050505050565b6000806000606084860312156200026c57600080fd5b83516001600160401b03808211156200028457600080fd5b62000292878388016200019f565b94506020860151915080821115620002a957600080fd5b620002b7878388016200019f565b93506040860151915080821115620002ce57600080fd5b50620002dd868287016200019f565b9150509250925092565b600181811c90821680620002fc57607f821691505b6020821081036200031d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200037157600081815260208120601f850160051c810160208610156200034c5750805b601f850160051c820191505b818110156200036d5782815560010162000358565b5050505b505050565b81516001600160401b0381111562000392576200039262000189565b620003aa81620003a38454620002e7565b8462000323565b602080601f831160018114620003e25760008415620003c95750858301515b600019600386901b1c1916600185901b1785556200036d565b600085815260208120601f198616915b828110156200041357888601518255948401946001909101908401620003f2565b5085821015620004325787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6128a580620004526000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80635c975abb11610104578063a22cb465116100a2578063c87b56dd11610071578063c87b56dd146103d1578063d547741f146103e4578063e985e9c5146103f7578063f3993d111461040a57600080fd5b8063a22cb46514610385578063b2dc5dc314610398578063b88d4fde146103ab578063bedb86fb146103be57600080fd5b806375ceb341116100de57806375ceb3411461034f57806391d148541461036257806395d89b4114610375578063a217fddf1461037d57600080fd5b80635c975abb1461031e5780636352211e1461032957806370a082311461033c57600080fd5b80632f2ff15d1161017157806342842e0e1161014b57806342842e0e146102d257806342966c68146102e55780634f558e79146102f857806355f804b31461030b57600080fd5b80632f2ff15d1461029957806336568abe146102ac57806340c10f19146102bf57600080fd5b8063095ea7b3116101ad578063095ea7b31461023c57806318160ddd1461025157806323b872dd14610263578063248a9ca31461027657600080fd5b806301ffc9a7146101d457806306fdde03146101fc578063081812fc14610211575b600080fd5b6101e76101e2366004611ee4565b61041d565b60405190151581526020015b60405180910390f35b610204610463565b6040516101f39190611f59565b61022461021f366004611f6c565b6104f5565b6040516001600160a01b0390911681526020016101f3565b61024f61024a366004611fa1565b61051c565b005b6008545b6040519081526020016101f3565b61024f610271366004611fcb565b610637565b610255610284366004611f6c565b60009081526020819052604090206001015490565b61024f6102a7366004612007565b610668565b61024f6102ba366004612007565b61068d565b61024f6102cd366004611fa1565b61070b565b61024f6102e0366004611fcb565b61075b565b61024f6102f3366004611f6c565b610776565b6101e7610306366004611f6c565b6107ee565b61024f610319366004612033565b61080d565b60015460ff166101e7565b610224610337366004611f6c565b6108af565b61025561034a3660046120a5565b610910565b61024f61035d36600461210c565b610997565b6101e7610370366004612007565b6109e8565b610204610a11565b610255600081565b61024f61039336600461216f565b610a20565b61024f6103a636600461210c565b610a2b565b61024f6103b93660046121af565b610c64565b61024f6103cc36600461228b565b610c9c565b6102046103df366004611f6c565b610d38565b61024f6103f2366004612007565b610d9f565b6101e76104053660046122a6565b610dc4565b61024f6104183660046122d0565b610df2565b60006001600160e01b031982166380ac58cd60e01b148061044e57506001600160e01b03198216635b5e139f60e01b145b8061045d575061045d82611070565b92915050565b60606002805461047290612331565b80601f016020809104026020016040519081016040528092919081815260200182805461049e90612331565b80156104eb5780601f106104c0576101008083540402835291602001916104eb565b820191906000526020600020905b8154815290600101906020018083116104ce57829003601f168201915b5050505050905090565b6000610500826110a5565b506000908152600660205260409020546001600160a01b031690565b6000610527826108af565b9050806001600160a01b0316836001600160a01b03160361059a5760405162461bcd60e51b815260206004820152602260248201527f455243373231473a20617070726f76616c20746f2063757272656e74206f776e60448201526132b960f11b60648201526084015b60405180910390fd5b336001600160a01b03821614806105b657506105b68133610dc4565b6106285760405162461bcd60e51b815260206004820152603f60248201527f455243373231473a20617070726f76652063616c6c6572206973206e6f74207460448201527f6f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c006064820152608401610591565b6106328383611105565b505050565b6106413382611173565b61065d5760405162461bcd60e51b81526004016105919061236b565b6106328383836111d2565b6000828152602081905260409020600101546106838161136a565b6106328383611374565b6001600160a01b03811633146106fd5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610591565b61070782826113f8565b5050565b6107357f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336109e8565b6107515760405162461bcd60e51b8152600401610591906123ba565b610707828261145d565b61063283838360405180602001604052806000815250610c64565b6107a07f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a848336109e8565b6107bc5760405162461bcd60e51b815260040161059190612400565b6107c63382611173565b6107e25760405162461bcd60e51b815260040161059190612446565b6107eb816115a3565b50565b6000818152600460205260408120546001600160a01b0316151561045d565b6108186000336109e8565b6108645760405162461bcd60e51b815260206004820152601e60248201527f455243373231473a206d7573742062652064656661756c742061646d696e00006044820152606401610591565b60096108718284836124ba565b507f23c8c9488efebfd474e85a7956de6f39b17c7ab88502d42a623db2d8e382bbaa82826040516108a392919061257b565b60405180910390a15050565b6000818152600460205260408120546001600160a01b03168061045d5760405162461bcd60e51b8152602060048201526019602482015278115490cdcc8c51ce881a5b9d985b1a59081d1bdad95b881251603a1b6044820152606401610591565b60006001600160a01b03821661097b5760405162461bcd60e51b815260206004820152602a60248201527f455243373231473a2061646472657373207a65726f206973206e6f742061207660448201526930b634b21037bbb732b960b11b6064820152608401610591565b506001600160a01b031660009081526005602052604090205490565b6109c17f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336109e8565b6109dd5760405162461bcd60e51b8152600401610591906123ba565b610632838383611638565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60606003805461047290612331565b6107073383836117be565b610a557f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a848336109e8565b610a715760405162461bcd60e51b815260040161059190612400565b6001600160a01b038316610abd5760405162461bcd60e51b815260206004820152601360248201527204255524e5f46524f4d5f414444524553535f3606c1b6044820152606401610591565b8080610adb5760405162461bcd60e51b8152600401610591906125aa565b6000336001600160a01b0386161480610af95750610af98533610dc4565b15610b02575060015b610b0f856000868661188c565b60005b82811015610c2f576000858583818110610b2e57610b2e6125d2565b6020908102929092013560008181526004909352604090922054919250506001600160a01b03888116911614610b9d5760405162461bcd60e51b815260206004820152601460248201527313d5d3915497d19493d357d393d517d15455505360621b6044820152606401610591565b82610bd25733610bac826104f5565b6001600160a01b031614610bd25760405162461bcd60e51b815260040161059190612446565b610bdd600082611105565b60008181526004602052604080822080546001600160a01b0319169055518291906001600160a01b038a1690600080516020612850833981519152908390a45080610c27816125fe565b915050610b12565b506001600160a01b03851660009081526005602052604081208054849290610c58908490612617565b90915550505050505050565b610c6e3383611173565b610c8a5760405162461bcd60e51b81526004016105919061236b565b610c9684848484611901565b50505050565b610cc67f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336109e8565b610d225760405162461bcd60e51b815260206004820152602760248201527f455243373231473a206d75737420686176652070617573657220726f6c6520746044820152666f20706175736560c81b6064820152608401610591565b8015610d30576107eb611934565b6107eb611988565b6060610d43826110a5565b6000610d4d6119c1565b90506000815111610d6d5760405180602001604052806000815250610d98565b80610d77846119d0565b604051602001610d8892919061262e565b6040516020818303038152906040525b9392505050565b600082815260208190526040902060010154610dba8161136a565b61063283836113f8565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b6001600160a01b038416610e485760405162461bcd60e51b815260206004820152601760248201527f5452414e534645525f46524f4d5f414444524553535f300000000000000000006044820152606401610591565b6001600160a01b038316610e965760405162461bcd60e51b815260206004820152601560248201527405452414e534645525f544f5f414444524553535f3605c1b6044820152606401610591565b8080610eb45760405162461bcd60e51b8152600401610591906125aa565b6000336001600160a01b0387161480610ed25750610ed28633610dc4565b15610edb575060015b610ee78686868661188c565b60005b8281101561100d576000858583818110610f0657610f066125d2565b6020908102929092013560008181526004909352604090922054919250506001600160a01b03898116911614610f755760405162461bcd60e51b815260206004820152601460248201527313d5d3915497d19493d357d393d517d15455505360621b6044820152606401610591565b82610faa5733610f84826104f5565b6001600160a01b031614610faa5760405162461bcd60e51b815260040161059190612446565b610fb5600082611105565b60008181526004602052604080822080546001600160a01b0319166001600160a01b038b811691821790925591518493918c169160008051602061285083398151915291a45080611005816125fe565b915050610eea565b506001600160a01b03861660009081526005602052604081208054849290611036908490612617565b90915550506001600160a01b0385166000908152600560205260408120805484929061106390849061265d565b9091555050505050505050565b60006001600160e01b03198216637965db0b60e01b148061045d57506301ffc9a760e01b6001600160e01b031983161461045d565b6000818152600460205260409020546001600160a01b03166107eb5760405162461bcd60e51b8152602060048201526019602482015278115490cdcc8c51ce881a5b9d985b1a59081d1bdad95b881251603a1b6044820152606401610591565b600081815260066020526040902080546001600160a01b0319166001600160a01b038416908117909155819061113a826108af565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061117f836108af565b9050806001600160a01b0316846001600160a01b031614806111a657506111a68185610dc4565b806111ca5750836001600160a01b03166111bf846104f5565b6001600160a01b0316145b949350505050565b826001600160a01b03166111e5826108af565b6001600160a01b03161461124a5760405162461bcd60e51b815260206004820152602660248201527f455243373231473a207472616e736665722066726f6d20696e636f72726563746044820152651037bbb732b960d11b6064820152608401610591565b6001600160a01b0382166112ae5760405162461bcd60e51b815260206004820152602560248201527f455243373231473a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b6064820152608401610591565b6112b9838383611ad1565b6112c4600082611105565b6001600160a01b03831660009081526005602052604081208054600192906112ed908490612617565b90915550506001600160a01b038216600090815260056020526040812080546001929061131b90849061265d565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b03868116918217909255915184939187169160008051602061285083398151915291a4505050565b6107eb8133611b3c565b61137e82826109e8565b610707576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556113b43390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61140282826109e8565b15610707576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b0382166114bd5760405162461bcd60e51b815260206004820152602160248201527f455243373231473a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b6064820152608401610591565b6000818152600460205260409020546001600160a01b0316156115225760405162461bcd60e51b815260206004820152601d60248201527f455243373231473a20746f6b656e20616c7265616479206d696e7465640000006044820152606401610591565b61152e60008383611ad1565b6001600160a01b038216600090815260056020526040812080546001929061155790849061265d565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b0386169081179091559051839290600080516020612850833981519152908290a45050565b60006115ae826108af565b90506115bc81600084611ad1565b6115c7600083611105565b6001600160a01b03811660009081526005602052604081208054600192906115f0908490612617565b909155505060008281526004602052604080822080546001600160a01b0319169055518391906001600160a01b03841690600080516020612850833981519152908390a45050565b6001600160a01b0383166116825760405162461bcd60e51b815260206004820152601160248201527004d494e545f544f5f414444524553535f3607c1b6044820152606401610591565b80806116a05760405162461bcd60e51b8152600401610591906125aa565b6116ad600085858561188c565b60005b8181101561178a5760008484838181106116cc576116cc6125d2565b9050602002013590506116f6816000908152600460205260409020546001600160a01b0316151590565b156117345760405162461bcd60e51b815260206004820152600e60248201526d1053149150511657d3525395115160921b6044820152606401610591565b60008181526004602052604080822080546001600160a01b0319166001600160a01b038a169081179091559051839290600080516020612850833981519152908290a45080611782816125fe565b9150506116b0565b506001600160a01b038416600090815260056020526040812080548392906117b390849061265d565b909155505050505050565b816001600160a01b0316836001600160a01b03160361181f5760405162461bcd60e51b815260206004820152601a60248201527f455243373231473a20617070726f766520746f2063616c6c65720000000000006044820152606401610591565b6001600160a01b03838116600081815260076020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166118b55781819050600860008282546118af919061265d565b90915550505b6001600160a01b0383166118de5781819050600860008282546118d89190612617565b90915550505b60015460ff1615610c965760405162461bcd60e51b815260040161059190612675565b61190c8484846111d2565b61191884848484611ba0565b610c965760405162461bcd60e51b8152600401610591906126b9565b61193c611ca1565b6001805460ff1916811790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258335b6040516001600160a01b03909116815260200160405180910390a1565b611990611ce9565b6001805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa3361196b565b60606009805461047290612331565b6060816000036119f75750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611a215780611a0b816125fe565b9150611a1a9050600a83612722565b91506119fb565b60008167ffffffffffffffff811115611a3c57611a3c612199565b6040519080825280601f01601f191660200182016040528015611a66576020820181803683370190505b5090505b84156111ca57611a7b600183612617565b9150611a88600a86612736565b611a9390603061265d565b60f81b818381518110611aa857611aa86125d2565b60200101906001600160f81b031916908160001a905350611aca600a86612722565b9450611a6a565b6001600160a01b038316611af55760088054906000611aef836125fe565b91905055505b6001600160a01b038216611b195760088054906000611b138361274a565b91905055505b60015460ff16156106325760405162461bcd60e51b815260040161059190612675565b611b4682826109e8565b61070757611b5e816001600160a01b03166014611d32565b611b69836020611d32565b604051602001611b7a929190612761565b60408051601f198184030181529082905262461bcd60e51b825261059191600401611f59565b60006001600160a01b0384163b15611c9657604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611be49033908990889088906004016127d6565b6020604051808303816000875af1925050508015611c1f575060408051601f3d908101601f19168201909252611c1c91810190612813565b60015b611c7c573d808015611c4d576040519150601f19603f3d011682016040523d82523d6000602084013e611c52565b606091505b508051600003611c745760405162461bcd60e51b8152600401610591906126b9565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506111ca565b506001949350505050565b60015460ff1615611ce75760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610591565b565b60015460ff16611ce75760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610591565b60606000611d41836002612830565b611d4c90600261265d565b67ffffffffffffffff811115611d6457611d64612199565b6040519080825280601f01601f191660200182016040528015611d8e576020820181803683370190505b509050600360fc1b81600081518110611da957611da96125d2565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611dd857611dd86125d2565b60200101906001600160f81b031916908160001a9053506000611dfc846002612830565b611e0790600161265d565b90505b6001811115611e7f576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611e3b57611e3b6125d2565b1a60f81b828281518110611e5157611e516125d2565b60200101906001600160f81b031916908160001a90535060049490941c93611e788161274a565b9050611e0a565b508315610d985760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610591565b6001600160e01b0319811681146107eb57600080fd5b600060208284031215611ef657600080fd5b8135610d9881611ece565b60005b83811015611f1c578181015183820152602001611f04565b83811115610c965750506000910152565b60008151808452611f45816020860160208601611f01565b601f01601f19169290920160200192915050565b602081526000610d986020830184611f2d565b600060208284031215611f7e57600080fd5b5035919050565b80356001600160a01b0381168114611f9c57600080fd5b919050565b60008060408385031215611fb457600080fd5b611fbd83611f85565b946020939093013593505050565b600080600060608486031215611fe057600080fd5b611fe984611f85565b9250611ff760208501611f85565b9150604084013590509250925092565b6000806040838503121561201a57600080fd5b8235915061202a60208401611f85565b90509250929050565b6000806020838503121561204657600080fd5b823567ffffffffffffffff8082111561205e57600080fd5b818501915085601f83011261207257600080fd5b81358181111561208157600080fd5b86602082850101111561209357600080fd5b60209290920196919550909350505050565b6000602082840312156120b757600080fd5b610d9882611f85565b60008083601f8401126120d257600080fd5b50813567ffffffffffffffff8111156120ea57600080fd5b6020830191508360208260051b850101111561210557600080fd5b9250929050565b60008060006040848603121561212157600080fd5b61212a84611f85565b9250602084013567ffffffffffffffff81111561214657600080fd5b612152868287016120c0565b9497909650939450505050565b80358015158114611f9c57600080fd5b6000806040838503121561218257600080fd5b61218b83611f85565b915061202a6020840161215f565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156121c557600080fd5b6121ce85611f85565b93506121dc60208601611f85565b925060408501359150606085013567ffffffffffffffff8082111561220057600080fd5b818701915087601f83011261221457600080fd5b81358181111561222657612226612199565b604051601f8201601f19908116603f0116810190838211818310171561224e5761224e612199565b816040528281528a602084870101111561226757600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60006020828403121561229d57600080fd5b610d988261215f565b600080604083850312156122b957600080fd5b6122c283611f85565b915061202a60208401611f85565b600080600080606085870312156122e657600080fd5b6122ef85611f85565b93506122fd60208601611f85565b9250604085013567ffffffffffffffff81111561231957600080fd5b612325878288016120c0565b95989497509550505050565b600181811c9082168061234557607f821691505b60208210810361236557634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602f908201527f455243373231473a2063616c6c6572206973206e6f7420746f6b656e206f776e60408201526e195c881b9bdc88185c1c1c9bdd9959608a1b606082015260800190565b60208082526026908201527f455243373231473a206d7573742068617665206d696e74657220726f6c6520746040820152651bc81b5a5b9d60d21b606082015260800190565b60208082526026908201527f455243373231473a206d7573742068617665206275726e657220726f6c6520746040820152653790313ab93760d11b606082015260800190565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b601f82111561063257600081815260208120601f850160051c810160208610156124935750805b601f850160051c820191505b818110156124b25782815560010161249f565b505050505050565b67ffffffffffffffff8311156124d2576124d2612199565b6124e6836124e08354612331565b8361246c565b6000601f84116001811461251a57600085156125025750838201355b600019600387901b1c1916600186901b178355612574565b600083815260209020601f19861690835b8281101561254b578685013582556020948501946001909201910161252b565b50868210156125685760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b6020808252600e908201526d1253959053125117d05353d5539560921b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201612610576126106125e8565b5060010190565b600082821015612629576126296125e8565b500390565b60008351612640818460208801611f01565b835190830190612654818360208801611f01565b01949350505050565b60008219821115612670576126706125e8565b500190565b60208082526024908201527f455243373231473a20746f6b656e207472616e73666572207768696c652070616040820152631d5cd95960e21b606082015260800190565b60208082526033908201527f455243373231473a207472616e7366657220746f206e6f6e204552433732315260408201527232b1b2b4bb32b91034b6b83632b6b2b73a32b960691b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b6000826127315761273161270c565b500490565b6000826127455761274561270c565b500690565b600081612759576127596125e8565b506000190190565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612799816017850160208801611f01565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516127ca816028840160208801611f01565b01602801949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061280990830184611f2d565b9695505050505050565b60006020828403121561282557600080fd5b8151610d9881611ece565b600081600019048311821515161561284a5761284a6125e8565b50029056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220fdac0c9a72434e40f7e4cf89daf2c8dbcc63bd286e3405007cf5a3e72ace9dbf64736f6c634300080f0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ERC721GInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721G;
}
export {};
//# sourceMappingURL=ERC721G__factory.d.ts.map