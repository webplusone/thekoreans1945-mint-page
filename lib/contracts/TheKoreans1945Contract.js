"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TheKoreans1945_json_1 = __importDefault(require("./abi/artifacts/contracts/TheKoreans1945.sol/TheKoreans1945.json"));
const ERC721Contract_1 = __importDefault(require("./ERC721Contract"));
class TheKoreans1945Contract extends ERC721Contract_1.default {
    constructor() {
        super("0xA7298E98362625b65d08bB4C25992C503A0d48db", TheKoreans1945_json_1.default.abi);
    }
    async totalSupply() {
        return await this.contract.totalSupply();
    }
}
exports.default = new TheKoreans1945Contract();
//# sourceMappingURL=TheKoreans1945Contract.js.map