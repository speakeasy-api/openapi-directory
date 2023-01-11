import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrderRatePlanOverride } from "./createorderrateplanoverride";
import { CancelSubscription } from "./cancelsubscription";
import { CreateOrderCreateSubscription } from "./createordercreatesubscription";
import { OwnerTransfer } from "./ownertransfer";
import { RemoveProduct } from "./removeproduct";
import { CreateOrderResume } from "./createorderresume";
import { CreateOrderSuspend } from "./createordersuspend";
import { CreateOrderTermsAndConditions } from "./createordertermsandconditions";
import { TriggerDate } from "./triggerdate";
import { CreateOrderRatePlanUpdate } from "./createorderrateplanupdate";
export declare enum CreateOrderOrderActionTypeEnum {
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
export declare class CreateOrderOrderAction extends SpeakeasyBase {
    addProduct?: CreateOrderRatePlanOverride;
    cancelSubscription?: CancelSubscription;
    createSubscription?: CreateOrderCreateSubscription;
    customFields?: Record<string, any>;
    ownerTransfer?: OwnerTransfer;
    removeProduct?: RemoveProduct;
    resume?: CreateOrderResume;
    suspend?: CreateOrderSuspend;
    termsAndConditions?: CreateOrderTermsAndConditions;
    triggerDates?: TriggerDate[];
    type: CreateOrderOrderActionTypeEnum;
    updateProduct?: CreateOrderRatePlanUpdate;
}
