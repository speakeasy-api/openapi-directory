import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetIpTxtResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * the current time for the timezone requested in plain text
     */
    dateTimeTextResponse?: string;
    /**
     * an error response in plain text
     */
    errorTextResponse?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
