import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRSforInvoiceItemAdjustmentManualDistributionPathParams extends SpeakeasyBase {
    invoiceItemAdjKey: string;
}
export declare class PostRSforInvoiceItemAdjustmentManualDistributionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostRSforInvoiceItemAdjustmentManualDistributionRequest extends SpeakeasyBase {
    pathParams: PostRSforInvoiceItemAdjustmentManualDistributionPathParams;
    headers: PostRSforInvoiceItemAdjustmentManualDistributionHeaders;
    request: Record<string, any>;
}
export declare class PostRSforInvoiceItemAdjustmentManualDistributionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postRevenueScheduleByTransactionResponseType?: shared.PostRevenueScheduleByTransactionResponseType;
    statusCode: number;
}
