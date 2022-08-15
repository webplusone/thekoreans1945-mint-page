import { BigNumber } from "ethers";
import { TheKoreans1945 } from "./abi/typechain-types";
import ERC721Contract from "./ERC721Contract";
declare class TheKoreans1945Contract extends ERC721Contract<TheKoreans1945> {
    constructor();
    totalSupply(): Promise<BigNumber>;
}
declare const _default: TheKoreans1945Contract;
export default _default;
//# sourceMappingURL=TheKoreans1945Contract.d.ts.map