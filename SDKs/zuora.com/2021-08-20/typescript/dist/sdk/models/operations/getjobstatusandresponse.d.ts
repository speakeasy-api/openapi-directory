import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJobStatusAndResponsePathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetJobStatusAndResponseHeaders extends SpeakeasyBase {
    zuoraTrackId?: string;
}
export declare enum GetJobStatusAndResponse200ApplicationJsonStatusEnum {
    Processing = "Processing",
    Failed = "Failed",
    Completed = "Completed"
}
export declare class GetJobStatusAndResponse200ApplicationJson extends SpeakeasyBase {
    errors?: string;
    result?: shared.JobResult;
    status?: GetJobStatusAndResponse200ApplicationJsonStatusEnum;
    success?: boolean;
}
export declare class GetJobStatusAndResponseRequest extends SpeakeasyBase {
    pathParams: GetJobStatusAndResponsePathParams;
    headers: GetJobStatusAndResponseHeaders;
}
export declare class GetJobStatusAndResponseResponse extends SpeakeasyBase {
    contentType: string;
    getJobStatusAndResponse200ApplicationJSONObject?: GetJobStatusAndResponse200ApplicationJson;
    headers: Record<string, string[]>;
    statusCode: number;
}
