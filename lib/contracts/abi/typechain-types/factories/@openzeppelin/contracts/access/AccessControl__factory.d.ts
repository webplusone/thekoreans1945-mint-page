import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { AccessControl, AccessControlInterface } from "../../../../@openzeppelin/contracts/access/AccessControl";
export declare class AccessControl__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
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
    static createInterface(): AccessControlInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AccessControl;
}
//# sourceMappingURL=AccessControl__factory.d.ts.map