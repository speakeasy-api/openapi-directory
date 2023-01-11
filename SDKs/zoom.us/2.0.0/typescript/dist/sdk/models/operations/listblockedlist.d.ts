import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBlockedListQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
}
export declare class ListBlockedListSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum ListBlockedList200ApplicationJsonBlockedListBlockTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
export declare enum ListBlockedList200ApplicationJsonBlockedListMatchTypeEnum {
    PhoneNumber = "phoneNumber",
    Prefix = "prefix"
}
export declare enum ListBlockedList200ApplicationJsonBlockedListStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class ListBlockedList200ApplicationJsonBlockedList extends SpeakeasyBase {
    blockType?: ListBlockedList200ApplicationJsonBlockedListBlockTypeEnum;
    comment?: string;
    id?: string;
    matchType?: ListBlockedList200ApplicationJsonBlockedListMatchTypeEnum;
    phoneNumber?: string;
    status?: ListBlockedList200ApplicationJsonBlockedListStatusEnum;
}
export declare class ListBlockedList200ApplicationJson extends SpeakeasyBase {
    blockedList?: ListBlockedList200ApplicationJsonBlockedList[];
    nextPageToken?: string;
    pageSize?: number;
    totalRecords?: number;
}
export declare class ListBlockedListRequest extends SpeakeasyBase {
    queryParams: ListBlockedListQueryParams;
    security: ListBlockedListSecurity;
}
export declare class ListBlockedListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listBlockedList200ApplicationJSONObject?: ListBlockedList200ApplicationJson;
}
