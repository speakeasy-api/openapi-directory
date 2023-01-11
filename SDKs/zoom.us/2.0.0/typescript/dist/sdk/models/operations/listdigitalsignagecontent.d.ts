import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListDigitalSignageContentQueryParams extends SpeakeasyBase {
    folderId?: string;
    nextPageToken?: string;
    pageSize?: number;
    type?: string;
}
export declare class ListDigitalSignageContent200ApplicationJsonContents extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class ListDigitalSignageContent200ApplicationJson extends SpeakeasyBase {
    contents?: ListDigitalSignageContent200ApplicationJsonContents[];
    nextPageToken?: string;
    pageSize?: number;
}
export declare class ListDigitalSignageContentRequest extends SpeakeasyBase {
    queryParams: ListDigitalSignageContentQueryParams;
}
export declare class ListDigitalSignageContentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listDigitalSignageContent200ApplicationJSONObject?: ListDigitalSignageContent200ApplicationJson;
}
