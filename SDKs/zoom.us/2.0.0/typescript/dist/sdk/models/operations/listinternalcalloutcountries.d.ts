import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListInternalCalloutCountriesRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the account. To list Call-out enabled countries to a sub account, provide the account ID of the sub account in the `accountId` path parameter. To list Call-out enabled countries of a sub account, provide the account ID of the sub account in the `accountId` path parameter. To list Call-out enabled countries of a master account, provide `me` as the value of the `accountId` path parameter.
     */
    accountId: string;
}
export declare class ListInternalCalloutCountries200ApplicationXMLCalloutCountries extends SpeakeasyBase {
    /**
     * Country code.
     */
    code?: string;
    /**
     * Two letter country Id.
     */
    id?: string;
    /**
     * Name of the country.
     */
    name?: string;
}
/**
 * **HTTP Status Code:** `200` **OK** <br>
 *
 * @remarks
 * List of Internal Callout Countries returned.
 */
export declare class ListInternalCalloutCountries200ApplicationXML extends SpeakeasyBase {
    calloutCountries?: ListInternalCalloutCountries200ApplicationXMLCalloutCountries[];
    /**
     * The total number of records returned.
     */
    totalRecords?: number;
}
export declare class ListInternalCalloutCountries200ApplicationJSONCalloutCountries extends SpeakeasyBase {
    /**
     * Country code.
     */
    code?: string;
    /**
     * Two letter country Id.
     */
    id?: string;
    /**
     * Name of the country.
     */
    name?: string;
}
/**
 * **HTTP Status Code:** `200` **OK** <br>
 *
 * @remarks
 * List of Internal Callout Countries returned.
 */
export declare class ListInternalCalloutCountries200ApplicationJSON extends SpeakeasyBase {
    calloutCountries?: ListInternalCalloutCountries200ApplicationJSONCalloutCountries[];
    /**
     * The total number of records returned.
     */
    totalRecords?: number;
}
export declare class ListInternalCalloutCountriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK** <br>
     *
     * @remarks
     * List of Internal Callout Countries returned.
     */
    listInternalCalloutCountries200ApplicationJSONObject?: ListInternalCalloutCountries200ApplicationJSON;
}
