import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
 */
export declare enum GetWordFrequencyUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetWordFrequencyRequest extends SpeakeasyBase {
    /**
     * Ending Year
     */
    endYear?: number;
    /**
     * Starting Year
     */
    startYear?: number;
    /**
     * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
     */
    useCanonical?: GetWordFrequencyUseCanonicalEnum;
    /**
     * Word to return
     */
    word: string;
}
export declare class GetWordFrequencyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
