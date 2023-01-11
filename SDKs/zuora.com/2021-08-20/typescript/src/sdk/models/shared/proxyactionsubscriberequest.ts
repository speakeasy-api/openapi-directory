import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscribeRequest } from "./subscriberequest";



export class ProxyActionsubscribeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subscribes", elemType: SubscribeRequest })
  subscribes: SubscribeRequest[];
}
