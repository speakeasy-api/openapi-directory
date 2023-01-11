import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRSforInvoiceItemAdjustmentDistributeByDateRangePathParams extends SpeakeasyBase {
    invoiceItemAdjKey: string;
}
export declare class PostRSforInvoiceItemAdjustmentDistributeByDateRangeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostRSforInvoiceItemAdjustmentDistributeByDateRangeRequest extends SpeakeasyBase {
    pathParams: PostRSforInvoiceItemAdjustmentDistributeByDateRangePathParams;
    headers: PostRSforInvoiceItemAdjustmentDistributeByDateRangeHeaders;
    request: Record<string, any>;
}
export declare class PostRSforInvoiceItemAdjustmentDistributeByDateRangeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postRevenueScheduleByTransactionResponseType?: shared.PostRevenueScheduleByTransactionResponseType;
    statusCode: number;
}
