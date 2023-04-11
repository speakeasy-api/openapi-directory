import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrderOrderAction } from "./createorderorderaction";
import { OrderLineItemCommonPostOrder } from "./orderlineitemcommonpostorder";
import { ProcessingOptions } from "./processingoptions";
import { QuoteObjectFields } from "./quoteobjectfields";
import { RampRequest } from "./ramprequest";
export declare class POSTOrderRequestTypeSubscriptions extends SpeakeasyBase {
    /**
     * Container for custom fields of a Subscription object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    /**
     * The actions to be applied to the subscription. Order actions will be stored with the sequence when it was provided in the request.
     */
    orderActions?: CreateOrderOrderAction[];
    /**
     * The fields populated for a quote when a quote is sent to Zuora Billing from Zuora Quote.
     *
     * @remarks
     *
     */
    quote?: QuoteObjectFields;
    /**
     * Container of the ramp definitions. It is used to create, update, or remove the ramp definition for the new subscription.
     *
     * @remarks
     *
     */
    ramp?: RampRequest;
    /**
     * Leave this empty to represent new subscription creation. Specify a subscription number to update an existing subscription.
     *
     * @remarks
     *
     */
    subscriptionNumber?: string;
}
export declare class POSTOrderRequestType extends SpeakeasyBase {
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
     * The account number that this order will be created under. It can be either the accountNumber or the account info provided. It will return an error if both are specified.
     *
     * @remarks
     * Note that this actually specifies the invoice owner account of the subscriptions included in this order.
     *
     */
    existingAccountNumber?: string;
    newAccount?: Record<string, string>;
    /**
     * The date when the order is signed. All the order actions under this order will use this order date as the contract effective date if the contract effective date field is skipped or its value is left as null.
     */
    orderDate: Date;
    /**
     * [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) are non subscription based items created by an Order, representing transactional charges such as one-time fees, physical goods, or professional service charges that are not sold as subscription services.
     *
     * @remarks
     *
     * With the Order Line Items feature enabled, you can now launch non-subscription and hybrid monetization business models in Zuora, in addition to subscription business models.
     *
     * **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
     *
     */
    orderLineItems?: OrderLineItemCommonPostOrder[];
    /**
     * The order number of the new order. If not provided, system will auto-generate a number for this order.
     */
    orderNumber?: string;
    /**
     * Invoice or Payment.
     */
    processingOptions?: ProcessingOptions;
    /**
     * Each item includes a set of order actions, which will be applied to the same base subscription.
     */
    subscriptions: POSTOrderRequestTypeSubscriptions[];
}
