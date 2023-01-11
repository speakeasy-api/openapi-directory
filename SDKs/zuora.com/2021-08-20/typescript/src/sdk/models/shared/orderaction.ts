import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export enum OrderActionTypeEnum {
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


// OrderAction
/** 
 * Represents the processed order action.
**/
export class OrderAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addProduct" })
  addProduct?: RatePlanOverride;

  @SpeakeasyMetadata({ data: "json, name=cancelSubscription" })
  cancelSubscription?: CancelSubscription;

  @SpeakeasyMetadata({ data: "json, name=createSubscription" })
  createSubscription?: CreateSubscription;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItems", elemType: OrderItem })
  orderItems?: OrderItem[];

  @SpeakeasyMetadata({ data: "json, name=orderMetrics", elemType: OrderMetric })
  orderMetrics?: OrderMetric[];

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
  type?: OrderActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateProduct" })
  updateProduct?: RatePlanUpdate;
}
