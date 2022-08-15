import { ContractInterface, ethers } from "ethers";
import { EventContainer } from "skydapp-common";
export default abstract class Contract<CT extends ethers.Contract> extends EventContainer {
    address: string;
    private abi;
    protected walletContract: CT | undefined;
    protected contract: CT;
    constructor(address: string, abi: ContractInterface);
    get interface(): ethers.utils.Interface;
    getWalletContract(): Promise<CT | undefined>;
    connectAndGetWalletContract(): Promise<CT | undefined>;
}
//# sourceMappingURL=Contract.d.ts.map