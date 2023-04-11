import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteInternalNumberRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the account. To delete an internal number from a sub account, provide the account ID of the sub account in the `accountId` path parameter. To delete an internal number from a master account, provide `me` as the value of the `accountId` path parameter.
     */
    accountId: string;
    /**
     * Unique identifier of the phone number. This value can be retrieved by calling the List Internal Numbers API.
     */
    numberId: string;
}
export declare class DeleteInternalNumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content** <br>
     *
     * @remarks
     * Number deleted.
     */
    deleteInternalNumber204ApplicationJSONAny?: any;
}
