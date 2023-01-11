import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportCloudRecordingQueryParams extends SpeakeasyBase {
    from: Date;
    to: Date;
}
export declare class ReportCloudRecordingSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ReportCloudRecording200ApplicationJson extends SpeakeasyBase {
    cloudRecordingStorage?: any[];
    from?: Date;
    to?: Date;
}
export declare class ReportCloudRecordingRequest extends SpeakeasyBase {
    queryParams: ReportCloudRecordingQueryParams;
    security: ReportCloudRecordingSecurity;
}
export declare class ReportCloudRecordingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    reportCloudRecording200ApplicationJSONObject?: ReportCloudRecording200ApplicationJson;
}
