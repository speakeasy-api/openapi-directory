import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The status of the billing document.
 *
 * @remarks
 *
 */
export declare enum GETBillingDocumentsStatusEnum {
    Draft = "Draft",
    Posted = "Posted",
    Canceled = "Canceled",
    Error = "Error"
}
export declare class GETBillingDocumentsRequest extends SpeakeasyBase {
    /**
     * An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header.
     *
     * @remarks
     *
     */
    zuoraEntityIds?: string;
    /**
     * A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
     *
     * @remarks
     *
     * The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`"`), and quote (`'`).
     *
     */
    zuoraTrackId?: string;
    /**
     * The ID of the customer account that the billing documents are associated with.
     *
     * @remarks
     *
     */
    accountId: string;
    /**
     * The date of the billing document. It represents the invoice date for invoices, credit memo date for credit memos, and debit memo date for debit memos.
     *
     * @remarks
     *
     */
    documentDate?: Date;
    /**
     * Number of rows returned per page.
     *
     * @remarks
     *
     */
    pageSize?: number;
    /**
     * This parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.
     *
     * @remarks
     *
     * If you do not specify any sortable field, the response data is sorted by the `documentDate` field in descending order.
     *
     * A sortable field uses the following form:
     *
     * *operator* *field_name*
     *
     * You can use at most two sortable fields in one URL path. Use a comma to separate sortable fields. For example:  *operator* *field_name*, *operator* *field_name*
     *
     * *operator* is used to mark the order of sequencing. The operator is optional. If you only specify the sortable field without any operator, the response data is sorted in descending order by this field.
     *
     *   - The `-` operator indicates an ascending order.
     *   - The `+` operator indicates a descending order.
     *
     * *field_name* indicates the name of a sortable field. The supported sortable fields of this operation are as below:
     *
     *   - documentDate
     *   - documentType
     *
     * Examples:
     * - /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1
     *   &sort=+documentDate,-documentType
     * - /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1
     *   &status=Posted&sort=+documentDate&page=2&pageSize=15
     *
     */
    sort?: string;
    /**
     * The status of the billing document.
     *
     * @remarks
     *
     */
    status?: GETBillingDocumentsStatusEnum;
}
export declare class GETBillingDocumentsResponse extends SpeakeasyBase {
    billingDocumentQueryResponseElementType?: shared.BillingDocumentQueryResponseElementType;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
