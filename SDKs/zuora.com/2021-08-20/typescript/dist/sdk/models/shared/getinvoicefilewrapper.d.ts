import { SpeakeasyBase } from "../../../internal/utils";
import { GETInvoiceType } from "./getinvoicetype";
export declare class GETInvoiceFileWrapper extends SpeakeasyBase {
    /**
     * Contains information about one or more invoices:
     *
     * @remarks
     *
     */
    invoices?: GETInvoiceType[];
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
