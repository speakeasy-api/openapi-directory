import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the credit memo that is auto-generated when reversing invoices.
 *
**/
export declare class PutReverseInvoiceResponseTypeCreditMemo extends SpeakeasyBase {
    id?: string;
}
export declare class PutReverseInvoiceResponseType extends SpeakeasyBase {
    creditMemo?: PutReverseInvoiceResponseTypeCreditMemo;
    success?: boolean;
}
