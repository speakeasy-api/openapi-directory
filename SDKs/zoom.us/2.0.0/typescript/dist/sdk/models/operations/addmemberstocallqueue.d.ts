import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddMembersToCallQueuePathParams extends SpeakeasyBase {
    callQueueId: string;
}
export declare class AddMembersToCallQueueApplicationJsonMembersUsers extends SpeakeasyBase {
    email?: string;
    id?: string;
}
/**
 * A maximum of 10 members can be added at a time.
**/
export declare class AddMembersToCallQueueApplicationJsonMembers extends SpeakeasyBase {
    commonAreaPhoneIds?: string[];
    users?: AddMembersToCallQueueApplicationJsonMembersUsers[];
}
export declare class AddMembersToCallQueueApplicationJson extends SpeakeasyBase {
    members?: AddMembersToCallQueueApplicationJsonMembers;
}
export declare class AddMembersToCallQueueMultipartFormDataMembersUsers extends SpeakeasyBase {
    email?: string;
    id?: string;
}
/**
 * A maximum of 10 members can be added at a time.
**/
export declare class AddMembersToCallQueueMultipartFormDataMembers extends SpeakeasyBase {
    commonAreaPhoneIds?: string[];
    users?: AddMembersToCallQueueMultipartFormDataMembersUsers[];
}
export declare class AddMembersToCallQueueMultipartFormData extends SpeakeasyBase {
    members?: AddMembersToCallQueueMultipartFormDataMembers;
}
export declare class AddMembersToCallQueueRequests extends SpeakeasyBase {
    object?: AddMembersToCallQueueApplicationJson;
    object1?: AddMembersToCallQueueMultipartFormData;
}
export declare class AddMembersToCallQueueSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class AddMembersToCallQueueRequest extends SpeakeasyBase {
    pathParams: AddMembersToCallQueuePathParams;
    request?: AddMembersToCallQueueRequests;
    security: AddMembersToCallQueueSecurity;
}
export declare class AddMembersToCallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    addMembersToCallQueue201ApplicationJSONObject?: Record<string, any>;
}
