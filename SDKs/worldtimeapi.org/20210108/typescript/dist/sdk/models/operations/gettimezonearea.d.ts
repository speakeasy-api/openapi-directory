import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTimezoneAreaRequest extends SpeakeasyBase {
    area: string;
}
export declare class GetTimezoneAreaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * an error response in JSON format
     */
    errorJsonResponse?: shared.ErrorJsonResponse;
    /**
     * the list of available timezones in JSON format
     */
    listJsonResponse?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
