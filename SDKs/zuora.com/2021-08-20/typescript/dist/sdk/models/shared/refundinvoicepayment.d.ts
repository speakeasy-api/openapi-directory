import { SpeakeasyBase } from "../../../internal/utils";
export declare class RefundInvoicePayment extends SpeakeasyBase {
    /**
     * The ID of the invoice that the payment is applied to.
     *
     * @remarks
     *
     */
    invoiceId: string;
    /**
     * The amount of the payment that is refunded. The value of this field is `0` if no refund is made against the payment.
     *
     * @remarks
     *
     */
    refundAmount: string;
}
