import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ReportTelephoneTypeEnum {
    One = "1",
    Three = "3"
}
export declare class ReportTelephoneQueryParams extends SpeakeasyBase {
    from: Date;
    nextPageToken?: string;
    pageNumber?: number;
    pageSize?: number;
    to: Date;
    type?: ReportTelephoneTypeEnum;
}
export declare class ReportTelephoneSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum ReportTelephone200ApplicationJsonTelephonyUsageTypeEnum {
    TollFree = "toll-free",
    CallOut = "call-out",
    CallIn = "call-in",
    UsTollNumber = "US toll-number",
    GlobalTollNumber = "global toll-number",
    Premium = "premium",
    PremiumCallIn = "premium call-in"
}
export declare class ReportTelephone200ApplicationJsonTelephonyUsage extends SpeakeasyBase {
    callInNumber?: string;
    countryName?: string;
    dept?: string;
    duration?: number;
    endTime?: Date;
    hostEmail?: string;
    hostId?: string;
    hostName?: string;
    meetingId?: number;
    meetingType?: string;
    phoneNumber?: string;
    rate?: number;
    signaledNumber?: string;
    startTime?: Date;
    total?: number;
    type?: ReportTelephone200ApplicationJsonTelephonyUsageTypeEnum;
    uuid?: string;
}
export declare class ReportTelephone200ApplicationJson extends SpeakeasyBase {
    from?: Date;
    nextPageToken?: number;
    pageCount?: number;
    pageSize?: number;
    telephonyUsage?: ReportTelephone200ApplicationJsonTelephonyUsage[];
    to?: Date;
    totalRecords?: number;
}
export declare class ReportTelephoneRequest extends SpeakeasyBase {
    queryParams: ReportTelephoneQueryParams;
    security: ReportTelephoneSecurity;
}
export declare class ReportTelephoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    reportTelephone200ApplicationJSONObject?: ReportTelephone200ApplicationJson;
}
