import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTimezoneAreaLocationRegionRequest extends SpeakeasyBase {
    area: string;
    location: string;
    region: string;
}
export declare class GetTimezoneAreaLocationRegionResponse extends SpeakeasyBase {
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
