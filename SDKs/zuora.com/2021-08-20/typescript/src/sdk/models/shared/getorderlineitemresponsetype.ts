import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItem } from "./orderlineitem";



export class GetOrderLineItemResponseTypeReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetOrderLineItemResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orderLineItem" })
  orderLineItem?: OrderLineItem;

  @SpeakeasyMetadata({ data: "json, name=processId" })
  processId?: string;

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: GetOrderLineItemResponseTypeReasons })
  reasons?: GetOrderLineItemResponseTypeReasons[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
