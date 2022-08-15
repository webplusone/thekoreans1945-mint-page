import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface TheKoreans1945MinterInterface extends utils.Interface {
    functions: {
        "KOREANS()": FunctionFragment;
        "airdrop(address[])": FunctionFragment;
        "isListedNFT(address)": FunctionFragment;
        "isListedUser(address)": FunctionFragment;
        "mint(address)": FunctionFragment;
        "mintedAmount(address,address)": FunctionFragment;
        "nftForPreMint(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "preMintTime()": FunctionFragment;
        "publicMintTime()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setNFTForPreMint(address[],bool)": FunctionFragment;
        "setNFTWhitelist(address[],bool)": FunctionFragment;
        "setUserWhitelist(address[],bool)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "wlMintTime()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "KOREANS" | "airdrop" | "isListedNFT" | "isListedUser" | "mint" | "mintedAmount" | "nftForPreMint" | "owner" | "preMintTime" | "publicMintTime" | "renounceOwnership" | "setNFTForPreMint" | "setNFTWhitelist" | "setUserWhitelist" | "transferOwnership" | "wlMintTime"): FunctionFragment;
    encodeFunctionData(functionFragment: "KOREANS", values?: undefined): string;
    encodeFunctionData(functionFragment: "airdrop", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "isListedNFT", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isListedUser", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mintedAmount", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nftForPreMint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "preMintTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "publicMintTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setNFTForPreMint", values: [PromiseOrValue<string>[], PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setNFTWhitelist", values: [PromiseOrValue<string>[], PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setUserWhitelist", values: [PromiseOrValue<string>[], PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "wlMintTime", values?: undefined): string;
    decodeFunctionResult(functionFragment: "KOREANS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "airdrop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isListedNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isListedUser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintedAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nftForPreMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "preMintTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publicMintTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNFTForPreMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNFTWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUserWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wlMintTime", data: BytesLike): Result;
    events: {
        "Airdrop(address[],uint256,uint256)": EventFragment;
        "Mint(address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "SetNFTWhitelist(address,bool)": EventFragment;
        "SetUserWhitelist(address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Airdrop"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetNFTWhitelist"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetUserWhitelist"): EventFragment;
}
export interface AirdropEventObject {
    users: string[];
    initialId: BigNumber;
    lastId: BigNumber;
}
export declare type AirdropEvent = TypedEvent<[
    string[],
    BigNumber,
    BigNumber
], AirdropEventObject>;
export declare type AirdropEventFilter = TypedEventFilter<AirdropEvent>;
export interface MintEventObject {
    user: string;
    tokenId: BigNumber;
}
export declare type MintEvent = TypedEvent<[string, BigNumber], MintEventObject>;
export declare type MintEventFilter = TypedEventFilter<MintEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface SetNFTWhitelistEventObject {
    nft: string;
    status: boolean;
}
export declare type SetNFTWhitelistEvent = TypedEvent<[
    string,
    boolean
], SetNFTWhitelistEventObject>;
export declare type SetNFTWhitelistEventFilter = TypedEventFilter<SetNFTWhitelistEvent>;
export interface SetUserWhitelistEventObject {
    user: string;
    status: boolean;
}
export declare type SetUserWhitelistEvent = TypedEvent<[
    string,
    boolean
], SetUserWhitelistEventObject>;
export declare type SetUserWhitelistEventFilter = TypedEventFilter<SetUserWhitelistEvent>;
export interface TheKoreans1945Minter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TheKoreans1945MinterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        KOREANS(overrides?: CallOverrides): Promise<[string]>;
        airdrop(users: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isListedNFT(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isListedUser(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        mint(nft: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintedAmount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        nftForPreMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        preMintTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        publicMintTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setNFTForPreMint(nfts: PromiseOrValue<string>[], status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setNFTWhitelist(nfts: PromiseOrValue<string>[], status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUserWhitelist(users: PromiseOrValue<string>[], status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        wlMintTime(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    KOREANS(overrides?: CallOverrides): Promise<string>;
    airdrop(users: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isListedNFT(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isListedUser(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    mint(nft: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintedAmount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    nftForPreMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    preMintTime(overrides?: CallOverrides): Promise<BigNumber>;
    publicMintTime(overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setNFTForPreMint(nfts: PromiseOrValue<string>[], status: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setNFTWhitelist(nfts: PromiseOrValue<string>[], status: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUserWhitelist(users: PromiseOrValue<string>[], status: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    wlMintTime(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        KOREANS(overrides?: CallOverrides): Promise<string>;
        airdrop(users: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        isListedNFT(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isListedUser(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        mint(nft: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        mintedAmount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        nftForPreMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        preMintTime(overrides?: CallOverrides): Promise<BigNumber>;
        publicMintTime(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setNFTForPreMint(nfts: PromiseOrValue<string>[], status: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setNFTWhitelist(nfts: PromiseOrValue<string>[], status: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setUserWhitelist(users: PromiseOrValue<string>[], status: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        wlMintTime(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Airdrop(address[],uint256,uint256)"(users?: null, initialId?: null, lastId?: null): AirdropEventFilter;
        Airdrop(users?: null, initialId?: null, lastId?: null): AirdropEventFilter;
        "Mint(address,uint256)"(user?: null, tokenId?: null): MintEventFilter;
        Mint(user?: null, tokenId?: null): MintEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "SetNFTWhitelist(address,bool)"(nft?: null, status?: null): SetNFTWhitelistEventFilter;
        SetNFTWhitelist(nft?: null, status?: null): SetNFTWhitelistEventFilter;
        "SetUserWhitelist(address,bool)"(user?: null, status?: null): SetUserWhitelistEventFilter;
        SetUserWhitelist(user?: null, status?: null): SetUserWhitelistEventFilter;
    };
    estimateGas: {
        KOREANS(overrides?: CallOverrides): Promise<BigNumber>;
        airdrop(users: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isListedNFT(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isListedUser(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(nft: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintedAmount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        nftForPreMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        preMintTime(overrides?: CallOverrides): Promise<BigNumber>;
        publicMintTime(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setNFTForPreMint(nfts: PromiseOrValue<string>[], status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setNFTWhitelist(nfts: PromiseOrValue<string>[], status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUserWhitelist(users: PromiseOrValue<string>[], status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        wlMintTime(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        KOREANS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        airdrop(users: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isListedNFT(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isListedUser(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(nft: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintedAmount(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nftForPreMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        preMintTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        publicMintTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setNFTForPreMint(nfts: PromiseOrValue<string>[], status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setNFTWhitelist(nfts: PromiseOrValue<string>[], status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUserWhitelist(users: PromiseOrValue<string>[], status: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        wlMintTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=TheKoreans1945Minter.d.ts.map