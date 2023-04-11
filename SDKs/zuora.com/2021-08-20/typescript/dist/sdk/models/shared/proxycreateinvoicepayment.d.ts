import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyCreateInvoicePayment extends SpeakeasyBase {
    /**
     *  The amount of the payment.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a valid currency amount
     */
    amount: number;
    /**
     *  The unique ID of the invoice associated with this invoice payment.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid invoice ID
     */
    invoiceId: string;
    /**
     *  The unique ID of the payment associated with this invoice payment.
     *
     * @remarks
     * **Character limit**: 32 **V****alues**: a valid payment ID
     */
    paymentId: string;
}
