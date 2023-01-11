import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDebitMemosQueryParams extends SpeakeasyBase {
    accountId?: string;
    amount?: number;
    balance?: number;
    beAppliedAmount?: number;
    createdById?: string;
    createdDate?: Date;
    currency?: string;
    debitMemoDate?: Date;
    dueDate?: Date;
    number?: string;
    pageSize?: number;
    referredInvoiceId?: string;
    sort?: string;
    status?: shared.GlobalRequestPageSizeEnum2;
    targetDate?: Date;
    taxAmount?: number;
    totalTaxExemptAmount?: number;
    updatedById?: string;
    updatedDate?: Date;
}
export declare class GetDebitMemosHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetDebitMemosRequest extends SpeakeasyBase {
    queryParams: GetDebitMemosQueryParams;
    headers: GetDebitMemosHeaders;
}
export declare class GetDebitMemosResponse extends SpeakeasyBase {
    contentType: string;
    getDebitMemoCollectionType?: shared.GetDebitMemoCollectionType;
    headers: Record<string, string[]>;
    statusCode: number;
}
