import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateAccountOwnerSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdateAccountOwnerApplicationJSON extends SpeakeasyBase {
    /**
     * Email address of the new owner.
     */
    email: string;
}
export declare class UpdateAccountOwnerRequest extends SpeakeasyBase {
    requestBody?: UpdateAccountOwnerApplicationJSON;
    /**
     * Account Id of the account.
     */
    accountId: string;
}
export declare class UpdateAccountOwnerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204`<br>
     *
     * @remarks
     * Account owner updated.
     */
    updateAccountOwner204ApplicationJSONAny?: any;
}
