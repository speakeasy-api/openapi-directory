import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRSforInvoiceItemDistributeByDateRangePathParams extends SpeakeasyBase {
    invoiceItemId: string;
}
export declare class PostRSforInvoiceItemDistributeByDateRangeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostRSforInvoiceItemDistributeByDateRangeRequest extends SpeakeasyBase {
    pathParams: PostRSforInvoiceItemDistributeByDateRangePathParams;
    headers: PostRSforInvoiceItemDistributeByDateRangeHeaders;
    request: Record<string, any>;
}
export declare class PostRSforInvoiceItemDistributeByDateRangeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postRevenueScheduleByTransactionResponseType?: shared.PostRevenueScheduleByTransactionResponseType;
    statusCode: number;
}
