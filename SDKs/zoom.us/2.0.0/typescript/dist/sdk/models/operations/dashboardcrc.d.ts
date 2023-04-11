import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardCRCSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DashboardCRCRequest extends SpeakeasyBase {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: Date;
    /**
     * End date.
     */
    to: Date;
}
export declare class DashboardCrc200ApplicationXMLCRCPortsUsageCRCPortsHourUsage extends SpeakeasyBase {
    /**
     * Hour in the day, during which the CRC was used. For example if the CRC was used at 11 pm, the value of this field will be 23.
     */
    hour?: string;
    /**
     * The maximum number of concurrent ports that are being used in that hour.
     */
    maxUsage?: number;
    /**
     * The total number of H.323/SIP connections in that hour.
     */
    totalUsage?: number;
}
export declare class DashboardCrc200ApplicationXMLCRCPortsUsage extends SpeakeasyBase {
    crcPortsHourUsage?: DashboardCrc200ApplicationXMLCRCPortsUsageCRCPortsHourUsage[];
    /**
     * The date and time of the port usage.
     */
    dateTime?: Date;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * CRC usage returned.<br>
 * Only available for paid accounts that have enabled the Dashboard feature.
 */
export declare class DashboardCrc200ApplicationXML extends SpeakeasyBase {
    crcPortsUsage?: DashboardCrc200ApplicationXMLCRCPortsUsage[];
    /**
     * Start date for this report.
     */
    from?: Date;
    /**
     * End date for this report.
     */
    to?: Date;
}
export declare class DashboardCrc200ApplicationJSONCRCPortsUsageCRCPortsHourUsage extends SpeakeasyBase {
    /**
     * Hour in the day, during which the CRC was used. For example if the CRC was used at 11 pm, the value of this field will be 23.
     */
    hour?: string;
    /**
     * The maximum number of concurrent ports that are being used in that hour.
     */
    maxUsage?: number;
    /**
     * The total number of H.323/SIP connections in that hour.
     */
    totalUsage?: number;
}
export declare class DashboardCrc200ApplicationJSONCRCPortsUsage extends SpeakeasyBase {
    crcPortsHourUsage?: DashboardCrc200ApplicationJSONCRCPortsUsageCRCPortsHourUsage[];
    /**
     * The date and time of the port usage.
     */
    dateTime?: Date;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * CRC usage returned.<br>
 * Only available for paid accounts that have enabled the Dashboard feature.
 */
export declare class DashboardCrc200ApplicationJSON extends SpeakeasyBase {
    crcPortsUsage?: DashboardCrc200ApplicationJSONCRCPortsUsage[];
    /**
     * Start date for this report.
     */
    from?: Date;
    /**
     * End date for this report.
     */
    to?: Date;
}
export declare class DashboardCRCResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * CRC usage returned.<br>
     * Only available for paid accounts that have enabled the Dashboard feature.
     */
    dashboardCRC200ApplicationJSONObject?: DashboardCrc200ApplicationJSON;
}
