import { SpeakeasyBase } from "../../../internal/utils";
import { ActionAmendInvoiceItem } from "./actionamendinvoiceitem";
import { Invoice } from "./invoice";
export declare class ActionAmendInvoiceData extends SpeakeasyBase {
    invoice?: Invoice;
    invoiceItem?: ActionAmendInvoiceItem[];
}
