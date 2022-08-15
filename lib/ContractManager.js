"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ERC721G_json_1 = __importDefault(require("./contracts/abi/artifacts/contracts/standards/ERC721G.sol/ERC721G.json"));
const ERC721Contract_1 = __importDefault(require("./contracts/ERC721Contract"));
class ContractManager {
    constructor() {
        this.premintContracts = [];
        this.wlContracts = [];
        const premintaddrs = [
            "0x9f69C2a06c97fCAAc1E586b30Ea681c43975F052",
            "0xb48E526d935BEe3891222f6aC10A253e31CCaBE1",
            "0xe7df0DcA32eb23F4182055dC6a2053A3fF239315",
            "0xFfFd676Bffd8797f34C2Adc3E808F374CAEe49D8",
        ];
        for (const addr of premintaddrs) {
            this.premintContracts.push(new ERC721Contract_1.default(addr, ERC721G_json_1.default.abi));
        }
        const wladdrs = [
            "0x9f69C2a06c97fCAAc1E586b30Ea681c43975F052",
            "0xb48E526d935BEe3891222f6aC10A253e31CCaBE1",
            "0xe7df0DcA32eb23F4182055dC6a2053A3fF239315",
            "0xFfFd676Bffd8797f34C2Adc3E808F374CAEe49D8",
            "0xff80bd43e3f0e414afc70cb8ac1d3f0e6a303a2f",
            "0xa501af9131dd41c4f9913f48012b09e7d00f28ef",
            "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
            "0xa59a5b0c946086d6884455a6a556729d747d16d3",
            "0xdf3407636bbf3a015a8e48a079ef7ba49e687fd3",
            "0x78b5c749780dc665fcf2c039ca13cb30110a4821",
            "0x0084837cc386150E56C0E93F2E59469579dA5443",
            "0xBb0C07dA78176a3691149b9227E7EBAFbD741De7",
        ];
        for (const addr of wladdrs) {
            this.wlContracts.push(new ERC721Contract_1.default(addr, ERC721G_json_1.default.abi));
        }
    }
    async loadPremintBalance(address) {
        const results = [];
        const promises = [];
        for (const contract of this.premintContracts) {
            const promise = async () => {
                results.push({
                    addr: contract.address,
                    balance: (await contract.balanceOf(address)).toNumber(),
                });
            };
            promises.push(promise());
        }
        await Promise.all(promises);
        results.sort((a, b) => b.balance - a.balance);
        return results[0];
    }
    async loadWLBalance(address) {
        const results = [];
        const promises = [];
        for (const contract of this.wlContracts) {
            const promise = async () => {
                results.push({
                    addr: contract.address,
                    balance: (await contract.balanceOf(address)).toNumber(),
                });
            };
            promises.push(promise());
        }
        await Promise.all(promises);
        results.sort((a, b) => b.balance - a.balance);
        return results[0];
    }
}
exports.default = new ContractManager();
//# sourceMappingURL=ContractManager.js.map