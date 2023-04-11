import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteInternalCallOutCountryRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the Account.<br>
     *
     * @remarks
     * To remove Call-out country from a sub account, provide the account ID of the sub account in the `accountId` path parameter. To remove Call-out country from a master account, provide `me` as the value of the `accountId` path parameter.
     */
    accountId: string;
    /**
     * Two lettered Id of the country.
     */
    countryId: string;
}
export declare class DeleteInternalCallOutCountryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content** <br>
     *
     * @remarks
     * Country deleted.
     */
    deleteInternalCallOutCountry204ApplicationJSONAny?: any;
}
