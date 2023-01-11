import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceFile } from "./invoicefile";
export declare class GetInvoiceFilesResponse extends SpeakeasyBase {
    invoiceFiles?: InvoiceFile[];
    nextPage?: string;
    success?: boolean;
}
