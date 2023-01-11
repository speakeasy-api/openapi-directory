import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupMembersCreatePathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GroupMembersCreateApplicationJsonMembers extends SpeakeasyBase {
    email?: string;
    id?: string;
}
export declare class GroupMembersCreateApplicationJson extends SpeakeasyBase {
    members?: GroupMembersCreateApplicationJsonMembers[];
}
export declare class GroupMembersCreateMultipartFormDataMembers extends SpeakeasyBase {
    email?: string;
    id?: string;
}
export declare class GroupMembersCreateMultipartFormData1 extends SpeakeasyBase {
    members?: GroupMembersCreateMultipartFormDataMembers[];
}
export declare class GroupMembersCreateRequests extends SpeakeasyBase {
    object?: GroupMembersCreateApplicationJson;
    object1?: GroupMembersCreateMultipartFormData1;
}
export declare class GroupMembersCreateRequest extends SpeakeasyBase {
    pathParams: GroupMembersCreatePathParams;
    request: GroupMembersCreateRequests;
}
export declare class GroupMembersCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    groupMembersCreate201ApplicationJSONAny?: any;
}
