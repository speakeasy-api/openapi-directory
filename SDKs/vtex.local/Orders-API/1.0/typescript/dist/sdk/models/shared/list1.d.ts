import { SpeakeasyBase } from "../../../internal/utils";
import { Item2 } from "./item2";
export declare class List1 extends SpeakeasyBase {
    /**
     * Estimate shipping date.
     */
    shippingEstimatedDate: string;
    /**
     * The most extended shipping estimation possible.
     */
    shippingEstimatedDateMax: string;
    /**
     * The least extended shipping estimation possible.
     */
    shippingEstimatedDateMin: string;
    /**
     * Corresponds to the three-digits [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) identification code of the seller responsible for the order.
     */
    affiliateId: string;
    /**
     * Authorized order date.
     */
    authorizedDate: string;
    /**
     * Call center operator responsible for the order.
     */
    callCenterOperatorName: string;
    /**
     * Order's customer name.
     */
    clientName: string;
    /**
     * Order's creation date.
     */
    creationDate: string;
    /**
     * Currency code in ISO 4217. For example, `BRL`.
     */
    currencyCode: string;
    /**
     * Information about order's items
     */
    items: Item2[];
    /**
     * Last sent transactional message.
     */
    lastMessageUnread: string;
    /**
     * Related Gift List ID.
     */
    listId: string;
    /**
     * Related Gift list type.
     */
    listType: string;
    /**
     * Marketplace order ID.
     */
    marketPlaceOrderId: string;
    /**
     * Order ID is a unique code that identifies an order.
     */
    orderId: string;
    /**
     * If it is a completed order (`true`) or not (`false`). For more information, see [Order flow and status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196).
     */
    orderIsComplete: boolean;
    /**
     * Order Origin, if `Marketplace` or `Fulfillment`.
     */
    origin: string;
    /**
     * Payment system name.
     */
    paymentNames: string;
    /**
     * Sales channel (or [trade policy](https://help.vtex.com/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) ID related to the order.
     */
    salesChannel: string;
    /**
     * Six-digit string that follows the order ID. For example, in order `1268540501456-01 (501456)`, the sequence is `501456`.
     */
    sequence: string;
    /**
     * Order [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196).
     */
    status: string;
    /**
     * Status description which is displayed on the Admin panel. This field is deprecated and may not return any value.
     */
    statusDescription: string;
    /**
     * Order's total amount of items.
     */
    totalItems: number;
    /**
     * Total value amount.
     */
    totalValue: number;
    /**
     * If there is a work flow error (`true`) or not (`false`).
     */
    workflowInErrorState: boolean;
    /**
     * If the order is in a work flow retry (`true`) or not (`false`).
     */
    workflowInRetry: boolean;
}
