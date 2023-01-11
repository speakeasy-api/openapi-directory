import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class WebinarsQueryParams extends SpeakeasyBase {
    pageNumber?: number;
    pageSize?: number;
}
export declare class WebinarsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class WebinarsUserListWebinars extends SpeakeasyBase {
    agenda?: string;
    createdAt?: Date;
    duration?: number;
    hostId?: string;
    id?: number;
    joinUrl?: string;
    startTime?: Date;
    timezone?: string;
    topic?: string;
    type?: string;
    uuid?: string;
}
/**
 * Pagination Object.
**/
export declare class WebinarsUserList extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    totalRecords?: number;
    webinars?: WebinarsUserListWebinars[];
}
export declare class WebinarsRequest extends SpeakeasyBase {
    pathParams: WebinarsPathParams;
    queryParams: WebinarsQueryParams;
    security: WebinarsSecurity;
}
export declare class WebinarsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userList?: WebinarsUserList;
}
