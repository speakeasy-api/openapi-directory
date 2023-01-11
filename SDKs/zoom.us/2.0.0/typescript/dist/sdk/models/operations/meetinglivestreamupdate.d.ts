import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingLiveStreamUpdatePathParams extends SpeakeasyBase {
    meetingId: number;
}
/**
 * Meeting live stream.
**/
export declare class MeetingLiveStreamUpdateApplicationJson extends SpeakeasyBase {
    pageUrl?: string;
    streamKey: string;
    streamUrl: string;
}
/**
 * Meeting live stream.
**/
export declare class MeetingLiveStreamUpdateMultipartFormData extends SpeakeasyBase {
    pageUrl?: string;
    streamKey: string;
    streamUrl: string;
}
export declare class MeetingLiveStreamUpdateRequests extends SpeakeasyBase {
    object?: MeetingLiveStreamUpdateApplicationJson;
    object1?: MeetingLiveStreamUpdateMultipartFormData;
}
export declare class MeetingLiveStreamUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class MeetingLiveStreamUpdateRequest extends SpeakeasyBase {
    pathParams: MeetingLiveStreamUpdatePathParams;
    request: MeetingLiveStreamUpdateRequests;
    security: MeetingLiveStreamUpdateSecurity;
}
export declare class MeetingLiveStreamUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
