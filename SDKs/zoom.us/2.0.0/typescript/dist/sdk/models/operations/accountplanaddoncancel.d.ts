import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountPlanAddonCancelPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare enum AccountPlanAddonCancelApplicationJsonActionEnum {
    Cancel = "cancel"
}
/**
 * Account plan object
**/
export declare class AccountPlanAddonCancelApplicationJson extends SpeakeasyBase {
    action?: AccountPlanAddonCancelApplicationJsonActionEnum;
    comment?: string;
    reason?: number;
    type?: string;
}
export declare enum AccountPlanAddonCancelMultipartFormDataActionEnum {
    Cancel = "cancel"
}
/**
 * Account plan object
**/
export declare class AccountPlanAddonCancelMultipartFormData extends SpeakeasyBase {
    action?: AccountPlanAddonCancelMultipartFormDataActionEnum;
    comment?: string;
    reason?: number;
    type?: string;
}
export declare class AccountPlanAddonCancelRequests extends SpeakeasyBase {
    object?: AccountPlanAddonCancelApplicationJson;
    object1?: AccountPlanAddonCancelMultipartFormData;
}
export declare class AccountPlanAddonCancelSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class AccountPlanAddonCancelRequest extends SpeakeasyBase {
    pathParams: AccountPlanAddonCancelPathParams;
    request?: AccountPlanAddonCancelRequests;
    security: AccountPlanAddonCancelSecurity;
}
export declare class AccountPlanAddonCancelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    accountPlanAddonCancel204ApplicationJSONAny?: any;
}
