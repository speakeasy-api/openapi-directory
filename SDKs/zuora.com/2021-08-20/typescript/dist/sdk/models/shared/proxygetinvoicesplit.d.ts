import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyGetInvoiceSplit extends SpeakeasyBase {
    /**
     * The ID of the Zuora user who created the InvoiceSplit object. **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     * The date when the InvoiceSplit object was created. **Character limit**: 29 **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     *  The ID of the original invoice that the InvoiceSplit object splits. This field becomes read-only after the InvoiceSplit object is created.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid invoice ID
     */
    invoiceId?: string;
    /**
     * The ID of the Zuora user who last updated the invoice split. **Character limit**: 32 **Values**: automatically generated
     */
    updatedById?: string;
    /**
     * The date when the invoice split was last updated. **Values**: automatically generated
     */
    updatedDate?: Date;
}
