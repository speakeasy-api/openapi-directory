import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Get from a single dictionary. Valid options: ahd-5, century, wiktionary, webster, and wordnet.
 */
export declare enum GetHyphenationSourceDictionaryEnum {
    Ahd5 = "ahd-5",
    Century = "century",
    Wiktionary = "wiktionary",
    Webster = "webster",
    Wordnet = "wordnet"
}
/**
 * If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
 */
export declare enum GetHyphenationUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetHyphenationRequest extends SpeakeasyBase {
    /**
     * Maximum number of results to return
     */
    limit?: number;
    /**
     * Get from a single dictionary. Valid options: ahd-5, century, wiktionary, webster, and wordnet.
     */
    sourceDictionary?: GetHyphenationSourceDictionaryEnum;
    /**
     * If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
     */
    useCanonical?: GetHyphenationUseCanonicalEnum;
    /**
     * Word to get syllables for
     */
    word: string;
}
export declare class GetHyphenationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
