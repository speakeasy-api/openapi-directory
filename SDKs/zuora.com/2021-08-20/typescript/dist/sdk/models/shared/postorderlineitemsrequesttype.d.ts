import { SpeakeasyBase } from "../../../internal/utils";
import { PostOrderLineItemUpdateType } from "./postorderlineitemupdatetype";
import { ProcessingOptions } from "./processingoptions";
export declare class PostOrderLineItemsRequestType extends SpeakeasyBase {
    orderLineItems?: PostOrderLineItemUpdateType[];
    /**
     * Invoice or Payment.
     */
    processingOptions?: ProcessingOptions;
}
