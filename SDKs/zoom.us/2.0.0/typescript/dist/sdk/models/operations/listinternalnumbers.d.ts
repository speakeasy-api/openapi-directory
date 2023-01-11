import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListInternalNumbersPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class ListInternalNumbersQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
}
export declare enum ListInternalNumbers200ApplicationJsonInternalNumbersLanguagesEnum {
    EnGb = "en-GB",
    EnUs = "en-US",
    DeDe = "de-DE"
}
export declare class ListInternalNumbers200ApplicationJsonInternalNumbers extends SpeakeasyBase {
    allowForExternalMeetings?: boolean;
    allowJoin?: boolean;
    country: string;
    displayNumber: string;
    labels: string;
    languages: ListInternalNumbers200ApplicationJsonInternalNumbersLanguagesEnum;
    number: string;
    type: number;
    visible?: boolean;
}
export declare class ListInternalNumbers200ApplicationJson extends SpeakeasyBase {
    internalNumbers?: ListInternalNumbers200ApplicationJsonInternalNumbers[];
    nextPageToken?: string;
    pageSize?: number;
    totalRecords?: number;
}
export declare class ListInternalNumbersRequest extends SpeakeasyBase {
    pathParams: ListInternalNumbersPathParams;
    queryParams: ListInternalNumbersQueryParams;
}
export declare class ListInternalNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listInternalNumbers200ApplicationJSONObject?: ListInternalNumbers200ApplicationJson;
}
