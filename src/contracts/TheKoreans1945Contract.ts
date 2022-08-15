import { BigNumber } from "ethers";
import TheKoreans1945Artifact from "./abi/artifacts/contracts/TheKoreans1945.sol/TheKoreans1945.json";
import { TheKoreans1945 } from "./abi/typechain-types";
import ERC721Contract from "./ERC721Contract";

class TheKoreans1945Contract extends ERC721Contract<TheKoreans1945> {

    constructor() {
        super("0xA7298E98362625b65d08bB4C25992C503A0d48db", TheKoreans1945Artifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }
}

export default new TheKoreans1945Contract();
