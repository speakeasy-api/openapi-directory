import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutBatchUpdateDebitMemosHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutBatchUpdateDebitMemosRequest extends SpeakeasyBase {
    headers: PutBatchUpdateDebitMemosHeaders;
    request: shared.PutBatchDebitMemosRequest;
}
export declare class PutBatchUpdateDebitMemosResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
