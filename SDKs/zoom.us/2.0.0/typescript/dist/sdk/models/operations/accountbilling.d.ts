import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountBillingRequest extends SpeakeasyBase {
    /**
     * The account ID.
     */
    accountId: string;
}
/**
 * Billing Contact object.
 */
export declare class AccountBilling200ApplicationXML extends SpeakeasyBase {
    /**
     * Billing Contact's address.
     */
    address: string;
    /**
     * Billing Contact's apartment/suite.
     */
    apt?: string;
    /**
     * Billing Contact's city.
     */
    city: string;
    /**
     * Billing Contact's Country [ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) in abbreviated format.
     */
    country: string;
    /**
     * Billing Contact's email address.
     */
    email: string;
    /**
     * Billing Contact's first name.
     */
    firstName: string;
    /**
     * Billing Contact's last name.
     */
    lastName: string;
    /**
     * Billing Contact's phone number.
     */
    phoneNumber: string;
    /**
     * Billing Contact's state.
     */
    state: string;
    /**
     * Billing Contact's zip/postal code.
     */
    zip: string;
}
/**
 * Billing Contact object.
 */
export declare class AccountBilling200ApplicationJSON extends SpeakeasyBase {
    /**
     * Billing Contact's address.
     */
    address: string;
    /**
     * Billing Contact's apartment/suite.
     */
    apt?: string;
    /**
     * Billing Contact's city.
     */
    city: string;
    /**
     * Billing Contact's Country [ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) in abbreviated format.
     */
    country: string;
    /**
     * Billing Contact's email address.
     */
    email: string;
    /**
     * Billing Contact's first name.
     */
    firstName: string;
    /**
     * Billing Contact's last name.
     */
    lastName: string;
    /**
     * Billing Contact's phone number.
     */
    phoneNumber: string;
    /**
     * Billing Contact's state.
     */
    state: string;
    /**
     * Billing Contact's zip/postal code.
     */
    zip: string;
}
export declare class AccountBillingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Account billing contact information returned.
     */
    accountBilling200ApplicationJSONObject?: AccountBilling200ApplicationJSON;
}
