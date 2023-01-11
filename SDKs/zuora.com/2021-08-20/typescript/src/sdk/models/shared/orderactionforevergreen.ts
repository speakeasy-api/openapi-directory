import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export enum OrderActionForEvergreenTypeEnum {
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


// OrderActionForEvergreen
/** 
 * Represents the processed order action.
**/
export class OrderActionForEvergreen extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addProduct" })
  addProduct?: RatePlanOverrideForEvergreen;

  @SpeakeasyMetadata({ data: "json, name=cancelSubscription" })
  cancelSubscription?: CancelSubscription;

  @SpeakeasyMetadata({ data: "json, name=createSubscription" })
  createSubscription?: CreateSubscriptionForEvergreen;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=orderMetrics", elemType: OrderMetricsForEvergreen })
  orderMetrics?: OrderMetricsForEvergreen[];

  @SpeakeasyMetadata({ data: "json, name=ownerTransfer" })
  ownerTransfer?: OwnerTransfer;

  @SpeakeasyMetadata({ data: "json, name=removeProduct" })
  removeProduct?: RemoveProduct;

  @SpeakeasyMetadata({ data: "json, name=resume" })
  resume?: GetOrderResume;

  @SpeakeasyMetadata({ data: "json, name=sequence" })
  sequence?: number;

  @SpeakeasyMetadata({ data: "json, name=suspend" })
  suspend?: GetOrderSuspend;

  @SpeakeasyMetadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: TermsAndConditions;

  @SpeakeasyMetadata({ data: "json, name=triggerDates", elemType: TriggerDate })
  triggerDates?: TriggerDate[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: OrderActionForEvergreenTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateProduct" })
  updateProduct?: RatePlanUpdateForEvergreen;
}
