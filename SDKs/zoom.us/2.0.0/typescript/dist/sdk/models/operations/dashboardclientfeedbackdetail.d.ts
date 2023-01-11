import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardClientFeedbackDetailPathParams extends SpeakeasyBase {
    feedbackId: string;
}
export declare class DashboardClientFeedbackDetailQueryParams extends SpeakeasyBase {
    from?: Date;
    nextPageToken?: string;
    pageSize?: number;
    to?: Date;
}
export declare class DashboardClientFeedbackDetailSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails extends SpeakeasyBase {
    email?: string;
    meetingId?: string;
    participantName?: string;
    time?: Date;
}
/**
 * Pagination object.
**/
export declare class DashboardClientFeedbackDetail200ApplicationJson extends SpeakeasyBase {
    clientFeedbackDetails?: DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails[];
    from?: Date;
    nextPageToken?: string;
    pageSize?: number;
    to?: Date;
}
export declare class DashboardClientFeedbackDetailRequest extends SpeakeasyBase {
    pathParams: DashboardClientFeedbackDetailPathParams;
    queryParams: DashboardClientFeedbackDetailQueryParams;
    security: DashboardClientFeedbackDetailSecurity;
}
export declare class DashboardClientFeedbackDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    dashboardClientFeedbackDetail200ApplicationJSONObject?: DashboardClientFeedbackDetail200ApplicationJson;
}
