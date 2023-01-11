import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecordingDeletePathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare enum RecordingDeleteActionEnum {
    Trash = "trash",
    Delete = "delete"
}
export declare class RecordingDeleteQueryParams extends SpeakeasyBase {
    action?: RecordingDeleteActionEnum;
}
export declare class RecordingDeleteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class RecordingDeleteRequest extends SpeakeasyBase {
    pathParams: RecordingDeletePathParams;
    queryParams: RecordingDeleteQueryParams;
    security: RecordingDeleteSecurity;
}
export declare class RecordingDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
