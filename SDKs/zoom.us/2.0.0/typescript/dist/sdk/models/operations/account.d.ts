import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare enum Account200ApplicationJsonOptionsPayModeEnum {
    Master = "master",
    Sub = "sub"
}
/**
 * Account options object.
**/
export declare class Account200ApplicationJsonOptions extends SpeakeasyBase {
    billingAutoRenew?: boolean;
    meetingConnectorList?: string[];
    payMode?: Account200ApplicationJsonOptionsPayModeEnum;
    roomConnectorList?: string[];
    shareMc?: boolean;
    shareRc?: boolean;
}
export declare class Account200ApplicationJson extends SpeakeasyBase {
    createdAt?: Date;
    id?: string;
    options?: Account200ApplicationJsonOptions;
    ownerEmail?: string;
    ownerId?: string;
    vanityUrl?: string;
}
export declare class AccountRequest extends SpeakeasyBase {
    pathParams: AccountPathParams;
}
export declare class AccountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    account200ApplicationJSONObject?: Account200ApplicationJson;
}
