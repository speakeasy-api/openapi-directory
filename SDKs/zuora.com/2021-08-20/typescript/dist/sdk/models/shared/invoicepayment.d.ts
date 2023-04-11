import { SpeakeasyBase } from "../../../internal/utils";
export declare class InvoicePayment extends SpeakeasyBase {
    /**
     * The amount of the payment to apply to an invoice.
     *
     * @remarks
     *
     */
    amount: string;
    /**
     * The ID of the invoice that the payment is applied to.
     *
     * @remarks
     *
     */
    invoiceId: string;
    /**
     * The ID of the payment.
     *
     * @remarks
     *
     */
    paymentId?: string;
}
