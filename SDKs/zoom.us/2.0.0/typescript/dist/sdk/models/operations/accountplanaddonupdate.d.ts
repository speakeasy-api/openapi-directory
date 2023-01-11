import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountPlanAddonUpdatePathParams extends SpeakeasyBase {
    accountId: string;
}
/**
 * Account plan object.
**/
export declare class AccountPlanAddonUpdateApplicationJson extends SpeakeasyBase {
    hosts: number;
    type: string;
}
/**
 * Account plan object.
**/
export declare class AccountPlanAddonUpdateMultipartFormData extends SpeakeasyBase {
    hosts: number;
    type: string;
}
export declare class AccountPlanAddonUpdateRequests extends SpeakeasyBase {
    object?: AccountPlanAddonUpdateApplicationJson;
    object1?: AccountPlanAddonUpdateMultipartFormData;
}
export declare class AccountPlanAddonUpdateRequest extends SpeakeasyBase {
    pathParams: AccountPlanAddonUpdatePathParams;
    request: AccountPlanAddonUpdateRequests;
}
export declare class AccountPlanAddonUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
