declare class ContractManager {
    private premintContracts;
    private wlContracts;
    constructor();
    loadPremintBalance(address: string): Promise<{
        addr: string;
        balance: number;
    }>;
    loadWLBalance(address: string): Promise<{
        addr: string;
        balance: number;
    }>;
}
declare const _default: ContractManager;
export default _default;
//# sourceMappingURL=ContractManager.d.ts.map