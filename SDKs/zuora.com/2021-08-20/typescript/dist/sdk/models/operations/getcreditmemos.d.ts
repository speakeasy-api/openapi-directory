import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCreditMemosQueryParams extends SpeakeasyBase {
    accountId?: string;
    amount?: number;
    appliedAmount?: number;
    autoApplyUponPosting?: boolean;
    createdById?: string;
    createdDate?: Date;
    creditMemoDate?: Date;
    currency?: string;
    excludeFromAutoApplyRules?: boolean;
    number?: string;
    pageSize?: number;
    referredInvoiceId?: string;
    refundAmount?: number;
    sort?: string;
    status?: shared.GlobalRequestPageSizeEnum2;
    targetDate?: Date;
    taxAmount?: number;
    totalTaxExemptAmount?: number;
    transferredToAccounting?: shared.GlobalRequestPageSizeEnum3;
    unappliedAmount?: number;
    updatedById?: string;
    updatedDate?: Date;
}
export declare class GetCreditMemosHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetCreditMemosRequest extends SpeakeasyBase {
    queryParams: GetCreditMemosQueryParams;
    headers: GetCreditMemosHeaders;
}
export declare class GetCreditMemosResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoCollectionType?: shared.GetCreditMemoCollectionType;
    headers: Record<string, string[]>;
    statusCode: number;
}
