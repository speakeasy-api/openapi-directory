import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPastWebinarFilesPathParams extends SpeakeasyBase {
    webinarId: string;
}
export declare class ListPastWebinarFilesSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ListPastWebinarFiles200ApplicationJsonInMeetingFiles extends SpeakeasyBase {
    downloadUrl?: string;
    fileName?: string;
    fileSize?: number;
}
export declare class ListPastWebinarFiles200ApplicationJson extends SpeakeasyBase {
    inMeetingFiles?: ListPastWebinarFiles200ApplicationJsonInMeetingFiles[];
    totalRecords?: number;
}
export declare class ListPastWebinarFilesRequest extends SpeakeasyBase {
    pathParams: ListPastWebinarFilesPathParams;
    security: ListPastWebinarFilesSecurity;
}
export declare class ListPastWebinarFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listPastWebinarFiles200ApplicationJSONObject?: ListPastWebinarFiles200ApplicationJson;
}
