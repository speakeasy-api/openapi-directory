import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTimezoneAreaLocationTxtRequest extends SpeakeasyBase {
    area: string;
    location: string;
}
export declare class GetTimezoneAreaLocationTxtResponse extends SpeakeasyBase {
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
