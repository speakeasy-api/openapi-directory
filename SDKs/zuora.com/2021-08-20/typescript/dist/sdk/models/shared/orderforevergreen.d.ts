import { SpeakeasyBase } from "../../../internal/utils";
import { OrderActionForEvergreen } from "./orderactionforevergreen";
import { QuoteObjectFields } from "./quoteobjectfields";
export declare class OrderForEvergreenSubscriptions extends SpeakeasyBase {
    /**
     * The base version of the subscription.
     */
    baseVersion?: number;
    /**
     * Container for custom fields of a Subscription object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    /**
     * The latest version of the subscription.
     */
    newVersion?: number;
    orderActions?: OrderActionForEvergreen[];
    /**
     * The fields populated for a quote when a quote is sent to Zuora Billing from Zuora Quote.
     *
     * @remarks
     *
     */
    quote?: QuoteObjectFields;
    /**
     * The sequence number of a certain subscription processed by the order.
     */
    sequence?: number;
    /**
     * The new subscription number for a new subscription created, or the existing subscription number. Unlike the order request, the subscription number here always has a value.
     */
    subscriptionNumber?: string;
}
/**
 * Represents the order information that will be returned in the GET call.
 */
export declare class OrderForEvergreen extends SpeakeasyBase {
    /**
     * The ID of the user who created this order.
     */
    createdBy?: string;
    /**
     * The time that the order gets created in the system, in the `YYYY-MM-DD HH:MM:SS` format.
     */
    createdDate?: string;
    /**
     * Currency code.
     */
    currency?: string;
    /**
     * Container for custom fields of an Order object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    /**
     * A description of the order.
     */
    description?: string;
    /**
     * The account number that this order has been created under. This is also the invoice owner of the subscriptions included in this order.
     */
    existingAccountNumber?: string;
    /**
     * The date when the order is signed. All the order actions under this order will use this order date as the contract effective date if no additinal contractEffectiveDate is provided.
     */
    orderDate?: string;
    /**
     * The order number of the order.
     */
    orderNumber?: string;
    /**
     * The status of the order.
     */
    status?: string;
    /**
     * Represents a processed subscription, including the origin request (order actions) that create this version of subscription and the processing result (order metrics). The reference part in the request will be overridden with the info in the new subscription version.
     */
    subscriptions?: OrderForEvergreenSubscriptions[];
    /**
     * The ID of the user who updated this order.
     */
    updatedBy?: string;
    /**
     * The time that the order gets updated in the system (for example, an order description update), in the `YYYY-MM-DD HH:MM:SS` format.
     */
    updatedDate?: string;
}
