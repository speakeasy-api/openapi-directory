import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountPlanBaseDeletePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AccountPlanBaseDeleteApplicationJson extends SpeakeasyBase {
    action: string;
    comment?: string;
    reason?: number;
}
export declare class AccountPlanBaseDeleteMultipartFormData extends SpeakeasyBase {
    action: string;
    comment?: string;
    reason?: number;
}
export declare class AccountPlanBaseDeleteRequests extends SpeakeasyBase {
    object?: AccountPlanBaseDeleteApplicationJson;
    object1?: AccountPlanBaseDeleteMultipartFormData;
}
export declare class AccountPlanBaseDeleteRequest extends SpeakeasyBase {
    pathParams: AccountPlanBaseDeletePathParams;
    request?: AccountPlanBaseDeleteRequests;
}
export declare class AccountPlanBaseDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    accountPlanBaseDelete204ApplicationJSONObject?: Record<string, any>;
}
