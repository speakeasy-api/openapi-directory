import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIpIpv4Request extends SpeakeasyBase {
    ipv4: string;
}
export declare class GetIpIpv4Response extends SpeakeasyBase {
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
