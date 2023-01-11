import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutBatchUpdateInvoicesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutBatchUpdateInvoicesRequest extends SpeakeasyBase {
    headers: PutBatchUpdateInvoicesHeaders;
    request: shared.PutBatchInvoiceType;
}
export declare class PutBatchUpdateInvoicesResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
