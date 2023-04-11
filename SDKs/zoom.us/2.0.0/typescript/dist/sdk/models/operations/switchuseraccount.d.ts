import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SwitchUserAccountSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class SwitchUserAccountApplicationJSON extends SpeakeasyBase {
    /**
     * The Account ID of the account to which you would like move the user to.
     */
    accountId: string;
}
export declare class SwitchUserAccountRequest extends SpeakeasyBase {
    requestBody?: SwitchUserAccountApplicationJSON;
    accountId: string;
    userId: string;
}
export declare class SwitchUserAccountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code**: `204`<br>
     *
     * @remarks
     * User's account switched successfully.
     */
    switchUserAccount204ApplicationJSONAny?: any;
}
