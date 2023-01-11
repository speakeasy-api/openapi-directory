import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecordingStatusUpdateOnePathParams extends SpeakeasyBase {
    meetingId: string;
    recordingId: string;
}
export declare class RecordingStatusUpdateOneRequests extends SpeakeasyBase {
    any?: any;
    any1?: any;
}
export declare class RecordingStatusUpdateOneSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class RecordingStatusUpdateOneRequest extends SpeakeasyBase {
    pathParams: RecordingStatusUpdateOnePathParams;
    request: RecordingStatusUpdateOneRequests;
    security: RecordingStatusUpdateOneSecurity;
}
export declare class RecordingStatusUpdateOneResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
