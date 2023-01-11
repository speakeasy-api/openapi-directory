import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";



export class GetOrderResponseReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: Order;

  @SpeakeasyMetadata({ data: "json, name=processId" })
  processId?: string;

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: GetOrderResponseReasons })
  reasons?: GetOrderResponseReasons[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
