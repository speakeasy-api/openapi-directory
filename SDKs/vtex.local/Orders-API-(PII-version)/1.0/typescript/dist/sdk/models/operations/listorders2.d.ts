import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListOrders2RequestBody extends SpeakeasyBase {
    /**
     * Concatened value sufix {{creationDate}} and range date in Timestamp format.
     */
    fCreationDate: string;
    /**
     * Number of the page to be retrieved.
     */
    page: number;
    /**
     * Number of orders per page.
     */
    perPage: number;
    /**
     * Full-text search for the orders.
     */
    q?: string;
}
export declare class ListOrders2Request extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody?: ListOrders2RequestBody;
    /**
     * Filters list to return only orders with non `null` values for the `invoiceInput` field.
     */
    fHasInputInvoice?: boolean;
}
export declare class ListOrders2Response extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * OK
     */
    listOrders?: shared.ListOrders;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
