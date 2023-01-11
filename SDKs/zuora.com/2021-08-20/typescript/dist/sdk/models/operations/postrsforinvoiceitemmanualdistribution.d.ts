import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRSforInvoiceItemManualDistributionPathParams extends SpeakeasyBase {
    invoiceItemId: string;
}
export declare class PostRSforInvoiceItemManualDistributionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostRSforInvoiceItemManualDistributionRequest extends SpeakeasyBase {
    pathParams: PostRSforInvoiceItemManualDistributionPathParams;
    headers: PostRSforInvoiceItemManualDistributionHeaders;
    request: Record<string, any>;
}
export declare class PostRSforInvoiceItemManualDistributionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postRevenueScheduleByTransactionResponseType?: shared.PostRevenueScheduleByTransactionResponseType;
    statusCode: number;
}
