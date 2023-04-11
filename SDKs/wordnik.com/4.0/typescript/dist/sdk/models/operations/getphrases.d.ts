import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
 */
export declare enum GetPhrasesUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetPhrasesRequest extends SpeakeasyBase {
    /**
     * Maximum number of results to return
     */
    limit?: number;
    /**
     * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
     */
    useCanonical?: GetPhrasesUseCanonicalEnum;
    /**
     * Minimum WLMI for the phrase
     */
    wlmi?: number;
    /**
     * Word to fetch phrases for
     */
    word: string;
}
export declare class GetPhrasesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
