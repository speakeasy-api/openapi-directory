import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderForEvergreen } from "./orderforevergreen";



export class GetOrderResponseForEvergreenReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetOrderResponseForEvergreen extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: OrderForEvergreen;

  @SpeakeasyMetadata({ data: "json, name=processId" })
  processId?: string;

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: GetOrderResponseForEvergreenReasons })
  reasons?: GetOrderResponseForEvergreenReasons[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
