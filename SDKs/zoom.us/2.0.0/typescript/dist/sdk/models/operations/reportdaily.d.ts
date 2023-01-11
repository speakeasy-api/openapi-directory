import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportDailyQueryParams extends SpeakeasyBase {
    month?: number;
    year?: number;
}
export declare class ReportDailySecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ReportDailyRequest extends SpeakeasyBase {
    queryParams: ReportDailyQueryParams;
    security: ReportDailySecurity;
}
export declare class ReportDailyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    reportDaily200ApplicationJSONAny?: any;
}
