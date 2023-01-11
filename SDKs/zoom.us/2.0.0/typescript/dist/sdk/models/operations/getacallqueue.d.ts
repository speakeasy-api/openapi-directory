import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetACallQueuePathParams extends SpeakeasyBase {
    callQueueId: string;
}
export declare class GetACallQueueSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetACallQueue200ApplicationJsonMembersCommonAreaPhones extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare enum GetACallQueue200ApplicationJsonMembersUsersLevelEnum {
    Manager = "manager",
    User = "user"
}
export declare class GetACallQueue200ApplicationJsonMembersUsers extends SpeakeasyBase {
    id?: string;
    level?: GetACallQueue200ApplicationJsonMembersUsersLevelEnum;
    name?: string;
    receiveCall?: boolean;
}
export declare class GetACallQueue200ApplicationJsonMembers extends SpeakeasyBase {
    commonAreaPhones?: GetACallQueue200ApplicationJsonMembersCommonAreaPhones[];
    users?: GetACallQueue200ApplicationJsonMembersUsers[];
}
export declare enum GetACallQueue200ApplicationJsonPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}
export declare class GetACallQueue200ApplicationJsonPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
    source?: GetACallQueue200ApplicationJsonPhoneNumbersSourceEnum;
}
export declare class GetACallQueue200ApplicationJsonSite extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare enum GetACallQueue200ApplicationJsonStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class GetACallQueue200ApplicationJson extends SpeakeasyBase {
    extensionNumber?: number;
    id?: string;
    members?: GetACallQueue200ApplicationJsonMembers;
    name?: string;
    phoneNumbers?: GetACallQueue200ApplicationJsonPhoneNumbers[];
    site?: GetACallQueue200ApplicationJsonSite;
    status?: GetACallQueue200ApplicationJsonStatusEnum;
}
export declare class GetACallQueueRequest extends SpeakeasyBase {
    pathParams: GetACallQueuePathParams;
    security: GetACallQueueSecurity;
}
export declare class GetACallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getACallQueue200ApplicationJSONObject?: GetACallQueue200ApplicationJson;
}
