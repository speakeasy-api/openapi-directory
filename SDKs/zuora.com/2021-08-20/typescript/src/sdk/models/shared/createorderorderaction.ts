import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export enum CreateOrderOrderActionTypeEnum {
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


export class CreateOrderOrderAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addProduct" })
  addProduct?: CreateOrderRatePlanOverride;

  @SpeakeasyMetadata({ data: "json, name=cancelSubscription" })
  cancelSubscription?: CancelSubscription;

  @SpeakeasyMetadata({ data: "json, name=createSubscription" })
  createSubscription?: CreateOrderCreateSubscription;

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
  type: CreateOrderOrderActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateProduct" })
  updateProduct?: CreateOrderRatePlanUpdate;
}
