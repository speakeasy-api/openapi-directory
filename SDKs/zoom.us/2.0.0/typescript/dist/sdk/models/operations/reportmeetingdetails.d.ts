import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportMeetingDetailsPathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare class ReportMeetingDetailsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ReportMeetingDetails200ApplicationJsonCustomKeys extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class ReportMeetingDetails200ApplicationJsonTrackingFields extends SpeakeasyBase {
    field?: string;
    value?: string;
}
export declare class ReportMeetingDetails200ApplicationJson extends SpeakeasyBase {
    customKeys?: ReportMeetingDetails200ApplicationJsonCustomKeys[];
    dept?: string;
    duration?: number;
    endTime?: Date;
    id?: number;
    participantsCount?: number;
    startTime?: Date;
    topic?: string;
    totalMinutes?: number;
    trackingFields?: ReportMeetingDetails200ApplicationJsonTrackingFields[];
    type?: number;
    userEmail?: string;
    userName?: string;
    uuid?: string;
}
export declare class ReportMeetingDetailsRequest extends SpeakeasyBase {
    pathParams: ReportMeetingDetailsPathParams;
    security: ReportMeetingDetailsSecurity;
}
export declare class ReportMeetingDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    reportMeetingDetails200ApplicationJSONObject?: ReportMeetingDetails200ApplicationJson;
}
