import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
 */
export declare enum GetAudioUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetAudioRequest extends SpeakeasyBase {
    /**
     * Maximum number of results to return
     */
    limit?: number;
    /**
     * If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
     */
    useCanonical?: GetAudioUseCanonicalEnum;
    /**
     * Word to get audio for.
     */
    word: string;
}
export declare class GetAudioResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
