import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Words {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a single random WordObject
     */
    getRandomWord(req: operations.GetRandomWordRequest, config?: AxiosRequestConfig): Promise<operations.GetRandomWordResponse>;
    /**
     * Returns an array of random WordObjects
     */
    getRandomWords(req: operations.GetRandomWordsRequest, config?: AxiosRequestConfig): Promise<operations.GetRandomWordsResponse>;
    /**
     * Returns a specific WordOfTheDay
     */
    getWordOfTheDay(req: operations.GetWordOfTheDayRequest, config?: AxiosRequestConfig): Promise<operations.GetWordOfTheDayResponse>;
    /**
     * Reverse dictionary search
     */
    reverseDictionary(req: operations.ReverseDictionaryRequest, config?: AxiosRequestConfig): Promise<operations.ReverseDictionaryResponse>;
    /**
     * Searches words
     */
    searchWords(req: operations.SearchWordsRequest, config?: AxiosRequestConfig): Promise<operations.SearchWordsResponse>;
}
