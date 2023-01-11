import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ListArchivedFilesQueryDataTypeEnum {
    MeetingStartTime = "meeting_start_time",
    ArchiveCompleteTime = "archive_complete_time"
}
export declare class ListArchivedFilesQueryParams extends SpeakeasyBase {
    from?: string;
    nextPageToken?: string;
    pageSize?: number;
    queryDataType?: ListArchivedFilesQueryDataTypeEnum;
    to?: string;
}
export declare class ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles extends SpeakeasyBase {
    downloadUrl?: string;
    fileExtension?: string;
    fileSize?: number;
    fileType?: string;
    id?: string;
    recordingType?: string;
    status?: string;
}
export declare class ListArchivedFiles200ApplicationJsonMeetings extends SpeakeasyBase {
    archiveFiles?: ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles[];
    duration?: number;
    hostId?: string;
    id?: number;
    recordingCount?: number;
    startTime?: string;
    timezone?: string;
    topic?: string;
    totalSize?: number;
    type?: number;
    uuid?: string;
}
export declare class ListArchivedFiles200ApplicationJson extends SpeakeasyBase {
    from?: string;
    meetings?: ListArchivedFiles200ApplicationJsonMeetings[];
    nextPageToken?: string;
    pageSize?: number;
    to?: string;
}
export declare class ListArchivedFilesRequest extends SpeakeasyBase {
    queryParams: ListArchivedFilesQueryParams;
}
export declare class ListArchivedFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listArchivedFiles200ApplicationJSONObject?: ListArchivedFiles200ApplicationJson;
}
