import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssignPhoneToCallQueuePathParams extends SpeakeasyBase {
    callQueueId: string;
}
export declare class AssignPhoneToCallQueueApplicationJsonPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
}
export declare class AssignPhoneToCallQueueApplicationJson extends SpeakeasyBase {
    phoneNumbers?: AssignPhoneToCallQueueApplicationJsonPhoneNumbers[];
}
export declare class AssignPhoneToCallQueueMultipartFormDataPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
}
export declare class AssignPhoneToCallQueueMultipartFormData1 extends SpeakeasyBase {
    phoneNumbers?: AssignPhoneToCallQueueMultipartFormDataPhoneNumbers[];
}
export declare class AssignPhoneToCallQueueRequests extends SpeakeasyBase {
    object?: AssignPhoneToCallQueueApplicationJson;
    object1?: AssignPhoneToCallQueueMultipartFormData1;
}
export declare class AssignPhoneToCallQueueSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class AssignPhoneToCallQueueRequest extends SpeakeasyBase {
    pathParams: AssignPhoneToCallQueuePathParams;
    request?: AssignPhoneToCallQueueRequests;
    security: AssignPhoneToCallQueueSecurity;
}
export declare class AssignPhoneToCallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    assignPhoneToCallQueue204ApplicationJSONObject?: Record<string, any>;
}
