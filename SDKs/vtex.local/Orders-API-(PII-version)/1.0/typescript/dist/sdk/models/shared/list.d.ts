import { SpeakeasyBase } from "../../../internal/utils";
export declare class List extends SpeakeasyBase {
    /**
     * Shipping estimate date.
     */
    shippingEstimatedDate: string;
    /**
     * Maximum shipping estimate date.
     */
    shippingEstimatedDateMax: string;
    /**
     * Minimum shipping estimate date.
     */
    shippingEstimatedDateMin: string;
    /**
     * Three letter code indicating the marketplace in which the order was placed.
     */
    affiliateId: string;
    /**
     * Authorized date.
     */
    authorizedDate: string;
    /**
     * Call center operator name.
     */
    callCenterOperatorName: string;
    /**
     * Client name.
     */
    clientName: string;
    /**
     * Creation date.
     */
    creationDate: string;
    /**
     * Currency code.
     */
    currencyCode: string;
    /**
     * Order items.
     */
    items: string;
    /**
     * Last unread message.
     */
    lastMessageUnread: string;
    /**
     * List ID.
     */
    listId: string;
    /**
     * List type.
     */
    listType: string;
    /**
     * ID of the order in the marketplace.
     */
    marketPlaceOrderId: string;
    /**
     * Order ID.
     */
    orderId: string;
    /**
     * Indicates whether order is complete.
     */
    orderIsComplete: boolean;
    /**
     * Indicates whether order is marketplace, fulfillment or chain.
     */
    origin: string;
    /**
     * Order payment names.
     */
    paymentNames: string;
    /**
     * Sales channel.
     */
    salesChannel: string;
    /**
     * Order sequence number.
     */
    sequence: string;
    /**
     * Order status.
     */
    status: string;
    /**
     * Order status description.
     */
    statusDescription: string;
    /**
     * Total items.
     */
    totalItems: number;
    /**
     * Order total value in cents.
     */
    totalValue: number;
    /**
     * Indicates whether order workflow is in error state.
     */
    workflowInErrorState: boolean;
    /**
     * Indicates whether workflow is in retry.
     */
    workflowInRetry: boolean;
}
