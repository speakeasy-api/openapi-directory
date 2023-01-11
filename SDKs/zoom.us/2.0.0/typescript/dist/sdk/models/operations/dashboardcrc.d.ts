import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardCrcQueryParams extends SpeakeasyBase {
    from: Date;
    to: Date;
}
export declare class DashboardCrcSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DashboardCrc200ApplicationJsonCrcPortsUsageCrcPortsHourUsage extends SpeakeasyBase {
    hour?: string;
    maxUsage?: number;
    totalUsage?: number;
}
export declare class DashboardCrc200ApplicationJsonCrcPortsUsage extends SpeakeasyBase {
    crcPortsHourUsage?: DashboardCrc200ApplicationJsonCrcPortsUsageCrcPortsHourUsage[];
    dateTime?: Date;
}
export declare class DashboardCrc200ApplicationJson extends SpeakeasyBase {
    crcPortsUsage?: DashboardCrc200ApplicationJsonCrcPortsUsage[];
    from?: Date;
    to?: Date;
}
export declare class DashboardCrcRequest extends SpeakeasyBase {
    queryParams: DashboardCrcQueryParams;
    security: DashboardCrcSecurity;
}
export declare class DashboardCrcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    dashboardCRC200ApplicationJSONObject?: DashboardCrc200ApplicationJson;
}
