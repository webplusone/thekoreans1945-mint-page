import { BigNumber } from "ethers";
import { TheKoreans1945Minter } from "./abi/typechain-types";
import Contract from "./Contract";
declare class SoulinkMinterContract extends Contract<TheKoreans1945Minter> {
    constructor();
    isListedUser(user: string): Promise<boolean>;
    mintedAmount(user: string, nft: string): Promise<BigNumber>;
    mint(nft: string): Promise<void>;
}
declare const _default: SoulinkMinterContract;
export default _default;
//# sourceMappingURL=TheKoreans1945MinterContract.d.ts.map