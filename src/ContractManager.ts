import ERC721GArtifact from "./contracts/abi/artifacts/contracts/standards/ERC721G.sol/ERC721G.json";
import { ERC721G } from "./contracts/abi/typechain-types";
import ERC721Contract from "./contracts/ERC721Contract";

class ContractManager {

    private premintContracts: ERC721Contract<ERC721G>[] = [];
    private wlContracts: ERC721Contract<ERC721G>[] = [];

    constructor() {

        const premintaddrs = [
            "0x9f69C2a06c97fCAAc1E586b30Ea681c43975F052", // 소울링크
            "0xb48E526d935BEe3891222f6aC10A253e31CCaBE1", // 가이아 제네시스
            "0xe7df0DcA32eb23F4182055dC6a2053A3fF239315", // 가이아 슈퍼노바
            "0xFfFd676Bffd8797f34C2Adc3E808F374CAEe49D8", // 가이아 스테이블다오
        ];

        for (const addr of premintaddrs) {
            this.premintContracts.push(new ERC721Contract(addr, ERC721GArtifact.abi));
        }

        const wladdrs = [
            "0x9f69C2a06c97fCAAc1E586b30Ea681c43975F052", // 소울링크
            "0xb48E526d935BEe3891222f6aC10A253e31CCaBE1", // 가이아 제네시스
            "0xe7df0DcA32eb23F4182055dC6a2053A3fF239315", // 가이아 슈퍼노바
            "0xFfFd676Bffd8797f34C2Adc3E808F374CAEe49D8", // 가이아 스테이블다오

            "0xff80bd43e3f0e414afc70cb8ac1d3f0e6a303a2f", // 실타래1
            "0xa501af9131dd41c4f9913f48012b09e7d00f28ef", // 실타래2

            // 크립토펑크
            "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",

            // 샤크펑크
            "0xa59a5b0c946086d6884455a6a556729d747d16d3",

            // 고스트 프로젝트
            "0xdf3407636bbf3a015a8e48a079ef7ba49e687fd3",

            // 허스크
            "0x78b5c749780dc665fcf2c039ca13cb30110a4821",

            // 버그시티
            "0x0084837cc386150E56C0E93F2E59469579dA5443",
            "0xBb0C07dA78176a3691149b9227E7EBAFbD741De7",
        ];

        for (const addr of wladdrs) {
            this.wlContracts.push(new ERC721Contract(addr, ERC721GArtifact.abi));
        }
    }

    public async loadPremintBalance(address: string): Promise<{ addr: string, balance: number }> {
        const results: { addr: string, balance: number }[] = [];
        const promises: Promise<void>[] = [];
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

    public async loadWLBalance(address: string): Promise<{ addr: string, balance: number }> {
        const results: { addr: string, balance: number }[] = [];
        const promises: Promise<void>[] = [];
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

export default new ContractManager();
