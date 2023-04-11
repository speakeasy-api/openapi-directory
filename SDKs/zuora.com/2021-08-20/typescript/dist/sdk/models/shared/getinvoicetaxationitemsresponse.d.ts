import { SpeakeasyBase } from "../../../internal/utils";
import { GETInvoiceTaxItemType } from "./getinvoicetaxitemtype";
export declare class GETInvoiceTaxationItemsResponse extends SpeakeasyBase {
    /**
     * Container for the taxation items of the invoice item.
     *
     * @remarks
     *
     */
    data?: GETInvoiceTaxItemType[];
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
