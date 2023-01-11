import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCallQueuesQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
}
export declare class ListCallQueuesSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum ListCallQueues200ApplicationJsonCallQueuesPhoneNumbersSourceEnum {
    Internal = "internal",
    External = "external"
}
export declare class ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
    source?: ListCallQueues200ApplicationJsonCallQueuesPhoneNumbersSourceEnum;
}
export declare class ListCallQueues200ApplicationJsonCallQueuesSite extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare enum ListCallQueues200ApplicationJsonCallQueuesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class ListCallQueues200ApplicationJsonCallQueues extends SpeakeasyBase {
    extensionNumber?: number;
    id?: string;
    name?: string;
    phoneNumbers?: ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers[];
    site?: ListCallQueues200ApplicationJsonCallQueuesSite;
    status?: ListCallQueues200ApplicationJsonCallQueuesStatusEnum;
}
export declare class ListCallQueues200ApplicationJson extends SpeakeasyBase {
    callQueues?: ListCallQueues200ApplicationJsonCallQueues[];
    nextPageToken?: string;
    pageSize?: number;
    totalRecords?: number;
}
export declare class ListCallQueuesRequest extends SpeakeasyBase {
    queryParams: ListCallQueuesQueryParams;
    security: ListCallQueuesSecurity;
}
export declare class ListCallQueuesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listCallQueues200ApplicationJSONObject?: ListCallQueues200ApplicationJson;
}
