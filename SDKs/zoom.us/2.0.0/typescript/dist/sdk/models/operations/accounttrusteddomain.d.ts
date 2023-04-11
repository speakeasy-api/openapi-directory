import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountTrustedDomainRequest extends SpeakeasyBase {
    /**
     * The account ID.
     */
    accountId: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Account trusted domains returned<br>
 * **Error Code:** `2001`<br> Account does not exist: $subAccountId.
 */
export declare class AccountTrustedDomain200ApplicationXML extends SpeakeasyBase {
    /**
     * List of trusted domains
     */
    trustedDomains?: string[];
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Account trusted domains returned<br>
 * **Error Code:** `2001`<br> Account does not exist: $subAccountId.
 */
export declare class AccountTrustedDomain200ApplicationJSON extends SpeakeasyBase {
    /**
     * List of trusted domains
     */
    trustedDomains?: string[];
}
export declare class AccountTrustedDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Account trusted domains returned<br>
     * **Error Code:** `2001`<br> Account does not exist: $subAccountId.
     */
    accountTrustedDomain200ApplicationJSONObject?: AccountTrustedDomain200ApplicationJSON;
}
