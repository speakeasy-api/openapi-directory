import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Show duplicate examples from different sources
 */
export declare enum GetExamplesIncludeDuplicatesEnum {
    False = "false",
    True = "true"
}
/**
 * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
 */
export declare enum GetExamplesUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetExamplesRequest extends SpeakeasyBase {
    /**
     * Show duplicate examples from different sources
     */
    includeDuplicates?: GetExamplesIncludeDuplicatesEnum;
    /**
     * Maximum number of results to return
     */
    limit?: number;
    /**
     * Results to skip
     */
    skip?: number;
    /**
     * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
     */
    useCanonical?: GetExamplesUseCanonicalEnum;
    /**
     * Word to return examples for
     */
    word: string;
}
export declare class GetExamplesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
