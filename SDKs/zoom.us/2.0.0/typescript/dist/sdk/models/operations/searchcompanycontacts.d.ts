import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchCompanyContactsQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    queryPresenceStatus?: string;
    searchKey: string;
}
export declare enum SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum {
    DoNotDisturb = "Do_Not_Disturb",
    Away = "Away",
    Available = "Available",
    Offline = "Offline"
}
export declare class SearchCompanyContacts200ApplicationJsonContacts extends SpeakeasyBase {
    dept?: string;
    directNumbers?: string[];
    email?: string;
    extensionNumber?: string;
    firstName?: string;
    id?: string;
    imGroupId?: string;
    imGroupName?: string;
    jobTitle?: string;
    lastName?: string;
    location?: string;
    phoneNumber?: string;
    presenceStatus?: SearchCompanyContacts200ApplicationJsonContactsPresenceStatusEnum;
    sipPhoneNumber?: string;
}
export declare class SearchCompanyContacts200ApplicationJson extends SpeakeasyBase {
    contacts?: SearchCompanyContacts200ApplicationJsonContacts[];
    nextPageToken?: string;
    pageSize?: number;
}
export declare class SearchCompanyContactsRequest extends SpeakeasyBase {
    queryParams: SearchCompanyContactsQueryParams;
}
export declare class SearchCompanyContactsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    searchCompanyContacts200ApplicationJSONObject?: SearchCompanyContacts200ApplicationJson;
}
