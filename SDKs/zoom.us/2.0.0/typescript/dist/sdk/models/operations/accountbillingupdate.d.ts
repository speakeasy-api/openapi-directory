import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Billing Contact object.
 */
export declare class AccountBillingUpdateApplicationJSON extends SpeakeasyBase {
    /**
     * Billing Contact's address.
     */
    address?: string;
    /**
     * Billing Contact's apartment/suite.
     */
    apt?: string;
    /**
     * Billing Contact's city.
     */
    city?: string;
    /**
     * Billing Contact's country.
     */
    country?: string;
    /**
     * Billing Contact's email address.
     */
    email?: string;
    /**
     * Billing Contact's first name.
     */
    firstName?: string;
    /**
     * Billing Contact's last name.
     */
    lastName?: string;
    /**
     * Billing Contact's phone number.
     */
    phoneNumber?: string;
    /**
     * Billing Contact's state.
     */
    state?: string;
    /**
     * Billing Contact's zip/postal code.
     */
    zip?: string;
}
export declare class AccountBillingUpdateRequest extends SpeakeasyBase {
    requestBody: AccountBillingUpdateApplicationJSON;
    /**
     * The account ID.
     */
    accountId: string;
}
export declare class AccountBillingUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
