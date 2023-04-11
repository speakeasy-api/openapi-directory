import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListOrdersRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * You can filter orders by rates and benefits (promotions).
     */
    fRnB?: string;
    /**
     * You can filter orders by using a Universal Transverse Mercator (UTM) source.
     */
    fUtmSource?: string;
    /**
     * You can filter orders by affiliate ID.
     */
    fAffiliateId?: string;
    /**
     * You can filter orders by creation date by concatenating the sufix `authorizedDate:` with the range date in Timestamp format. For example:
     *
     * @remarks
     * - 1 Day: `authorizedDate:[2022-01-01T02:00:00.000Z TO 2022-01-02T01:59:59.999Z]`
     * - 1 Month: `authorizedDate:[2022-01-01T02:00:00.000Z TO 2022-02-01T01:59:59.999Z]`
     * - 1 Year: `authorizedDate:[2022-01-01T02:00:00.000Z TO 2022-01-01T01:59:59.999Z]`
     */
    fAuthorizedDate?: string;
    /**
     * You can filter orders by using a Call Center Operator's identification.
     */
    fCallCenterOperatorName?: string;
    /**
     * Concatened value sufix `{{creationDate}}` and range date in Timestamp format. To use the `utc` query parameter, to filter orders by time zone, you must also fill the `f_creationDate` date parameter.
     */
    fCreationDate: string;
    /**
     * Filters list to return only orders with non `null` values for the `invoiceInput` field.
     */
    fHasInputInvoice?: boolean;
    /**
     * You can filter orders by invoiced date by concatenating the sufix `invoicedDate:` with the range date in Timestamp format. For example:
     *
     * @remarks
     * - 1 Day: `invoicedDate:[2022-01-01T02:00:00.000Z TO 2022-01-02T01:59:59.999Z]`
     * - 1 Month: `invoicedDate:[2022-01-01T02:00:00.000Z TO 2022-02-01T01:59:59.999Z]`
     * - 1 Year: `invoicedDate:[2022-01-01T02:00:00.000Z TO 2022-01-01T01:59:59.999Z]`
     */
    fInvoicedDate?: string;
    /**
     * When set as `true`, this parameter filters orders made via [inStore](https://help.vtex.com/en/tracks/what-is-instore--zav76TFEZlAjnyBVL5tRc), and when set as `false`, it filters orders that were not made via inStore.
     */
    fIsInstore?: boolean;
    /**
     * You can filter orders by payment type.
     */
    fPaymentNames?: string;
    /**
     * You can filter orders by sales channel's ([or trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) name.
     */
    fSalesChannel?: string;
    /**
     * You can filter orders by using a seller's name.
     */
    fSellerNames?: string;
    /**
     * You can filter orders by shipping estimate time in days by concatenating the desired number of days with the sufix `.days`. For example:
     *
     * @remarks
     * - Next 7 days: `7.days`
     * - Tomorrow: `1.days`
     * - Today: `0.days`
     * - Late: `-1.days`
     */
    fShippingEstimate?: string;
    /**
     * You can filter orders by the following [order status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196):
     *
     * @remarks
     * - `waiting-for-sellers-confirmation`
     * - `payment-pending`
     * - `payment-approved`
     * - `ready-for-handling`
     * - `handling`
     * - `invoiced`
     * - `canceled`
     */
    fStatus?: string;
    /**
     * When set as `true`, you retrieve [incomplete orders](https://help.vtex.com/en/tutorial/understanding-incomplete-orders), when set as `false`, you retrieve orders that are not incomplete.
     */
    incompleteOrders?: boolean;
    /**
     * You can retrieve orders lists filtering by an `OrderField` combined with an `OrderType`. To do so, you have to concatenate them: `orderBy={{OrderField}},{{OrderType}}`.
     *
     * @remarks
     * - `OrderField` values accepted: `creationDate`, `orderId`, `items`, `totalValue` and `origin`.
     * - `OrderType` values accepted: `asc` and `desc`.
     */
    orderBy?: string;
    /**
     * Define the number of pages you wish to retrieve, restricted to the limit of 30 pages.
     */
    page?: number;
    /**
     * Quantity of orders for each page, the default value is 15 and it goes up to 100 orders per page. Be aware that the limit of retrieval ofthis endpoint is 30 pages.
     */
    perPage?: number;
    /**
     * This parameter filters using Fulltext and accepts the values below. Be aware that the `+` caracter is not allowed in Fulltext Search.
     *
     * @remarks
     * - Order Id
     * - Client email
     * - Client document
     * - Client name
     */
    q?: string;
    /**
     * You can filter orders by sales channel's ([or trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) ID.
     */
    salesChannelId?: string;
    /**
     * You can search orders by using one of the following criterias:
     *
     * @remarks
     * - SKU ID - `sku_Ids&sku_Ids`
     * - Gift List ID - `listId&listId`
     * - Transaction ID (TID) - `tid&tid`
     * - PCI Connector's Transaction ID (TID) - `pci_tid&pci_tid`
     * - Payment ID (PID) - `paymentId&paymentId`
     * - Connector's NSU - `nsu&nsu`
     */
    searchField?: string;
    /**
     * Converts orders' time zone to the Universal Time Coordinated (UTC) format and shows the amount of orders set for that UTC, up to the limit of 30 pages. For it to work properly, you have to associate it with the `f_creationDate` parameter.
     */
    utc?: number;
}
export declare class ListOrdersResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * OK
     */
    listOrders?: shared.ListOrders;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
