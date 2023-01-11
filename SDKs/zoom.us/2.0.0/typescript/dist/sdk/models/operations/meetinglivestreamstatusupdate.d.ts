import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingLiveStreamStatusUpdatePathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare enum MeetingLiveStreamStatusUpdateApplicationJsonActionEnum {
    Start = "start",
    Stop = "stop"
}
/**
 * Update the settings of a live streaming session. The settings can only be updated for a live stream that has been stopped. You can not update the settings of an ongoing live stream.
**/
export declare class MeetingLiveStreamStatusUpdateApplicationJsonSettings extends SpeakeasyBase {
    activeSpeakerName?: boolean;
    displayName?: string;
}
/**
 * Meeting live stream status.
**/
export declare class MeetingLiveStreamStatusUpdateApplicationJson extends SpeakeasyBase {
    action?: MeetingLiveStreamStatusUpdateApplicationJsonActionEnum;
    settings?: MeetingLiveStreamStatusUpdateApplicationJsonSettings;
}
export declare enum MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum {
    Start = "start",
    Stop = "stop"
}
/**
 * Update the settings of a live streaming session. The settings can only be updated for a live stream that has been stopped. You can not update the settings of an ongoing live stream.
**/
export declare class MeetingLiveStreamStatusUpdateMultipartFormDataSettings extends SpeakeasyBase {
    activeSpeakerName?: boolean;
    displayName?: string;
}
/**
 * Meeting live stream status.
**/
export declare class MeetingLiveStreamStatusUpdateMultipartFormData extends SpeakeasyBase {
    action?: MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum;
    settings?: MeetingLiveStreamStatusUpdateMultipartFormDataSettings;
}
export declare class MeetingLiveStreamStatusUpdateRequests extends SpeakeasyBase {
    object?: MeetingLiveStreamStatusUpdateApplicationJson;
    object1?: MeetingLiveStreamStatusUpdateMultipartFormData;
}
export declare class MeetingLiveStreamStatusUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class MeetingLiveStreamStatusUpdateRequest extends SpeakeasyBase {
    pathParams: MeetingLiveStreamStatusUpdatePathParams;
    request: MeetingLiveStreamStatusUpdateRequests;
    security: MeetingLiveStreamStatusUpdateSecurity;
}
export declare class MeetingLiveStreamStatusUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
