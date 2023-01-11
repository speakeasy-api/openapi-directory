import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddAnumberToBlockedListApplicationJsonBlockTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
export declare enum AddAnumberToBlockedListApplicationJsonMatchTypeEnum {
    PhoneNumber = "phoneNumber",
    Prefix = "prefix"
}
export declare enum AddAnumberToBlockedListApplicationJsonStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class AddAnumberToBlockedListApplicationJson extends SpeakeasyBase {
    blockType?: AddAnumberToBlockedListApplicationJsonBlockTypeEnum;
    comment?: string;
    matchType?: AddAnumberToBlockedListApplicationJsonMatchTypeEnum;
    phoneNumber?: string;
    status?: AddAnumberToBlockedListApplicationJsonStatusEnum;
}
export declare enum AddAnumberToBlockedListMultipartFormDataBlockTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
export declare enum AddAnumberToBlockedListMultipartFormDataMatchTypeEnum {
    PhoneNumber = "phoneNumber",
    Prefix = "prefix"
}
export declare enum AddAnumberToBlockedListMultipartFormDataStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class AddAnumberToBlockedListMultipartFormData extends SpeakeasyBase {
    blockType?: AddAnumberToBlockedListMultipartFormDataBlockTypeEnum;
    comment?: string;
    matchType?: AddAnumberToBlockedListMultipartFormDataMatchTypeEnum;
    phoneNumber?: string;
    status?: AddAnumberToBlockedListMultipartFormDataStatusEnum;
}
export declare class AddAnumberToBlockedListRequests extends SpeakeasyBase {
    object?: AddAnumberToBlockedListApplicationJson;
    object1?: AddAnumberToBlockedListMultipartFormData;
}
export declare class AddAnumberToBlockedListSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class AddAnumberToBlockedList201ApplicationJson extends SpeakeasyBase {
    id?: string;
}
export declare class AddAnumberToBlockedListRequest extends SpeakeasyBase {
    request?: AddAnumberToBlockedListRequests;
    security: AddAnumberToBlockedListSecurity;
}
export declare class AddAnumberToBlockedListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    addAnumberToBlockedList201ApplicationJSONObject?: AddAnumberToBlockedList201ApplicationJson;
}
