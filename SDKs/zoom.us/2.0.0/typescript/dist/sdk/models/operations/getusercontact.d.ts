import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserContactPathParams extends SpeakeasyBase {
    contactId: string;
}
export declare class GetUserContactQueryParams extends SpeakeasyBase {
    queryPresenceStatus?: boolean;
}
export declare class GetUserContactSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum GetUserContact200ApplicationJsonPresenceStatusEnum {
    DoNotDisturb = "Do_Not_Disturb",
    Away = "Away",
    Available = "Available",
    Offline = "Offline"
}
export declare class GetUserContact200ApplicationJson extends SpeakeasyBase {
    directNumbers?: string[];
    email?: string;
    extensionNumber?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    phoneNumber?: string;
    presenceStatus?: GetUserContact200ApplicationJsonPresenceStatusEnum;
}
export declare class GetUserContactRequest extends SpeakeasyBase {
    pathParams: GetUserContactPathParams;
    queryParams: GetUserContactQueryParams;
    security: GetUserContactSecurity;
}
export declare class GetUserContactResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getUserContact200ApplicationJSONObject?: GetUserContact200ApplicationJson;
}
