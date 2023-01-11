import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportSignInSignOutActivitiesQueryParams extends SpeakeasyBase {
    from?: Date;
    nextPageToken?: string;
    pageSize?: number;
    to?: Date;
}
export declare class ReportSignInSignOutActivitiesSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ReportSignInSignOutActivities200ApplicationJsonActivityLogs extends SpeakeasyBase {
    clientType?: string;
    email?: string;
    ipAddress?: string;
    time?: Date;
    type?: string;
    version?: string;
}
/**
 * Report object
**/
export declare class ReportSignInSignOutActivities200ApplicationJson extends SpeakeasyBase {
    activityLogs?: ReportSignInSignOutActivities200ApplicationJsonActivityLogs[];
    from?: string;
    nextPageToken?: string;
    pageSize?: string;
    to?: string;
}
export declare class ReportSignInSignOutActivitiesRequest extends SpeakeasyBase {
    queryParams: ReportSignInSignOutActivitiesQueryParams;
    security: ReportSignInSignOutActivitiesSecurity;
}
export declare class ReportSignInSignOutActivitiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    reportSignInSignOutActivities200ApplicationJSONObject?: ReportSignInSignOutActivities200ApplicationJson;
}
