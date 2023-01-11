import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecordingGetPathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare class RecordingGetQueryParams extends SpeakeasyBase {
    includeFields?: string;
    ttl?: number;
}
export declare class RecordingGetSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum RecordingGetRecordingFileListRecordingFilesStatusEnum {
    Completed = "completed"
}
/**
 * Recording file object.
**/
export declare class RecordingGetRecordingFileListRecordingFiles extends SpeakeasyBase {
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
    status?: RecordingGetRecordingFileListRecordingFilesStatusEnum;
}
/**
 * List of recording file.
**/
export declare class RecordingGetRecordingFileList extends SpeakeasyBase {
    accountId?: string;
    downloadAccessToken?: string;
    duration?: number;
    hostId?: string;
    id?: string;
    recordingCount?: string;
    recordingFiles?: RecordingGetRecordingFileListRecordingFiles[];
    startTime?: Date;
    topic?: string;
    totalSize?: string;
    type?: string;
    uuid?: string;
}
export declare class RecordingGetRequest extends SpeakeasyBase {
    pathParams: RecordingGetPathParams;
    queryParams: RecordingGetQueryParams;
    security: RecordingGetSecurity;
}
export declare class RecordingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    recordingFileList?: RecordingGetRecordingFileList;
    statusCode: number;
}
