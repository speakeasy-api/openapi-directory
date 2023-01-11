import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetABlockedListPathParams extends SpeakeasyBase {
    blockedListId: string;
}
export declare class GetABlockedListSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum GetABlockedList200ApplicationJsonBlockTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
export declare enum GetABlockedList200ApplicationJsonMatchTypeEnum {
    PhoneNumber = "phoneNumber",
    Prefix = "prefix"
}
export declare enum GetABlockedList200ApplicationJsonStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class GetABlockedList200ApplicationJson extends SpeakeasyBase {
    blockType?: GetABlockedList200ApplicationJsonBlockTypeEnum;
    comment?: string;
    id?: string;
    matchType?: GetABlockedList200ApplicationJsonMatchTypeEnum;
    phoneNumber?: string;
    status?: GetABlockedList200ApplicationJsonStatusEnum;
}
export declare class GetABlockedListRequest extends SpeakeasyBase {
    pathParams: GetABlockedListPathParams;
    security: GetABlockedListSecurity;
}
export declare class GetABlockedListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getABlockedList200ApplicationJSONObject?: GetABlockedList200ApplicationJson;
}
