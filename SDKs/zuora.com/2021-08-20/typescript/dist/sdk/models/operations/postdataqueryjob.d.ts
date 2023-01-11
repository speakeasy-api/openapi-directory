import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDataQueryJobHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostDataQueryJobRequest extends SpeakeasyBase {
    headers: PostDataQueryJobHeaders;
    request: shared.SubmitDataQueryRequest;
}
export declare class PostDataQueryJobResponse extends SpeakeasyBase {
    contentType: string;
    dataQueryErrorResponse?: shared.DataQueryErrorResponse;
    headers: Record<string, string[]>;
    statusCode: number;
    submitDataQueryResponse?: shared.SubmitDataQueryResponse;
}
