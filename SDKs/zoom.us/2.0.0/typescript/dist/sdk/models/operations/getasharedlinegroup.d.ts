import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetASharedLineGroupPathParams extends SpeakeasyBase {
    sharedLineGroupId: string;
}
export declare class GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class GetASharedLineGroup200ApplicationJsonMembersUsers extends SpeakeasyBase {
    id?: string;
    name?: string;
}
/**
 * View current [members](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups#h_3ffbbb77-a009-4c09-91e4-81fc264b61d6) of the shared line group.
**/
export declare class GetASharedLineGroup200ApplicationJsonMembers extends SpeakeasyBase {
    commonAreaPhones?: GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones[];
    users?: GetASharedLineGroup200ApplicationJsonMembersUsers[];
}
export declare class GetASharedLineGroup200ApplicationJsonPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
}
/**
 * Site assigned to the Shared Line Group.
**/
export declare class GetASharedLineGroup200ApplicationJsonSite extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare enum GetASharedLineGroup200ApplicationJsonStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class GetASharedLineGroup200ApplicationJson extends SpeakeasyBase {
    displayName?: string;
    extensionNumber?: number;
    id?: string;
    members?: GetASharedLineGroup200ApplicationJsonMembers;
    phoneNumbers?: GetASharedLineGroup200ApplicationJsonPhoneNumbers[];
    primaryNumber?: string;
    site?: GetASharedLineGroup200ApplicationJsonSite;
    status?: GetASharedLineGroup200ApplicationJsonStatusEnum;
    timezone?: string;
}
export declare class GetASharedLineGroupRequest extends SpeakeasyBase {
    pathParams: GetASharedLineGroupPathParams;
}
export declare class GetASharedLineGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getASharedLineGroup200ApplicationJSONObject?: GetASharedLineGroup200ApplicationJson;
}
