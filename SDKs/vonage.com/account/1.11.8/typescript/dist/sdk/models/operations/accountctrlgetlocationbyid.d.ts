import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountCtrlGetLocationByIDSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class AccountCtrlGetLocationByIDRequest extends SpeakeasyBase {
    /**
     * The Vonage Business Cloud account ID
     */
    accountId: number;
    /**
     * The Vonage Business Cloud location ID
     */
    locationId: number;
}
export declare class AccountCtrlGetLocationByIDResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    locationHalResponse?: shared.LocationHalResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
