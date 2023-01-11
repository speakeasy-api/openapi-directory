import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSharedLineGroupsQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
}
export declare enum ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbersStatusEnum {
    Pending = "pending",
    Available = "available"
}
export declare class ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
    status?: ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbersStatusEnum;
}
export declare class ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare enum ListSharedLineGroups200ApplicationJsonSharedLineGroupsStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class ListSharedLineGroups200ApplicationJsonSharedLineGroups extends SpeakeasyBase {
    displayName?: string;
    extensionNumber?: number;
    id?: string;
    phoneNumbers?: ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers[];
    site?: ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite;
    status?: ListSharedLineGroups200ApplicationJsonSharedLineGroupsStatusEnum;
}
export declare class ListSharedLineGroups200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    sharedLineGroups?: ListSharedLineGroups200ApplicationJsonSharedLineGroups[];
    totalRecords?: number;
}
export declare class ListSharedLineGroupsRequest extends SpeakeasyBase {
    queryParams: ListSharedLineGroupsQueryParams;
}
export declare class ListSharedLineGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listSharedLineGroups200ApplicationJSONObject?: ListSharedLineGroups200ApplicationJson;
}
