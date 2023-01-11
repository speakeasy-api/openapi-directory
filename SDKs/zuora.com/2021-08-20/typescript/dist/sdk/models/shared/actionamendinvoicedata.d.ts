import { SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
import { ActionAmendInvoiceItem } from "./actionamendinvoiceitem";
export declare class ActionAmendInvoiceData extends SpeakeasyBase {
    invoice?: Invoice;
    invoiceItem?: ActionAmendInvoiceItem[];
}
