import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTimezoneAreaLocationRequest extends SpeakeasyBase {
    area: string;
    location: string;
}
export declare class GetTimezoneAreaLocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * the current time for the timezone requested in JSON format
     */
    dateTimeJsonResponse?: shared.DateTimeJsonResponse;
    /**
     * an error response in JSON format
     */
    errorJsonResponse?: shared.ErrorJsonResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
