import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDataQueryJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetDataQueryJobHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetDataQueryJobRequest extends SpeakeasyBase {
    pathParams: GetDataQueryJobPathParams;
    headers: GetDataQueryJobHeaders;
}
export declare class GetDataQueryJobResponse extends SpeakeasyBase {
    contentType: string;
    dataQueryErrorResponse?: shared.DataQueryErrorResponse;
    getDataQueryJobResponse?: shared.GetDataQueryJobResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
