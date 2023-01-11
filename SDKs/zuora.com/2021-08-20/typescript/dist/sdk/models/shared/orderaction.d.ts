import { SpeakeasyBase } from "../../../internal/utils";
import { RatePlanOverride } from "./rateplanoverride";
import { CancelSubscription } from "./cancelsubscription";
import { CreateSubscription } from "./createsubscription";
import { OrderItem } from "./orderitem";
import { OrderMetric } from "./ordermetric";
import { OwnerTransfer } from "./ownertransfer";
import { RemoveProduct } from "./removeproduct";
import { GetOrderResume } from "./getorderresume";
import { GetOrderSuspend } from "./getordersuspend";
import { TermsAndConditions } from "./termsandconditions";
import { TriggerDate } from "./triggerdate";
import { RatePlanUpdate } from "./rateplanupdate";
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
**/
export declare class OrderAction extends SpeakeasyBase {
    addProduct?: RatePlanOverride;
    cancelSubscription?: CancelSubscription;
    createSubscription?: CreateSubscription;
    customFields?: Record<string, any>;
    id?: string;
    orderItems?: OrderItem[];
    orderMetrics?: OrderMetric[];
    ownerTransfer?: OwnerTransfer;
    removeProduct?: RemoveProduct;
    resume?: GetOrderResume;
    sequence?: number;
    suspend?: GetOrderSuspend;
    termsAndConditions?: TermsAndConditions;
    triggerDates?: TriggerDate[];
    type?: OrderActionTypeEnum;
    updateProduct?: RatePlanUpdate;
}
