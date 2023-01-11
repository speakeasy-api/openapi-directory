import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Account } from "./account";
import { Word } from "./word";
import { WordList } from "./wordlist";
import { WordLists } from "./wordlists";
import { Words } from "./words";
export declare const ServerList: readonly ["https://api.wordnik.com/v4"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    account: Account;
    word: Word;
    wordList: WordList;
    wordLists: WordLists;
    words: Words;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
