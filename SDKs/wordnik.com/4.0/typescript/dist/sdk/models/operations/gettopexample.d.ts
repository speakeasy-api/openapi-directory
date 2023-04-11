import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
 */
export declare enum GetTopExampleUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetTopExampleRequest extends SpeakeasyBase {
    /**
     * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
     */
    useCanonical?: GetTopExampleUseCanonicalEnum;
    /**
     * Word to fetch examples for
     */
    word: string;
}
export declare class GetTopExampleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
