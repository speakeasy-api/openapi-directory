import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETOrdersBySubscriptionOwnerRequest extends SpeakeasyBase {
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
     * The subscription owner account number.
     */
    accountNumber: string;
    /**
     * The date type to filter on.
     *
     * @remarks
     * This field value can be 'orderDate' or 'updatedDate'. Default is orderDate.
     *
     */
    dateFilterOption?: string;
    /**
     * The result will only contain the orders with the date of 'dateFilterOption' earlier than or equal to this date.
     *
     * @remarks
     *
     */
    endDate?: Date;
    /**
     * The page number of the orders retrieved. The default is 1.
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
    /**
     * The result will only contain the orders with the date of 'dateFilterOption' later than or equal to this date.
     *
     * @remarks
     *
     */
    startDate?: Date;
}
export declare class GETOrdersBySubscriptionOwnerResponse extends SpeakeasyBase {
    contentType: string;
    getOrdersResponse?: shared.GetOrdersResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
