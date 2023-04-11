import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyGetInvoicePayment extends SpeakeasyBase {
    /**
     *  The amount of the payment.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a valid currency amount
     */
    amount?: number;
    /**
     *  The user ID of the person who created the invoice payment.
     *
     * @remarks
     * **Character limit**: 32 **V****alues**: automatically generated
     */
    createdById?: string;
    /**
     *  The date when the invoice payment was generated.
     *
     * @remarks
     * **Character limit**: 29 **V****alues**: automatically generated
     */
    createdDate?: Date;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     *  The unique ID of the invoice associated with this invoice payment.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid invoice ID
     */
    invoiceId?: string;
    /**
     *  The unique ID of the payment associated with this invoice payment.
     *
     * @remarks
     * **Character limit**: 32 **V****alues**: a valid payment ID
     */
    paymentId?: string;
    /**
     * Specifies the amount of a refund applied against this InvoicePayment. **Character limit**: 16 **Values**: automatically generated
     */
    refundAmount?: number;
    /**
     *  The ID of the user who last updated the invoice payment.
     *
     * @remarks
     * **Character limit**: 32 **V****alues**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the invoice payment was last updated.
     *
     * @remarks
     * **Character limit**: 29 **V****alues**: automatically generated
     */
    updatedDate?: Date;
}
