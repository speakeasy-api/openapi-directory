import { SpeakeasyBase } from "../../../internal/utils";
import { CancelSubscription } from "./cancelsubscription";
import { CreateSubscription } from "./createsubscription";
import { GetOrderResume } from "./getorderresume";
import { GetOrderSuspend } from "./getordersuspend";
import { OrderItem } from "./orderitem";
import { OrderMetric } from "./ordermetric";
import { OwnerTransfer } from "./ownertransfer";
import { RatePlanOverride } from "./rateplanoverride";
import { RatePlanUpdate } from "./rateplanupdate";
import { RemoveProduct } from "./removeproduct";
import { TermsAndConditions } from "./termsandconditions";
import { TriggerDate } from "./triggerdate";
/**
 * Type of the order action.
 */
export declare enum OrderActionTypeEnum {
    CreateSubscription = "CreateSubscription",
    TermsAndConditions = "TermsAndConditions",
    AddProduct = "AddProduct",
    UpdateProduct = "UpdateProduct",
    RemoveProduct = "RemoveProduct",
    RenewSubscription = "RenewSubscription",
    CancelSubscription = "CancelSubscription",
    OwnerTransfer = "OwnerTransfer",
    Suspend = "Suspend",
    Resume = "Resume"
}
/**
 * Represents the processed order action.
 */
export declare class OrderAction extends SpeakeasyBase {
    /**
     * Rate plan associated with a subscription.
     *
     * @remarks
     *
     */
    addProduct?: RatePlanOverride;
    /**
     * Information about an order action of type `CancelSubscription`.
     *
     * @remarks
     *
     */
    cancelSubscription?: CancelSubscription;
    /**
     * Information about an order action of type `CreateSubscription`.
     *
     * @remarks
     *
     */
    createSubscription?: CreateSubscription;
    /**
     * Container for custom fields of an Order Action object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    /**
     * The Id of the order action processed in the order.
     */
    id?: string;
    /**
     * The `orderItems` nested field is only available to existing Orders customers who already have access to the field.
     *
     * @remarks
     *
     * **Note:** The following Order Metrics have been deprecated. Any new customers who onboard on [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) or [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization) will not get these metrics.
     * * The Order ELP and Order Item objects
     * * The "Generated Reason" and "Order Item ID" fields in the Order MRR, Order TCB, Order TCV, and Order Quantity objects
     *
     * Existing Orders customers who have these metrics will continue to be supported.
     *
     */
    orderItems?: OrderItem[];
    /**
     * The container for order metrics.
     *
     * @remarks
     *
     * **Note:** The following Order Metrics have been deprecated. Any new customers who onboard on [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) or [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization) will not get these metrics.
     * * The Order ELP and Order Item objects
     * * The "Generated Reason" and "Order Item ID" fields in the Order MRR, Order TCB, Order TCV, and Order Quantity objects
     *
     * Existing Orders customers who have these metrics will continue to be supported.
     *
     * **Note:** As of Zuora Billing Release 306, Zuora has upgraded the methodologies for calculating metrics in [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders). The new methodologies are reflected in the following Order Delta Metrics objects.
     * * [Order Delta Mrr](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Mrr)
     * * [Order Delta Tcv](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcv)
     * * [Order Delta Tcb](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcb)
     *
     * It is recommended that all customers use the new [Order Delta Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/AA_Overview_of_Order_Delta_Metrics). If you are an existing [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders) customer and want to migrate to Order Delta Metrics, submit a request at [Zuora Global Support](https://support.zuora.com/).
     *
     * Whereas new customers, and existing customers not currently on [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders), will no longer have access to Order Metrics, existing customers currently using Order Metrics will continue to be supported.
     *
     */
    orderMetrics?: OrderMetric[];
    /**
     * Information about an order action of type `OwnerTransfer`.
     *
     * @remarks
     *
     * **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     */
    ownerTransfer?: OwnerTransfer;
    /**
     * Information about an order action of type `RemoveProduct`.
     *
     * @remarks
     *
     */
    removeProduct?: RemoveProduct;
    /**
     * Information about an order action of type `Resume`.
     *
     * @remarks
     *
     */
    resume?: GetOrderResume;
    /**
     * The sequence of the order actions processed in the order.
     */
    sequence?: number;
    /**
     * Information about an order action of type `Suspend`.
     *
     * @remarks
     *
     */
    suspend?: GetOrderSuspend;
    /**
     * Information about an order action of type `TermsAndConditions`.
     *
     * @remarks
     *
     */
    termsAndConditions?: TermsAndConditions;
    /**
     * Container for the contract effective, service activation, and customer acceptance dates of the order action.
     *
     * @remarks
     *
     * If [Zuora is configured to require service activation](https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Define_Default_Subscription_Settings#Require_Service_Activation_of_Orders.3F) and the `ServiceActivation` field is not set for a `CreateSubscription` order action, a `Pending` order and a `Pending Activation` subscription are created.
     *
     * If [Zuora is configured to require customer acceptance](https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Define_Default_Subscription_Settings#Require_Customer_Acceptance_of_Orders.3F) and the `CustomerAcceptance` field is not set for a `CreateSubscription` order action, a `Pending` order and a `Pending Acceptance` subscription are created. At the same time, if the service activation date field is also required and not set, a `Pending` order and a `Pending Activation` subscription are created instead.
     *
     * If [Zuora is configured to require service activation](https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Define_Default_Subscription_Settings#Require_Service_Activation_of_Orders.3F) and the `ServiceActivation` field is not set for either of the following order actions, a `Pending` order is created. The subscription status is not impacted. **Note:** This feature is in **Limited Availability**. If you want to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *  * AddProduct
     *  * UpdateProduct
     *  * RemoveProduct
     *  * RenewSubscription
     *  * TermsAndConditions
     *
     * If [Zuora is configured to require customer acceptance](https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Define_Default_Subscription_Settings#Require_Customer_Acceptance_of_Orders.3F) and the `CustomerAcceptance` field is not set for either of the following order actions, a `Pending` order is created. The subscription status is not impacted. **Note:** This feature is in **Limited Availability**. If you want to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *  * AddProduct
     *  * UpdateProduct
     *  * RemoveProduct
     *  * RenewSubscription
     *  * TermsAndConditions
     *
     */
    triggerDates?: TriggerDate[];
    /**
     * Type of the order action.
     */
    type?: OrderActionTypeEnum;
    /**
     * Information about an order action of type `UpdateProduct`.
     *
     * @remarks
     *
     */
    updateProduct?: RatePlanUpdate;
}
