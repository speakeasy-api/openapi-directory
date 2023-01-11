import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecordingDeleteOnePathParams extends SpeakeasyBase {
    meetingId: string;
    recordingId: string;
}
export declare enum RecordingDeleteOneActionEnum {
    Trash = "trash",
    Delete = "delete"
}
export declare class RecordingDeleteOneQueryParams extends SpeakeasyBase {
    action?: RecordingDeleteOneActionEnum;
}
export declare class RecordingDeleteOneSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class RecordingDeleteOneRequest extends SpeakeasyBase {
    pathParams: RecordingDeleteOnePathParams;
    queryParams: RecordingDeleteOneQueryParams;
    security: RecordingDeleteOneSecurity;
}
export declare class RecordingDeleteOneResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
