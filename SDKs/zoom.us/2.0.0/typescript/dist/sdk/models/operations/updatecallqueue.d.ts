import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCallQueuePathParams extends SpeakeasyBase {
    callQueueId: string;
}
export declare enum UpdateCallQueueApplicationJsonStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class UpdateCallQueueApplicationJson extends SpeakeasyBase {
    description?: string;
    extensionNumber?: number;
    name?: string;
    siteId?: string;
    status?: UpdateCallQueueApplicationJsonStatusEnum;
    timezone?: string;
}
export declare enum UpdateCallQueueMultipartFormDataStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class UpdateCallQueueMultipartFormData extends SpeakeasyBase {
    description?: string;
    extensionNumber?: number;
    name?: string;
    siteId?: string;
    status?: UpdateCallQueueMultipartFormDataStatusEnum;
    timezone?: string;
}
export declare class UpdateCallQueueRequests extends SpeakeasyBase {
    object?: UpdateCallQueueApplicationJson;
    object1?: UpdateCallQueueMultipartFormData;
}
export declare class UpdateCallQueueSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateCallQueueRequest extends SpeakeasyBase {
    pathParams: UpdateCallQueuePathParams;
    request?: UpdateCallQueueRequests;
    security: UpdateCallQueueSecurity;
}
export declare class UpdateCallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateCallQueue204ApplicationJSONAny?: any;
}
