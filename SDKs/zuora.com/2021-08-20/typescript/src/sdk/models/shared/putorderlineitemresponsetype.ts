import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutOrderLineItemResponseTypeReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutOrderLineItemResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=processId" })
  processId?: string;

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: PutOrderLineItemResponseTypeReasons })
  reasons?: PutOrderLineItemResponseTypeReasons[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
