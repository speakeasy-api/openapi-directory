import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Get from a single dictionary
 */
export declare enum GetTextPronunciationsSourceDictionaryEnum {
    Ahd5 = "ahd-5",
    Century = "century",
    Cmu = "cmu",
    Macmillan = "macmillan",
    Wiktionary = "wiktionary",
    Webster = "webster",
    Wordnet = "wordnet"
}
/**
 * Text pronunciation type
 */
export declare enum GetTextPronunciationsTypeFormatEnum {
    Ahd5 = "ahd-5",
    Arpabet = "arpabet",
    GcideDiacritical = "gcide-diacritical",
    Ipa = "IPA"
}
/**
 * If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
 */
export declare enum GetTextPronunciationsUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetTextPronunciationsRequest extends SpeakeasyBase {
    /**
     * Maximum number of results to return
     */
    limit?: number;
    /**
     * Get from a single dictionary
     */
    sourceDictionary?: GetTextPronunciationsSourceDictionaryEnum;
    /**
     * Text pronunciation type
     */
    typeFormat?: GetTextPronunciationsTypeFormatEnum;
    /**
     * If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
     */
    useCanonical?: GetTextPronunciationsUseCanonicalEnum;
    /**
     * Word to get pronunciations for
     */
    word: string;
}
export declare class GetTextPronunciationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
