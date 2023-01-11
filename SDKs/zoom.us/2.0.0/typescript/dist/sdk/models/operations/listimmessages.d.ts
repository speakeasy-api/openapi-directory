import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListimmessagesPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class ListimmessagesQueryParams extends SpeakeasyBase {
    channel?: string;
    chatUser?: string;
    date?: string;
    nextPageToken?: string;
    pageSize?: number;
}
export declare class ListimmessagesSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class Listimmessages200ApplicationJsonMessages extends SpeakeasyBase {
    dateTime?: Date;
    id?: string;
    message?: string;
    sender?: string;
    timstamp?: number;
}
export declare class Listimmessages200ApplicationJson extends SpeakeasyBase {
    date?: Date;
    messages?: Listimmessages200ApplicationJsonMessages[];
    nextPageToken?: string;
    pageSize?: number;
}
export declare class ListimmessagesRequest extends SpeakeasyBase {
    pathParams: ListimmessagesPathParams;
    queryParams: ListimmessagesQueryParams;
    security: ListimmessagesSecurity;
}
export declare class ListimmessagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listimmessages200ApplicationJSONObject?: Listimmessages200ApplicationJson;
}
