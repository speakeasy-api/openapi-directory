import { SpeakeasyBase } from "../../../internal/utils";
import { ActionSubscribeInvoiceItem } from "./actionsubscribeinvoiceitem";
import { InvoiceDataInvoice } from "./invoicedatainvoice";
export declare class ActionSubscribeInvoiceData extends SpeakeasyBase {
    invoice?: InvoiceDataInvoice;
    invoiceItem?: ActionSubscribeInvoiceItem[];
}
