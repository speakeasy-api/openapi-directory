import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardClientFeedbackQueryParams extends SpeakeasyBase {
    from: Date;
    to: Date;
}
export declare class DashboardClientFeedbackSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DashboardClientFeedback200ApplicationJsonClientFeedbacks extends SpeakeasyBase {
    feedbackId?: string;
    feedbackName?: string;
    participantsCount?: number;
}
export declare class DashboardClientFeedback200ApplicationJson extends SpeakeasyBase {
    clientFeedbacks?: DashboardClientFeedback200ApplicationJsonClientFeedbacks[];
    from?: Date;
    to?: Date;
    totalRecords?: number;
}
export declare class DashboardClientFeedbackRequest extends SpeakeasyBase {
    queryParams: DashboardClientFeedbackQueryParams;
    security: DashboardClientFeedbackSecurity;
}
export declare class DashboardClientFeedbackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    dashboardClientFeedback200ApplicationJSONObject?: DashboardClientFeedback200ApplicationJson;
}
