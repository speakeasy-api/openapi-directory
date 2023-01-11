import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderAction } from "./orderaction";
import { QuoteObjectFields } from "./quoteobjectfields";
import { OrderLineItemRetrieveOrder } from "./orderlineitemretrieveorder";


export enum OrderStatusEnum {
    Completed = "Completed",
    Pending = "Pending"
}


export class OrderSubscriptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseVersion" })
  baseVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=newVersion" })
  newVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=orderActions", elemType: OrderAction })
  orderActions?: OrderAction[];

  @SpeakeasyMetadata({ data: "json, name=quote" })
  quote?: QuoteObjectFields;

  @SpeakeasyMetadata({ data: "json, name=ramp" })
  ramp?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sequence" })
  sequence?: number;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}


// Order
/** 
 * Represents the order information that will be returned in the GET call.
**/
export class Order extends SpeakeasyBase {
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
  orderDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=orderLineItems", elemType: OrderLineItemRetrieveOrder })
  orderLineItems?: OrderLineItemRetrieveOrder[];

  @SpeakeasyMetadata({ data: "json, name=orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OrderStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: OrderSubscriptions })
  subscriptions?: OrderSubscriptions[];

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedDate" })
  updatedDate?: string;
}
