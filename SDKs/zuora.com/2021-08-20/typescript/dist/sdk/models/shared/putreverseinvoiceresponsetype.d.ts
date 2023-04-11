import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the credit memo that is auto-generated when reversing invoices.
 *
 * @remarks
 *
 */
export declare class PutReverseInvoiceResponseTypeCreditMemo extends SpeakeasyBase {
    /**
     * ID of the credit memo.
     */
    id?: string;
}
export declare class PutReverseInvoiceResponseType extends SpeakeasyBase {
    /**
     * Container for the credit memo that is auto-generated when reversing invoices.
     *
     * @remarks
     *
     */
    creditMemo?: PutReverseInvoiceResponseTypeCreditMemo;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
