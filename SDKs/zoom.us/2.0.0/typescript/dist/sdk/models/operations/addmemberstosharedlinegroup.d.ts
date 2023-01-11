import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddMembersToSharedLineGroupPathParams extends SpeakeasyBase {
    sharedLineGroupId: string;
}
export declare class AddMembersToSharedLineGroupApplicationJsonMembersUsers extends SpeakeasyBase {
    email?: string;
    id?: string;
}
/**
 * Members can comprise of users on the account as well as common area phones. You can add a maximum of 10 members at once.
**/
export declare class AddMembersToSharedLineGroupApplicationJsonMembers extends SpeakeasyBase {
    commonAreaPhoneIds?: string[];
    users?: AddMembersToSharedLineGroupApplicationJsonMembersUsers[];
}
export declare class AddMembersToSharedLineGroupApplicationJson extends SpeakeasyBase {
    members?: AddMembersToSharedLineGroupApplicationJsonMembers;
}
export declare class AddMembersToSharedLineGroupMultipartFormDataMembersUsers extends SpeakeasyBase {
    email?: string;
    id?: string;
}
/**
 * Members can comprise of users on the account as well as common area phones. You can add a maximum of 10 members at once.
**/
export declare class AddMembersToSharedLineGroupMultipartFormDataMembers extends SpeakeasyBase {
    commonAreaPhoneIds?: string[];
    users?: AddMembersToSharedLineGroupMultipartFormDataMembersUsers[];
}
export declare class AddMembersToSharedLineGroupMultipartFormData extends SpeakeasyBase {
    members?: AddMembersToSharedLineGroupMultipartFormDataMembers;
}
export declare class AddMembersToSharedLineGroupRequests extends SpeakeasyBase {
    object?: AddMembersToSharedLineGroupApplicationJson;
    object1?: AddMembersToSharedLineGroupMultipartFormData;
}
export declare class AddMembersToSharedLineGroupRequest extends SpeakeasyBase {
    pathParams: AddMembersToSharedLineGroupPathParams;
    request?: AddMembersToSharedLineGroupRequests;
}
export declare class AddMembersToSharedLineGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    addMembersToSharedLineGroup201ApplicationJSONAny?: any;
}
