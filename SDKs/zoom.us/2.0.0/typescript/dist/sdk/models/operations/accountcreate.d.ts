import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountCreateApplicationJsonOptionsPayModeEnum {
    Master = "master",
    Sub = "sub"
}
/**
 * Account options object.
**/
export declare class AccountCreateApplicationJsonOptions extends SpeakeasyBase {
    billingAutoRenew?: boolean;
    meetingConnectorList?: string[];
    payMode?: AccountCreateApplicationJsonOptionsPayModeEnum;
    roomConnectorList?: string[];
    shareMc?: boolean;
    shareRc?: boolean;
}
/**
 * The account object represents an account on Zoom. The account owner is the user who created the account or had an account created for them. You can read more about the Zoom account structure <a href='https://medium.com/zoom-developer-blog/a-brief-look-at-zoom-account-structures-1d19c745bf8a' target='_blank'>here</a>.
**/
export declare class AccountCreateApplicationJson extends SpeakeasyBase {
    accountName?: string;
    email: string;
    firstName: string;
    lastName: string;
    options?: AccountCreateApplicationJsonOptions;
    password: string;
}
export declare enum AccountCreateMultipartFormDataOptionsPayModeEnum {
    Master = "master",
    Sub = "sub"
}
/**
 * Account options object.
**/
export declare class AccountCreateMultipartFormDataOptions extends SpeakeasyBase {
    billingAutoRenew?: boolean;
    meetingConnectorList?: string[];
    payMode?: AccountCreateMultipartFormDataOptionsPayModeEnum;
    roomConnectorList?: string[];
    shareMc?: boolean;
    shareRc?: boolean;
}
/**
 * The account object represents an account on Zoom. The account owner is the user who created the account or had an account created for them. You can read more about the Zoom account structure <a href='https://medium.com/zoom-developer-blog/a-brief-look-at-zoom-account-structures-1d19c745bf8a' target='_blank'>here</a>.
**/
export declare class AccountCreateMultipartFormData extends SpeakeasyBase {
    accountName?: string;
    email: string;
    firstName: string;
    lastName: string;
    options?: AccountCreateMultipartFormDataOptions;
    password: string;
}
export declare class AccountCreateRequests extends SpeakeasyBase {
    object?: AccountCreateApplicationJson;
    object1?: AccountCreateMultipartFormData;
}
export declare class AccountCreate201ApplicationJson extends SpeakeasyBase {
    createdAt?: string;
    id?: string;
    ownerEmail?: string;
    ownerId?: string;
}
export declare class AccountCreateRequest extends SpeakeasyBase {
    request: AccountCreateRequests;
}
export declare class AccountCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    accountCreate201ApplicationJSONObject?: AccountCreate201ApplicationJson;
}
