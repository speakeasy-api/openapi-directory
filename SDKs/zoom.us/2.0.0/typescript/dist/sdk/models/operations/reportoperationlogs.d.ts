import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ReportOperationLogsCategoryTypeEnum {
    All = "all",
    User = "user",
    UserSettings = "user_settings",
    Account = "account",
    Billing = "billing",
    Im = "im",
    Recording = "recording",
    PhoneContacts = "phone_contacts",
    Webinar = "webinar",
    SubAccount = "sub_account",
    Role = "role",
    ZoomRooms = "zoom_rooms"
}
export declare class ReportOperationLogsQueryParams extends SpeakeasyBase {
    categoryType?: ReportOperationLogsCategoryTypeEnum;
    from: Date;
    nextPageToken?: string;
    pageSize?: number;
    to: Date;
}
export declare class ReportOperationLogsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ReportOperationLogs200ApplicationJsonOperationLogs extends SpeakeasyBase {
    action?: string;
    categoryType?: string;
    operationDetail?: string;
    operator?: string;
    time?: Date;
}
/**
 * Pagination object.
**/
export declare class ReportOperationLogs200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    operationLogs?: ReportOperationLogs200ApplicationJsonOperationLogs[];
    pageSize?: number;
}
export declare class ReportOperationLogsRequest extends SpeakeasyBase {
    queryParams: ReportOperationLogsQueryParams;
    security: ReportOperationLogsSecurity;
}
export declare class ReportOperationLogsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    reportOperationLogs200ApplicationJSONObject?: ReportOperationLogs200ApplicationJson;
}
