import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountBillingUpdatePathParams extends SpeakeasyBase {
    accountId: string;
}
/**
 * Billing Contact object.
**/
export declare class AccountBillingUpdateApplicationJson extends SpeakeasyBase {
    address?: string;
    apt?: string;
    city?: string;
    country?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    state?: string;
    zip?: string;
}
/**
 * Billing Contact object.
**/
export declare class AccountBillingUpdateMultipartFormData extends SpeakeasyBase {
    address?: string;
    apt?: string;
    city?: string;
    country?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    state?: string;
    zip?: string;
}
export declare class AccountBillingUpdateRequests extends SpeakeasyBase {
    object?: AccountBillingUpdateApplicationJson;
    object1?: AccountBillingUpdateMultipartFormData;
}
export declare class AccountBillingUpdateRequest extends SpeakeasyBase {
    pathParams: AccountBillingUpdatePathParams;
    request: AccountBillingUpdateRequests;
}
export declare class AccountBillingUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
