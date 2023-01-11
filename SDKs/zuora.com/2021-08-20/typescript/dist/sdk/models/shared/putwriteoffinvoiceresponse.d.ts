import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the credit memo that is automatically generated when writing off invoices.
 *
**/
export declare class PutWriteOffInvoiceResponseCreditMemo extends SpeakeasyBase {
    id?: string;
}
export declare class PutWriteOffInvoiceResponse extends SpeakeasyBase {
    creditMemo?: PutWriteOffInvoiceResponseCreditMemo;
    success?: boolean;
}
