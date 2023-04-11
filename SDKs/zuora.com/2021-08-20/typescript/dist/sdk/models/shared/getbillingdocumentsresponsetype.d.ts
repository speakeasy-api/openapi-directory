import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the billing document.
 *
 * @remarks
 *
 */
export declare enum GETBillingDocumentsResponseTypeDocumentTypeEnum {
    Invoice = "Invoice",
    CreditMemo = "CreditMemo",
    DebitMemo = "DebitMemo"
}
/**
 * The current status of the billing document.
 *
 * @remarks
 *
 */
export declare enum GETBillingDocumentsResponseTypeStatusEnum {
    Draft = "Draft",
    Posted = "Posted",
    Canceled = "Canceled",
    Error = "Error"
}
export declare class GETBillingDocumentsResponseType extends SpeakeasyBase {
    /**
     * The ID of the customer account associated with the billing document.
     */
    accountId?: string;
    /**
     * The total amount of the billing document.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The balance of the billing document.
     *
     * @remarks
     *
     */
    balance?: number;
    /**
     * The date of the billing document. The date can be the invoice date for invoices, credit memo date for credit memos, or debit memo date for debit memos.
     *
     * @remarks
     *
     */
    documentDate?: Date;
    /**
     * The number of the billing document.
     *
     * @remarks
     *
     */
    documentNumber?: string;
    /**
     * The type of the billing document.
     *
     * @remarks
     *
     */
    documentType?: GETBillingDocumentsResponseTypeDocumentTypeEnum;
    /**
     * The ID of the billing document.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The current status of the billing document.
     *
     * @remarks
     *
     */
    status?: GETBillingDocumentsResponseTypeStatusEnum;
}
