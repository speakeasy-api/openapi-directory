import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateOrderOrderAction } from "./createorderorderaction";
import { QuoteObjectFields } from "./quoteobjectfields";
import { RampRequest } from "./ramprequest";
import { OrderLineItemCommonPostOrder } from "./orderlineitemcommonpostorder";
import { ProcessingOptions } from "./processingoptions";



export class PostOrderRequestTypeSubscriptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=orderActions", elemType: CreateOrderOrderAction })
  orderActions?: CreateOrderOrderAction[];

  @SpeakeasyMetadata({ data: "json, name=quote" })
  quote?: QuoteObjectFields;

  @SpeakeasyMetadata({ data: "json, name=ramp" })
  ramp?: RampRequest;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}


export class PostOrderRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=existingAccountNumber" })
  existingAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=newAccount" })
  newAccount?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=orderDate" })
  orderDate: Date;

  @SpeakeasyMetadata({ data: "json, name=orderLineItems", elemType: OrderLineItemCommonPostOrder })
  orderLineItems?: OrderLineItemCommonPostOrder[];

  @SpeakeasyMetadata({ data: "json, name=orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=processingOptions" })
  processingOptions?: ProcessingOptions;

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: PostOrderRequestTypeSubscriptions })
  subscriptions: PostOrderRequestTypeSubscriptions[];
}
