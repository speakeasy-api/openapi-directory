import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PreviewOrderOrderAction } from "./previeworderorderaction";
import { QuoteObjectFields } from "./quoteobjectfields";
import { RampRequest } from "./ramprequest";
import { OrderLineItemCommonPostOrder } from "./orderlineitemcommonpostorder";
import { PreviewAccountInfo } from "./previewaccountinfo";
import { PreviewOptions } from "./previewoptions";



export class PostOrderPreviewRequestTypeSubscriptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=orderActions", elemType: PreviewOrderOrderAction })
  orderActions?: PreviewOrderOrderAction[];

  @SpeakeasyMetadata({ data: "json, name=quote" })
  quote?: QuoteObjectFields;

  @SpeakeasyMetadata({ data: "json, name=ramp" })
  ramp?: RampRequest;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}


export class PostOrderPreviewRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=existingAccountNumber" })
  existingAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=orderDate" })
  orderDate: Date;

  @SpeakeasyMetadata({ data: "json, name=orderLineItems", elemType: OrderLineItemCommonPostOrder })
  orderLineItems?: OrderLineItemCommonPostOrder[];

  @SpeakeasyMetadata({ data: "json, name=orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=previewAccountInfo" })
  previewAccountInfo?: PreviewAccountInfo;

  @SpeakeasyMetadata({ data: "json, name=previewOptions" })
  previewOptions: PreviewOptions;

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: PostOrderPreviewRequestTypeSubscriptions })
  subscriptions: PostOrderPreviewRequestTypeSubscriptions[];
}
