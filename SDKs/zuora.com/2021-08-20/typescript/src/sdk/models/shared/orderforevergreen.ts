import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderActionForEvergreen } from "./orderactionforevergreen";
import { QuoteObjectFields } from "./quoteobjectfields";



export class OrderForEvergreenSubscriptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseVersion" })
  baseVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=newVersion" })
  newVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=orderActions", elemType: OrderActionForEvergreen })
  orderActions?: OrderActionForEvergreen[];

  @SpeakeasyMetadata({ data: "json, name=quote" })
  quote?: QuoteObjectFields;

  @SpeakeasyMetadata({ data: "json, name=sequence" })
  sequence?: number;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}


// OrderForEvergreen
/** 
 * Represents the order information that will be returned in the GET call.
**/
export class OrderForEvergreen extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=existingAccountNumber" })
  existingAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=orderDate" })
  orderDate?: string;

  @SpeakeasyMetadata({ data: "json, name=orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: OrderForEvergreenSubscriptions })
  subscriptions?: OrderForEvergreenSubscriptions[];

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedDate" })
  updatedDate?: string;
}
