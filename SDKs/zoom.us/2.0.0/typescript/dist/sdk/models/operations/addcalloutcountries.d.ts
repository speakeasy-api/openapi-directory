import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddCalloutCountriesApplicationJSONCalloutCountries extends SpeakeasyBase {
    /**
     * Two letter country code of the  call-out country.
     */
    id: string;
}
export declare class AddCalloutCountriesApplicationJSON extends SpeakeasyBase {
    /**
     * List of callout countries.
     */
    calloutCountries: AddCalloutCountriesApplicationJSONCalloutCountries[];
}
export declare class AddCalloutCountriesRequest extends SpeakeasyBase {
    requestBody?: AddCalloutCountriesApplicationJSON;
    /**
     * Unique identifier of the account. To add Call-out enabled countries to a sub account, provide the account ID of the sub account in the `accountId` path parameter. To add Call-out enabled countries to a master account, provide `me` as the value of the `accountId` path parameter.
     */
    accountId: string;
}
export declare class AddCalloutCountries201ApplicationXMLCalloutCountries extends SpeakeasyBase {
    /**
     * Country code for Phone number.
     */
    code?: string;
    /**
     * Country ID.
     */
    id?: string;
    /**
     * Name of the country.
     */
    name?: string;
}
/**
 * **HTTP Status Code:** `201` **Created** <br>
 *
 * @remarks
 * Call-out countries created.
 */
export declare class AddCalloutCountries201ApplicationXML extends SpeakeasyBase {
    /**
     * List of Call-out countries.
     */
    calloutCountries?: AddCalloutCountries201ApplicationXMLCalloutCountries[];
}
export declare class AddCalloutCountries201ApplicationJSONCalloutCountries extends SpeakeasyBase {
    /**
     * Country code for Phone number.
     */
    code?: string;
    /**
     * Country ID.
     */
    id?: string;
    /**
     * Name of the country.
     */
    name?: string;
}
/**
 * **HTTP Status Code:** `201` **Created** <br>
 *
 * @remarks
 * Call-out countries created.
 */
export declare class AddCalloutCountries201ApplicationJSON extends SpeakeasyBase {
    /**
     * List of Call-out countries.
     */
    calloutCountries?: AddCalloutCountries201ApplicationJSONCalloutCountries[];
}
export declare class AddCalloutCountriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201` **Created** <br>
     *
     * @remarks
     * Call-out countries created.
     */
    addCalloutCountries201ApplicationJSONObject?: AddCalloutCountries201ApplicationJSON;
}
