import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ImGroupsImGroupListGroupsTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}
/**
 * Group object.
**/
export declare class ImGroupsImGroupListGroups extends SpeakeasyBase {
    id?: string;
    name?: string;
    searchByAccount?: boolean;
    searchByDomain?: boolean;
    searchByMaAccount?: boolean;
    totalMembers?: number;
    type?: ImGroupsImGroupListGroupsTypeEnum;
}
/**
 * List of IM Groups.
**/
export declare class ImGroupsImGroupList extends SpeakeasyBase {
    groups?: ImGroupsImGroupListGroups[];
    totalRecords?: number;
}
export declare class ImGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    imGroupList?: ImGroupsImGroupList;
    statusCode: number;
}
