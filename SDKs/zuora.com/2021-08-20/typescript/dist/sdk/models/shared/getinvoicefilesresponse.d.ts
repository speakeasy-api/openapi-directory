import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceFile } from "./invoicefile";
export declare class GETInvoiceFilesResponse extends SpeakeasyBase {
    /**
     * Container for invoice PDF files.
     *
     * @remarks
     *
     */
    invoiceFiles?: InvoiceFile[];
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
