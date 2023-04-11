import { SpeakeasyBase } from "../../../internal/utils";
export declare class InvoiceProcessingOptions extends SpeakeasyBase {
    /**
     *  The invoice date.
     */
    invoiceDate?: Date;
    /**
     *  The date that determines which charges to bill. Charges prior to this date or on this date are billed on the resulting invoices.
     */
    invoiceTargetDate: Date;
}
