import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListAccountPhoneNumbersExtensionTypeEnum {
    User = "user",
    CallQueue = "callQueue",
    AutoReceptionist = "autoReceptionist",
    CommonAreaPhone = "commonAreaPhone"
}
export declare enum ListAccountPhoneNumbersNumberTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}
export declare enum ListAccountPhoneNumbersTypeEnum {
    Assigned = "assigned",
    Unassigned = "unassigned",
    All = "all"
}
export declare class ListAccountPhoneNumbersQueryParams extends SpeakeasyBase {
    extensionType?: ListAccountPhoneNumbersExtensionTypeEnum;
    nextPageToken?: string;
    numberType?: ListAccountPhoneNumbersNumberTypeEnum;
    pageSize?: number;
    pendingNumbers?: boolean;
    siteId?: string;
    type?: ListAccountPhoneNumbersTypeEnum;
}
export declare class ListAccountPhoneNumbersSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum {
    User = "user",
    CallQueue = "callQueue",
    AutoReceptionist = "autoReceptionist",
    CommonAreaPhone = "commonAreaPhone"
}
export declare class ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee extends SpeakeasyBase {
    extensionNumber?: number;
    id?: string;
    name?: string;
    type?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum;
}
/**
 * Displayed when the `type` request parameter is `byoc`.
**/
export declare class ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare enum ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersNumberTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}
/**
 * Displayed when the `type` request parameter is `byoc`.
**/
export declare class ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare enum ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}
export declare enum ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersStatusEnum {
    Pending = "pending",
    Available = "available"
}
export declare class ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers extends SpeakeasyBase {
    assignee?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee;
    capability?: string[];
    carrier?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier;
    displayName?: string;
    id?: string;
    location?: string;
    number?: string;
    numberType?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersNumberTypeEnum;
    sipGroup?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup;
    site?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite;
    source?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSourceEnum;
    status?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersStatusEnum;
}
export declare class ListAccountPhoneNumbers200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    phoneNumbers?: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers[];
    totalRecords?: number;
}
export declare class ListAccountPhoneNumbersRequest extends SpeakeasyBase {
    queryParams: ListAccountPhoneNumbersQueryParams;
    security: ListAccountPhoneNumbersSecurity;
}
export declare class ListAccountPhoneNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listAccountPhoneNumbers200ApplicationJSONObject?: ListAccountPhoneNumbers200ApplicationJson;
}
