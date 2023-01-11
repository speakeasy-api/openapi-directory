import { SpeakeasyBase } from "../../../internal/utils";
import { RatePlanOverrideForEvergreen } from "./rateplanoverrideforevergreen";
import { CancelSubscription } from "./cancelsubscription";
import { CreateSubscriptionForEvergreen } from "./createsubscriptionforevergreen";
import { OrderMetricsForEvergreen } from "./ordermetricsforevergreen";
import { OwnerTransfer } from "./ownertransfer";
import { RemoveProduct } from "./removeproduct";
import { GetOrderResume } from "./getorderresume";
import { GetOrderSuspend } from "./getordersuspend";
import { TermsAndConditions } from "./termsandconditions";
import { TriggerDate } from "./triggerdate";
import { RatePlanUpdateForEvergreen } from "./rateplanupdateforevergreen";
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
**/
export declare class OrderActionForEvergreen extends SpeakeasyBase {
    addProduct?: RatePlanOverrideForEvergreen;
    cancelSubscription?: CancelSubscription;
    createSubscription?: CreateSubscriptionForEvergreen;
    customFields?: Record<string, any>;
    id?: string;
    orderMetrics?: OrderMetricsForEvergreen[];
    ownerTransfer?: OwnerTransfer;
    removeProduct?: RemoveProduct;
    resume?: GetOrderResume;
    sequence?: number;
    suspend?: GetOrderSuspend;
    termsAndConditions?: TermsAndConditions;
    triggerDates?: TriggerDate[];
    type?: OrderActionForEvergreenTypeEnum;
    updateProduct?: RatePlanUpdateForEvergreen;
}
