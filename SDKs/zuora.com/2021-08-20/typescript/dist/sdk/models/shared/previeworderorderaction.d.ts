import { SpeakeasyBase } from "../../../internal/utils";
import { PreviewOrderRatePlanOverride } from "./previeworderrateplanoverride";
import { CancelSubscription } from "./cancelsubscription";
import { PreviewOrderCreateSubscription } from "./previewordercreatesubscription";
import { OwnerTransfer } from "./ownertransfer";
import { RemoveProduct } from "./removeproduct";
import { CreateOrderResume } from "./createorderresume";
import { CreateOrderSuspend } from "./createordersuspend";
import { CreateOrderTermsAndConditions } from "./createordertermsandconditions";
import { TriggerDate } from "./triggerdate";
import { PreviewOrderRatePlanUpdate } from "./previeworderrateplanupdate";
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
    addProduct?: PreviewOrderRatePlanOverride;
    cancelSubscription?: CancelSubscription;
    createSubscription?: PreviewOrderCreateSubscription;
    customFields?: Record<string, any>;
    ownerTransfer?: OwnerTransfer;
    removeProduct?: RemoveProduct;
    resume?: CreateOrderResume;
    suspend?: CreateOrderSuspend;
    termsAndConditions?: CreateOrderTermsAndConditions;
    triggerDates?: TriggerDate[];
    type: PreviewOrderOrderActionTypeEnum;
    updateProduct?: PreviewOrderRatePlanUpdate;
}
