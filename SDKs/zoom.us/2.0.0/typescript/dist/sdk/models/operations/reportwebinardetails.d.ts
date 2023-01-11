import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportWebinarDetailsPathParams extends SpeakeasyBase {
    webinarId: string;
}
export declare class ReportWebinarDetailsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ReportWebinarDetails200ApplicationJsonCustomKeys extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class ReportWebinarDetails200ApplicationJsonTrackingFields extends SpeakeasyBase {
    field?: string;
    value?: string;
}
export declare class ReportWebinarDetails200ApplicationJson extends SpeakeasyBase {
    customKeys?: ReportWebinarDetails200ApplicationJsonCustomKeys[];
    dept?: string;
    duration?: number;
    endTime?: Date;
    id?: number;
    participantsCount?: number;
    startTime?: Date;
    topic?: string;
    totalMinutes?: number;
    trackingFields?: ReportWebinarDetails200ApplicationJsonTrackingFields[];
    type?: number;
    userEmail?: string;
    userName?: string;
    uuid?: string;
}
export declare class ReportWebinarDetailsRequest extends SpeakeasyBase {
    pathParams: ReportWebinarDetailsPathParams;
    security: ReportWebinarDetailsSecurity;
}
export declare class ReportWebinarDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    reportWebinarDetails200ApplicationJSONObject?: ReportWebinarDetails200ApplicationJson;
}
