import { SpeakeasyBase } from "../../../internal/utils";
export declare class InMeetingRecordingControlPathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare class InMeetingRecordingControlApplicationJson extends SpeakeasyBase {
    method?: string;
}
export declare class InMeetingRecordingControlMultipartFormData extends SpeakeasyBase {
    method?: string;
}
export declare class InMeetingRecordingControlRequests extends SpeakeasyBase {
    object?: InMeetingRecordingControlApplicationJson;
    object1?: InMeetingRecordingControlMultipartFormData;
}
export declare class InMeetingRecordingControlRequest extends SpeakeasyBase {
    pathParams: InMeetingRecordingControlPathParams;
    request?: InMeetingRecordingControlRequests;
}
export declare class InMeetingRecordingControlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    inMeetingRecordingControl202ApplicationJSONAny?: any;
}
