import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountCtrlGetAccountServicesByAccountIDSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class AccountCtrlGetAccountServicesByAccountIDRequest extends SpeakeasyBase {
    /**
     * The Vonage Business Cloud account ID
     */
    accountId: number;
}
export declare class AccountCtrlGetAccountServicesByAccountIDResponse extends SpeakeasyBase {
    /**
     * Success
     */
    accountHalResponse?: shared.AccountHalResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
