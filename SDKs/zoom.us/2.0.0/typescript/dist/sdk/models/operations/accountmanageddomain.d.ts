import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountManagedDomainSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class AccountManagedDomainRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the account. To retrieve locked settings of the master account or a regular account, provide "me" as the value of this field. <br> To retrieve locked settings of a sub account, provide the Account ID of the sub account in this field.
     */
    accountId: string;
}
export declare class AccountManagedDomain200ApplicationXMLDomains extends SpeakeasyBase {
    /**
     * Domain name.
     */
    domain?: string;
    /**
     * Domain status.
     */
    status?: string;
}
/**
 * List of managed domains.
 */
export declare class AccountManagedDomain200ApplicationXML extends SpeakeasyBase {
    /**
     * List of managed domain objects.
     */
    domains?: AccountManagedDomain200ApplicationXMLDomains[];
    /**
     * Total records.
     */
    totalRecords?: number;
}
export declare class AccountManagedDomain200ApplicationJSONDomains extends SpeakeasyBase {
    /**
     * Domain name.
     */
    domain?: string;
    /**
     * Domain status.
     */
    status?: string;
}
/**
 * List of managed domains.
 */
export declare class AccountManagedDomain200ApplicationJSON extends SpeakeasyBase {
    /**
     * List of managed domain objects.
     */
    domains?: AccountManagedDomain200ApplicationJSONDomains[];
    /**
     * Total records.
     */
    totalRecords?: number;
}
export declare class AccountManagedDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Account managed domains returned.
     * **Error Code:** `200`<br>
     * Only available for paid account.
     *
     *
     */
    accountManagedDomain200ApplicationJSONObject?: AccountManagedDomain200ApplicationJSON;
}
