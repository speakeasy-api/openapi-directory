import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export enum PreviewOrderOrderActionTypeEnum {
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


export class PreviewOrderOrderAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addProduct" })
  addProduct?: PreviewOrderRatePlanOverride;

  @SpeakeasyMetadata({ data: "json, name=cancelSubscription" })
  cancelSubscription?: CancelSubscription;

  @SpeakeasyMetadata({ data: "json, name=createSubscription" })
  createSubscription?: PreviewOrderCreateSubscription;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ownerTransfer" })
  ownerTransfer?: OwnerTransfer;

  @SpeakeasyMetadata({ data: "json, name=removeProduct" })
  removeProduct?: RemoveProduct;

  @SpeakeasyMetadata({ data: "json, name=resume" })
  resume?: CreateOrderResume;

  @SpeakeasyMetadata({ data: "json, name=suspend" })
  suspend?: CreateOrderSuspend;

  @SpeakeasyMetadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: CreateOrderTermsAndConditions;

  @SpeakeasyMetadata({ data: "json, name=triggerDates", elemType: TriggerDate })
  triggerDates?: TriggerDate[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PreviewOrderOrderActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateProduct" })
  updateProduct?: PreviewOrderRatePlanUpdate;
}
