import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBlockedListPathParams extends SpeakeasyBase {
    blockedListId: string;
}
export declare enum UpdateBlockedListApplicationJsonBlockTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
export declare enum UpdateBlockedListApplicationJsonMatchTypeEnum {
    PhoneNumber = "phoneNumber",
    Prefix = "prefix"
}
export declare enum UpdateBlockedListApplicationJsonStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class UpdateBlockedListApplicationJson extends SpeakeasyBase {
    blockType?: UpdateBlockedListApplicationJsonBlockTypeEnum;
    comment?: string;
    matchType?: UpdateBlockedListApplicationJsonMatchTypeEnum;
    phoneNumber?: string;
    status?: UpdateBlockedListApplicationJsonStatusEnum;
}
export declare enum UpdateBlockedListMultipartFormDataBlockTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
export declare enum UpdateBlockedListMultipartFormDataMatchTypeEnum {
    PhoneNumber = "phoneNumber",
    Prefix = "prefix"
}
export declare enum UpdateBlockedListMultipartFormDataStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class UpdateBlockedListMultipartFormData extends SpeakeasyBase {
    blockType?: UpdateBlockedListMultipartFormDataBlockTypeEnum;
    comment?: string;
    matchType?: UpdateBlockedListMultipartFormDataMatchTypeEnum;
    phoneNumber?: string;
    status?: UpdateBlockedListMultipartFormDataStatusEnum;
}
export declare class UpdateBlockedListRequests extends SpeakeasyBase {
    object?: UpdateBlockedListApplicationJson;
    object1?: UpdateBlockedListMultipartFormData;
}
export declare class UpdateBlockedListSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateBlockedListRequest extends SpeakeasyBase {
    pathParams: UpdateBlockedListPathParams;
    request?: UpdateBlockedListRequests;
    security: UpdateBlockedListSecurity;
}
export declare class UpdateBlockedListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateBlockedList204ApplicationJSONAny?: any;
}
