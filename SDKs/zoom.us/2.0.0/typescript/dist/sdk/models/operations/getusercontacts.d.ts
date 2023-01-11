import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserContactsQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    type?: string;
}
export declare class GetUserContactsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetUserContacts200ApplicationJsonContacts extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
}
export declare class GetUserContacts200ApplicationJson extends SpeakeasyBase {
    contacts?: GetUserContacts200ApplicationJsonContacts[];
    nextPageToken?: string;
    pageSize?: number;
}
export declare class GetUserContactsRequest extends SpeakeasyBase {
    queryParams: GetUserContactsQueryParams;
    security: GetUserContactsSecurity;
}
export declare class GetUserContactsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getUserContacts200ApplicationJSONObject?: GetUserContacts200ApplicationJson;
}
