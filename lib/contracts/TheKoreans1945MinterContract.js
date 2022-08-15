"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TheKoreans1945Minter_json_1 = __importDefault(require("./abi/artifacts/contracts/TheKoreans1945Minter.sol/TheKoreans1945Minter.json"));
const Contract_1 = __importDefault(require("./Contract"));
class SoulinkMinterContract extends Contract_1.default {
    constructor() {
        super("0x564207a9cFb374157bfC6AC7472d8782bBc0F4D9", TheKoreans1945Minter_json_1.default.abi);
    }
    async isListedUser(user) {
        return await this.contract.isListedUser(user);
    }
    async mintedAmount(user, nft) {
        return await this.contract.mintedAmount(user, nft);
    }
    async mint(nft) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.mint(nft);
    }
}
exports.default = new SoulinkMinterContract();
//# sourceMappingURL=TheKoreans1945MinterContract.js.map