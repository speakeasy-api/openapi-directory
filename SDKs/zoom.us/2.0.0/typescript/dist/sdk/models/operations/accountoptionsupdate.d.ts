import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountOptionsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare enum AccountOptionsUpdateApplicationJsonPayModeEnum {
    Master = "master",
    Sub = "sub"
}
/**
 * Account options object.
**/
export declare class AccountOptionsUpdateApplicationJson extends SpeakeasyBase {
    billingAutoRenew?: boolean;
    meetingConnectorList?: string[];
    payMode?: AccountOptionsUpdateApplicationJsonPayModeEnum;
    roomConnectorList?: string[];
    shareMc?: boolean;
    shareRc?: boolean;
}
export declare enum AccountOptionsUpdateMultipartFormDataPayModeEnum {
    Master = "master",
    Sub = "sub"
}
/**
 * Account options object.
**/
export declare class AccountOptionsUpdateMultipartFormData extends SpeakeasyBase {
    billingAutoRenew?: boolean;
    meetingConnectorList?: string[];
    payMode?: AccountOptionsUpdateMultipartFormDataPayModeEnum;
    roomConnectorList?: string[];
    shareMc?: boolean;
    shareRc?: boolean;
}
export declare class AccountOptionsUpdateRequests extends SpeakeasyBase {
    object?: AccountOptionsUpdateApplicationJson;
    object1?: AccountOptionsUpdateMultipartFormData;
}
export declare class AccountOptionsUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class AccountOptionsUpdateRequest extends SpeakeasyBase {
    pathParams: AccountOptionsUpdatePathParams;
    request: AccountOptionsUpdateRequests;
    security: AccountOptionsUpdateSecurity;
}
export declare class AccountOptionsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
