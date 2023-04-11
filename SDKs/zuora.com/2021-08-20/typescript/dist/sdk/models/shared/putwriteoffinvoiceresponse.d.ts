import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the credit memo that is automatically generated when writing off invoices.
 *
 * @remarks
 *
 */
export declare class PUTWriteOffInvoiceResponseCreditMemo extends SpeakeasyBase {
    /**
     * The ID of the credit memo that is created when the invoice is written off.
     *
     * @remarks
     *
     */
    id?: string;
}
export declare class PUTWriteOffInvoiceResponse extends SpeakeasyBase {
    /**
     * Container for the credit memo that is automatically generated when writing off invoices.
     *
     * @remarks
     *
     */
    creditMemo?: PUTWriteOffInvoiceResponseCreditMemo;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
