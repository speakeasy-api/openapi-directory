import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPastMeetingFilesPathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare class ListPastMeetingFilesSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ListPastMeetingFiles200ApplicationJsonInMeetingFiles extends SpeakeasyBase {
    downloadUrl?: string;
    fileName?: string;
    fileSize?: number;
}
export declare class ListPastMeetingFiles200ApplicationJson extends SpeakeasyBase {
    inMeetingFiles?: ListPastMeetingFiles200ApplicationJsonInMeetingFiles[];
    totalRecords?: number;
}
export declare class ListPastMeetingFilesRequest extends SpeakeasyBase {
    pathParams: ListPastMeetingFilesPathParams;
    security: ListPastMeetingFilesSecurity;
}
export declare class ListPastMeetingFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listPastMeetingFiles200ApplicationJSONObject?: ListPastMeetingFiles200ApplicationJson;
}
