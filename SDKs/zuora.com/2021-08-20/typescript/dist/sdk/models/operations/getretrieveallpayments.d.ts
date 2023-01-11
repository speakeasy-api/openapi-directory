import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRetrieveAllPaymentsQueryParams extends SpeakeasyBase {
    accountId?: string;
    amount?: number;
    appliedAmount?: number;
    createdById?: string;
    createdDate?: Date;
    creditBalanceAmount?: number;
    currency?: string;
    effectiveDate?: Date;
    number?: string;
    pageSize?: number;
    refundAmount?: number;
    sort?: string;
    status?: shared.GlobalRequestPageSizeEnum5;
    type?: shared.GlobalRequestPageSizeEnum6;
    unappliedAmount?: number;
    updatedById?: string;
    updatedDate?: Date;
}
export declare class GetRetrieveAllPaymentsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRetrieveAllPaymentsRequest extends SpeakeasyBase {
    queryParams: GetRetrieveAllPaymentsQueryParams;
    headers: GetRetrieveAllPaymentsHeaders;
}
export declare class GetRetrieveAllPaymentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    paymentCollectionResponseType?: shared.PaymentCollectionResponseType;
    statusCode: number;
}
