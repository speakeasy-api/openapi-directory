import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFeedConfigurationRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
}
/**
 * Information on how orders are filtered to show on the feed.
 */
export declare class GetFeedConfiguration200ApplicationJSONFilter extends SpeakeasyBase {
    /**
     * Sets a limit to how many times a specific order shows on the feed, after it first meets filtering conditions. Using the `FromOrders` type configuration with JSONata filtering expressions might cause orders to appear more than once on a feed, whenever changes are made to that order. If this field is `false` orders will appear in the feed only once.
     */
    disableSingleFire?: boolean;
    /**
     * JSONata query expression that defines what conditions must be met for an order to be included in the feed. This should only be used in case `type` is `FromOrders`.
     */
    expression?: string;
    /**
     * List of order statuses that should be included in the feed. This should only be used in case `type` is `FromWorkflow`.
     */
    status?: string[];
    /**
     * Determines what orders appear in the feed and how they are filtered. If a feed has the `FromWorkflow` type configuration, it will receive order updates only when order’s statuses change and orders can be filtered by status, using the `status` field. A feed with the `FromOrders` type configuration gets updates whenever any change is made to an order. in this case, orders can be filtered by any property, according to JSONata expressions set in the `expression` field.
     */
    type?: string;
}
/**
 * Information that define the functioning of the queue.
 */
export declare class GetFeedConfiguration200ApplicationJSONQueue extends SpeakeasyBase {
    /**
     * Maximum life span of an order update after it gets to the feed. When a feed item is on the feed for this period of time, it is removed from the feed. Measured in seconds.
     */
    messageRetentionPeriodInSeconds?: number;
    /**
     * Period of time for which an item is not visible in the feed after it has been retrieved with the Get feed items request. Measured in seconds.
     */
    visibilityTimeoutInSeconds?: number;
}
/**
 * OK
 */
export declare class GetFeedConfiguration200ApplicationJSON extends SpeakeasyBase {
    /**
     * Aproximate age of the oldest message in the feed, measured in seconds.
     */
    approximateAgeOfOldestMessageInSeconds?: number;
    /**
     * Information on how orders are filtered to show on the feed.
     */
    filter?: GetFeedConfiguration200ApplicationJSONFilter;
    /**
     * Current number of messages in the feed, including messages that may not be visible due to time out after retrieval.
     */
    quantity?: number;
    /**
     * Information that define the functioning of the queue.
     */
    queue?: GetFeedConfiguration200ApplicationJSONQueue;
}
export declare class GetFeedConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getFeedConfiguration200ApplicationJSONObject?: GetFeedConfiguration200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
