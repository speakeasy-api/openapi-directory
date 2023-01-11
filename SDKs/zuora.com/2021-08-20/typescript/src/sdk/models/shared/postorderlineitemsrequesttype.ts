import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostOrderLineItemUpdateType } from "./postorderlineitemupdatetype";
import { ProcessingOptions } from "./processingoptions";



export class PostOrderLineItemsRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orderLineItems", elemType: PostOrderLineItemUpdateType })
  orderLineItems?: PostOrderLineItemUpdateType[];

  @SpeakeasyMetadata({ data: "json, name=processingOptions" })
  processingOptions?: ProcessingOptions;
}
