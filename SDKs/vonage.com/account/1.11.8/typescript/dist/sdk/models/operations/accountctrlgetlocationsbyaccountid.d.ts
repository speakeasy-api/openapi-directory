import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountCtrlGetLocationsByAccountIDSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class AccountCtrlGetLocationsByAccountIDRequest extends SpeakeasyBase {
    /**
     * The Vonage Business Cloud account ID
     */
    accountId: number;
}
export declare class AccountCtrlGetLocationsByAccountIDResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    locationsHalResponse?: shared.LocationsHalResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
