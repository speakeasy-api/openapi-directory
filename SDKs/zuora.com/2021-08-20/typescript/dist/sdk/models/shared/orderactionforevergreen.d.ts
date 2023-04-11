import { SpeakeasyBase } from "../../../internal/utils";
import { CancelSubscription } from "./cancelsubscription";
import { CreateSubscriptionForEvergreen } from "./createsubscriptionforevergreen";
import { GetOrderResume } from "./getorderresume";
import { GetOrderSuspend } from "./getordersuspend";
import { OrderMetricsForEvergreen } from "./ordermetricsforevergreen";
import { OwnerTransfer } from "./ownertransfer";
import { RatePlanOverrideForEvergreen } from "./rateplanoverrideforevergreen";
import { RatePlanUpdateForEvergreen } from "./rateplanupdateforevergreen";
import { RemoveProduct } from "./removeproduct";
import { TermsAndConditions } from "./termsandconditions";
import { TriggerDate } from "./triggerdate";
/**
 * Type of the order action.
 */
export declare enum OrderActionForEvergreenTypeEnum {
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
export declare class OrderActionForEvergreen extends SpeakeasyBase {
    /**
     * Rate plan associated with a subscription.
     *
     * @remarks
     *
     */
    addProduct?: RatePlanOverrideForEvergreen;
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
    createSubscription?: CreateSubscriptionForEvergreen;
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
     * Shows the delta metrics caused by a specific order action on a specific charge.
     *
     * @remarks
     *
     */
    orderMetrics?: OrderMetricsForEvergreen[];
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
    type?: OrderActionForEvergreenTypeEnum;
    /**
     * Information about an order action of type `UpdateProduct`.
     *
     * @remarks
     *
     */
    updateProduct?: RatePlanUpdateForEvergreen;
}
