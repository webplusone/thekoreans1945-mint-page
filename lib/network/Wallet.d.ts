import { ethers } from "ethers";
import { EventContainer } from "skydapp-common";
declare class Wallet extends EventContainer {
    private ethereum;
    get existsInjectedProvider(): boolean;
    private walletConnectProvider;
    provider: ethers.providers.Web3Provider;
    signer: ethers.providers.JsonRpcSigner;
    constructor();
    private checkConnected;
    loadAddress(): Promise<string | undefined>;
    loadChainId(): Promise<number>;
    connected(): Promise<boolean>;
    connect(): Promise<void>;
    disconnectFromWalletConnect(): Promise<void>;
    changeNetwork(chainId: number, chainName: string, currency: {
        name: string;
        symbol: string;
        decimals: number;
    }, rpc: string, blockExplorer?: string): Promise<void>;
    signMessage(message: string): Promise<any>;
    signTypedData(owner: string | undefined, name: string, version: string, verifyingContract: string, primaryType: string, types: {
        name: string;
        type: string;
    }[], message: any): Promise<string>;
}
declare const _default: Wallet;
export default _default;
//# sourceMappingURL=Wallet.d.ts.map