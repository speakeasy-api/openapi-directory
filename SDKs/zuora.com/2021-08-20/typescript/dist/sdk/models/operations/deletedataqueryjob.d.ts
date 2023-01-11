import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDataQueryJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class DeleteDataQueryJobHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteDataQueryJobRequest extends SpeakeasyBase {
    pathParams: DeleteDataQueryJobPathParams;
    headers: DeleteDataQueryJobHeaders;
}
export declare class DeleteDataQueryJobResponse extends SpeakeasyBase {
    contentType: string;
    dataQueryErrorResponse?: shared.DataQueryErrorResponse;
    deleteDataQueryJobResponse?: shared.DeleteDataQueryJobResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
