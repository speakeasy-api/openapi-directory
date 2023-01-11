import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCommonAreaPhonesQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
}
export declare class ListCommonAreaPhonesSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans extends SpeakeasyBase {
    name?: string;
    type?: string;
}
export declare enum ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}
export declare class ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
    source?: ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbersSourceEnum;
}
export declare class ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class ListCommonAreaPhones200ApplicationJsonCommonAreaPhones extends SpeakeasyBase {
    callingPlans?: ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans[];
    deviceType?: string;
    displayName?: string;
    id?: string;
    macAddress?: string;
    phoneNumbers?: ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers[];
    site?: ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite;
    status?: string;
}
export declare class ListCommonAreaPhones200ApplicationJson extends SpeakeasyBase {
    commonAreaPhones?: ListCommonAreaPhones200ApplicationJsonCommonAreaPhones[];
    nextPageToken?: string;
    pageSize?: number;
    totalRecords?: number;
}
export declare class ListCommonAreaPhonesRequest extends SpeakeasyBase {
    queryParams: ListCommonAreaPhonesQueryParams;
    security: ListCommonAreaPhonesSecurity;
}
export declare class ListCommonAreaPhonesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listCommonAreaPhones200ApplicationJSONObject?: ListCommonAreaPhones200ApplicationJson;
}
