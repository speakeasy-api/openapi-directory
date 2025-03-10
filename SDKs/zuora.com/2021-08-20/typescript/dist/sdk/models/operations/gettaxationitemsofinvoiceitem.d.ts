import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETTaxationItemsOfInvoiceItemRequest extends SpeakeasyBase {
    /**
     * An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header.
     *
     * @remarks
     *
     */
    zuoraEntityIds?: string;
    /**
     * A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
     *
     * @remarks
     *
     * The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`"`), and quote (`'`).
     *
     */
    zuoraTrackId?: string;
    /**
     * The unique ID of an invoice. For example, 2c92c8955bd63cc1015bd7c151af02ab.
     *
     * @remarks
     *
     */
    invoiceId: string;
    /**
     * The unique ID of an invoice item. For example, 2c86c8955bd63cc1015bd7c151af02ef.
     *
     * @remarks
     *
     */
    itemId: string;
    /**
     * Page number.
     *
     * @remarks
     *
     */
    page?: number;
    /**
     * Number of rows returned per page.
     *
     * @remarks
     *
     */
    pageSize?: number;
}
export declare class GETTaxationItemsOfInvoiceItemResponse extends SpeakeasyBase {
    contentType: string;
    getInvoiceTaxationItemsResponse?: shared.GETInvoiceTaxationItemsResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
