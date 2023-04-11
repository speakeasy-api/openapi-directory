import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWordOfTheDayRequest extends SpeakeasyBase {
    /**
     * Fetches by date in yyyy-MM-dd
     */
    date?: string;
}
export declare class GetWordOfTheDayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
