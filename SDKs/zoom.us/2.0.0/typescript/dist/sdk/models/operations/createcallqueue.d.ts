import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCallQueueApplicationJsonMembersUsers extends SpeakeasyBase {
    email?: string;
    id?: string;
}
/**
 * A list of one or more phone users to be included in the call queue. Provide either users or common area phone(s). Provide at least one user in the users object.
**/
export declare class CreateCallQueueApplicationJsonMembers extends SpeakeasyBase {
    commonAreaPhoneIds?: string[];
    users?: CreateCallQueueApplicationJsonMembersUsers[];
}
export declare class CreateCallQueueApplicationJson extends SpeakeasyBase {
    description?: string;
    extensionNumber?: number;
    members?: CreateCallQueueApplicationJsonMembers;
    name: string;
    siteId: string;
}
export declare class CreateCallQueueMultipartFormDataMembersUsers extends SpeakeasyBase {
    email?: string;
    id?: string;
}
/**
 * A list of one or more phone users to be included in the call queue. Provide either users or common area phone(s). Provide at least one user in the users object.
**/
export declare class CreateCallQueueMultipartFormDataMembers extends SpeakeasyBase {
    commonAreaPhoneIds?: string[];
    users?: CreateCallQueueMultipartFormDataMembersUsers[];
}
export declare class CreateCallQueueMultipartFormData extends SpeakeasyBase {
    description?: string;
    extensionNumber?: number;
    members?: CreateCallQueueMultipartFormDataMembers;
    name: string;
    siteId: string;
}
export declare class CreateCallQueueRequests extends SpeakeasyBase {
    object?: CreateCallQueueApplicationJson;
    object1?: CreateCallQueueMultipartFormData;
}
export declare class CreateCallQueueSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class CreateCallQueue201ApplicationJson extends SpeakeasyBase {
    extensionNumber?: number;
    id?: string;
    name?: string;
    status?: string;
}
export declare class CreateCallQueueRequest extends SpeakeasyBase {
    request?: CreateCallQueueRequests;
    security: CreateCallQueueSecurity;
}
export declare class CreateCallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    createCallQueue201ApplicationJSONObject?: CreateCallQueue201ApplicationJson;
}
