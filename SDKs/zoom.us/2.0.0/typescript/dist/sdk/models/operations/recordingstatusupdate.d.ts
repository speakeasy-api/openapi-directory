import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecordingStatusUpdatePathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare class RecordingStatusUpdateRequests extends SpeakeasyBase {
    any?: any;
    any1?: any;
}
export declare class RecordingStatusUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class RecordingStatusUpdateRequest extends SpeakeasyBase {
    pathParams: RecordingStatusUpdatePathParams;
    request: RecordingStatusUpdateRequests;
    security: RecordingStatusUpdateSecurity;
}
export declare class RecordingStatusUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
