import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyGetInvoiceSplitItem extends SpeakeasyBase {
    /**
     *  The ID of the Zuora user who created the InvoiceSplitItem object.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date when the InvoiceSplitItem was created.
     *
     * @remarks
     * **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     *  The generation date of the new split invoice, in `yyyy-mm-dd` format.
     *
     * @remarks
     * **Character limit**: 29
     */
    invoiceDate?: Date;
    /**
     *  The new invoice after the split.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    invoiceId?: string;
    /**
     *  The ID of the invoice split associated with the individual invoice split item.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid invoice split ID
     */
    invoiceSplitId?: string;
    /**
     *  Indicates when the customer pays the split invoice.
     *
     * @remarks
     * **Values**: a valid, active payment term
     */
    paymentTerm?: string;
    /**
     *  Specifies the percentage of the original invoice that you want to be the balance of the split invoice. The total of the SplitPercentage field values for all of the InvoiceSplitItem objects in an InvoiceSplit object must equal 100.
     *
     * @remarks
     * **Values**:
     *
     */
    splitPercentage?: number;
    /**
     *  The ID of the Zuora user who last updated the invoice split.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the invoice split was last updated.
     *
     * @remarks
     * **Values**: automatically generated
     */
    updatedDate?: Date;
}
