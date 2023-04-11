import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETTaxationItemsOfCreditMemoItemRequest extends SpeakeasyBase {
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
     * The unique ID of a credit memo item. You can get the credit memo item ID from the response of [List credit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoItems).
     *
     * @remarks
     *
     */
    cmitemid: string;
    /**
     * The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172.
     *
     * @remarks
     *
     */
    creditMemoId: string;
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
export declare class GETTaxationItemsOfCreditMemoItem200ApplicationJSON extends SpeakeasyBase {
    /**
     * Container for the taxation items of the credit memo item.
     *
     * @remarks
     *
     */
    data?: shared.GETCMTaxItemTypeNew[];
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
export declare class GETTaxationItemsOfCreditMemoItemResponse extends SpeakeasyBase {
    contentType: string;
    getTaxationItemsOfCreditMemoItem200ApplicationJSONObject?: GETTaxationItemsOfCreditMemoItem200ApplicationJSON;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
