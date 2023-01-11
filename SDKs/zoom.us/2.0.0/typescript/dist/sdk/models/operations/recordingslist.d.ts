import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecordingsListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class RecordingsListQueryParams extends SpeakeasyBase {
    from?: Date;
    mc?: string;
    nextPageToken?: string;
    pageSize?: number;
    to?: Date;
    trash?: boolean;
    trashType?: string;
}
export declare class RecordingsListSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum {
    Completed = "completed"
}
/**
 * Recording file object.
**/
export declare class RecordingsListRecordingListRecordingFileListRecordingFiles extends SpeakeasyBase {
    deletedTime?: string;
    downloadUrl?: string;
    fileSize?: number;
    fileType?: string;
    id?: string;
    meetingId?: string;
    playUrl?: string;
    recordingEnd?: string;
    recordingStart?: string;
    recordingType?: string;
    status?: RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum;
}
/**
 * List of recording file.
**/
export declare class RecordingsListRecordingListRecordingFileList extends SpeakeasyBase {
    accountId?: string;
    duration?: number;
    hostId?: string;
    id?: string;
    recordingCount?: string;
    recordingFiles?: RecordingsListRecordingListRecordingFileListRecordingFiles[];
    startTime?: Date;
    topic?: string;
    totalSize?: string;
    type?: string;
    uuid?: string;
}
/**
 * Pagination object.
**/
export declare class RecordingsListRecordingList extends SpeakeasyBase {
    from?: Date;
    meetings?: RecordingsListRecordingListRecordingFileList[];
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    to?: Date;
    totalRecords?: number;
}
export declare class RecordingsListRequest extends SpeakeasyBase {
    pathParams: RecordingsListPathParams;
    queryParams: RecordingsListQueryParams;
    security: RecordingsListSecurity;
}
export declare class RecordingsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    recordingList?: RecordingsListRecordingList;
    statusCode: number;
}
