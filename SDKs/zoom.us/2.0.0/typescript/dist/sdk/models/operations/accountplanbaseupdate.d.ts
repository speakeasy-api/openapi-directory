import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountPlanBaseUpdatePathParams extends SpeakeasyBase {
    accountId: string;
}
/**
 * Account base plan object.
**/
export declare class AccountPlanBaseUpdateApplicationJson extends SpeakeasyBase {
    hosts: number;
    type: string;
}
/**
 * Account base plan object.
**/
export declare class AccountPlanBaseUpdateMultipartFormData extends SpeakeasyBase {
    hosts: number;
    type: string;
}
export declare class AccountPlanBaseUpdateRequests extends SpeakeasyBase {
    object?: AccountPlanBaseUpdateApplicationJson;
    object1?: AccountPlanBaseUpdateMultipartFormData;
}
export declare class AccountPlanBaseUpdateRequest extends SpeakeasyBase {
    pathParams: AccountPlanBaseUpdatePathParams;
    request: AccountPlanBaseUpdateRequests;
}
export declare class AccountPlanBaseUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
