import { BigNumber } from "ethers";
import TheKoreans1945MinterArtifact from "./abi/artifacts/contracts/TheKoreans1945Minter.sol/TheKoreans1945Minter.json";
import { TheKoreans1945Minter } from "./abi/typechain-types";
import Contract from "./Contract";

class SoulinkMinterContract extends Contract<TheKoreans1945Minter> {

    constructor() {
        super("0x564207a9cFb374157bfC6AC7472d8782bBc0F4D9", TheKoreans1945MinterArtifact.abi);
    }

    public async isListedUser(user: string): Promise<boolean> {
        return await this.contract.isListedUser(user);
    }

    public async mintedAmount(user:string, nft: string): Promise<BigNumber> {
        return await this.contract.mintedAmount(user, nft);
    }

    public async mint(nft: string) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.mint(nft);
    }
}

export default new SoulinkMinterContract();
