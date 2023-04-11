import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyGetRefundInvoicePayment extends SpeakeasyBase {
    /**
     *  The ID of the Zuora user who created the RefundInvoicePayment object.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date when the RefundInvoicePayment object was created.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     *  The unique ID of the invoice associated with this refund invoice payment.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid invoice ID
     */
    invoiceId?: string;
    /**
     *  The ID of the `InvoicePayment.Id`
     */
    invoicePaymentId?: string;
    /**
     * Specifies the amount of a refund applied against a payment. **Character limit**: 16 **Values**: automatically generated
     */
    refundAmount?: number;
    /**
     *  The ID of the Refund object
     *
     * @remarks
     * **Character limit**: 32 **Values**: inherited from `Refund.Id`
     */
    refundId?: string;
    /**
     *  The ID of the last user to update the object.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the object was last updated.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    updatedDate?: Date;
}
