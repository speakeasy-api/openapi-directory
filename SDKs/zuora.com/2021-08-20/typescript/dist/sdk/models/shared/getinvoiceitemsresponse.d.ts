import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceItem } from "./invoiceitem";
export declare class GETInvoiceItemsResponse extends SpeakeasyBase {
    /**
     * Container for invoice items.
     *
     * @remarks
     *
     */
    invoiceItems?: InvoiceItem[];
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
