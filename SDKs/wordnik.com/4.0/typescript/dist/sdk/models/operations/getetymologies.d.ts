import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
 */
export declare enum GetEtymologiesUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetEtymologiesRequest extends SpeakeasyBase {
    /**
     * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
     */
    useCanonical?: GetEtymologiesUseCanonicalEnum;
    /**
     * Word to return
     */
    word: string;
}
export declare class GetEtymologiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
