import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountBillingPathParams extends SpeakeasyBase {
    accountId: string;
}
/**
 * Billing Contact object.
**/
export declare class AccountBilling200ApplicationJson extends SpeakeasyBase {
    address: string;
    apt?: string;
    city: string;
    country: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    state: string;
    zip: string;
}
export declare class AccountBillingRequest extends SpeakeasyBase {
    pathParams: AccountBillingPathParams;
}
export declare class AccountBillingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    accountBilling200ApplicationJSONObject?: AccountBilling200ApplicationJson;
}
