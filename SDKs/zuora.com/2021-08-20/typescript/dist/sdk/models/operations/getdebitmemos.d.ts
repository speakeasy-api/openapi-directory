import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * This parameter filters the response based on the `status` field.
 *
 * @remarks
 *
 */
export declare enum GETDebitMemosStatusEnum {
    Draft = "Draft",
    Posted = "Posted",
    Canceled = "Canceled",
    Error = "Error",
    PendingForTax = "PendingForTax",
    Generating = "Generating",
    CancelInProgress = "CancelInProgress"
}
export declare class GETDebitMemosRequest extends SpeakeasyBase {
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
     * This parameter filters the response based on the `accountId` field.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * This parameter filters the response based on the `amount` field.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * This parameter filters the response based on the `balance` field.
     *
     * @remarks
     *
     */
    balance?: number;
    /**
     * This parameter filters the response based on the `beAppliedAmount` field.
     *
     * @remarks
     *
     */
    beAppliedAmount?: number;
    /**
     * This parameter filters the response based on the `createdById` field.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * This parameter filters the response based on the `createdDate` field.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * This parameter filters the response based on the `currency` field.
     *
     * @remarks
     *
     */
    currency?: string;
    /**
     * This parameter filters the response based on the `debitMemoDate` field.
     *
     * @remarks
     *
     */
    debitMemoDate?: Date;
    /**
     * This parameter filters the response based on the `dueDate` field.
     *
     * @remarks
     *
     */
    dueDate?: Date;
    /**
     * This parameter filters the response based on the `number` field.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * Number of rows returned per page.
     *
     * @remarks
     *
     */
    pageSize?: number;
    /**
     * This parameter filters the response based on the `referredInvoiceId` field.
     *
     * @remarks
     *
     */
    referredInvoiceId?: string;
    /**
     * This parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.
     *
     * @remarks
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
     * By default, the response data is displayed in descending order by debit memo number.
     *
     * *field_name* indicates the name of a sortable field. The supported sortable fields of this operation are as below:
     *
     *   - number
     *   - accountId
     *   - debitMemoDate
     *   - targetDate
     *   - dueDate
     *   - amount
     *   - taxAmount
     *   - totalTaxExemptAmount
     *   - balance
     *   - beAppliedAmount
     *   - referredInvoiceId
     *   - createdDate
     *   - createdById
     *   - updatedDate
     *   - updatedById
     *
     * Examples:
     *
     * - /v1/debitmemos?sort=+number
     *
     * - /v1/debitmemos?status=Processed&sort=-number,+amount
     *
     */
    sort?: string;
    /**
     * This parameter filters the response based on the `status` field.
     *
     * @remarks
     *
     */
    status?: GETDebitMemosStatusEnum;
    /**
     * This parameter filters the response based on the `targetDate` field.
     *
     * @remarks
     *
     */
    targetDate?: Date;
    /**
     * This parameter filters the response based on the `taxAmount` field.
     *
     * @remarks
     *
     */
    taxAmount?: number;
    /**
     * This parameter filters the response based on the `totalTaxExemptAmount` field.
     *
     * @remarks
     *
     */
    totalTaxExemptAmount?: number;
    /**
     * This parameter filters the response based on the `updatedById` field.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * This parameter filters the response based on the `updatedDate` field.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
export declare class GETDebitMemosResponse extends SpeakeasyBase {
    contentType: string;
    getDebitMemoCollectionType?: shared.GETDebitMemoCollectionType;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
