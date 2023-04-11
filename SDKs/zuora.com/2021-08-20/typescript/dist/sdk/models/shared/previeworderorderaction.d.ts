import { SpeakeasyBase } from "../../../internal/utils";
import { CancelSubscription } from "./cancelsubscription";
import { CreateOrderResume } from "./createorderresume";
import { CreateOrderSuspend } from "./createordersuspend";
import { CreateOrderTermsAndConditions } from "./createordertermsandconditions";
import { OwnerTransfer } from "./ownertransfer";
import { PreviewOrderCreateSubscription } from "./previewordercreatesubscription";
import { PreviewOrderRatePlanOverride } from "./previeworderrateplanoverride";
import { PreviewOrderRatePlanUpdate } from "./previeworderrateplanupdate";
import { RemoveProduct } from "./removeproduct";
import { TriggerDate } from "./triggerdate";
/**
 * Type of order action.
 *
 * @remarks
 *
 * Unless the type of order action is `RenewSubscription`, you must use the corresponding field to provide information about the order action. For example, if the type of order action is `AddProduct`, you must set the `addProduct` field.
 *
 * Zuora returns an error if you set a field that corresponds to a different type of order action. For example, if the type of order action is `AddProduct`, Zuora returns an error if you set the `updateProduct` field.
 *
 */
export declare enum PreviewOrderOrderActionTypeEnum {
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
export declare class PreviewOrderOrderAction extends SpeakeasyBase {
    /**
     * Rate plan associated with a subscription.
     *
     * @remarks
     *
     */
    addProduct?: PreviewOrderRatePlanOverride;
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
    createSubscription?: PreviewOrderCreateSubscription;
    /**
     * Container for custom fields of an Order Action object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
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
    resume?: CreateOrderResume;
    /**
     * Information about an order action of type `Suspend`.
     *
     * @remarks
     *
     */
    suspend?: CreateOrderSuspend;
    /**
     * Information about an order action of type `TermsAndConditions`.
     *
     * @remarks
     *
     */
    termsAndConditions?: CreateOrderTermsAndConditions;
    /**
     * Container for the contract effective, service activation, and customer acceptance dates of the order action.
     *
     * @remarks
     *
     * If the service activation date is set as a required field in Default Subscription Settings, skipping this field in a `CreateSubscription` order action of your JSON request will result in a `Pending` order and a `Pending Activation` subscription.
     *
     * If the customer acceptance date is set as a required field in Default Subscription Settings, skipping this field in a `CreateSubscription` order action of your JSON request will result in a `Pending` order and a `Pending Acceptance` subscription. If the service activation date field is at the same time required and skipped (or set as null), it will be a `Pending Activation` subscription.
     *
     */
    triggerDates?: TriggerDate[];
    /**
     * Type of order action.
     *
     * @remarks
     *
     * Unless the type of order action is `RenewSubscription`, you must use the corresponding field to provide information about the order action. For example, if the type of order action is `AddProduct`, you must set the `addProduct` field.
     *
     * Zuora returns an error if you set a field that corresponds to a different type of order action. For example, if the type of order action is `AddProduct`, Zuora returns an error if you set the `updateProduct` field.
     *
     */
    type: PreviewOrderOrderActionTypeEnum;
    /**
     * Information about an order action of type `UpdateProduct`.
     *
     * @remarks
     *
     */
    updateProduct?: PreviewOrderRatePlanUpdate;
}
