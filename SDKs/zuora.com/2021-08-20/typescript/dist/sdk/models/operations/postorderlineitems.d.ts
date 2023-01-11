import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOrderLineItemsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostOrderLineItemsRequest extends SpeakeasyBase {
    headers: PostOrderLineItemsHeaders;
    request: shared.PostOrderLineItemsRequestType;
}
export declare class PostOrderLineItemsResponse extends SpeakeasyBase {
    contentType: string;
    getOrderLineItemResponseType?: shared.GetOrderLineItemResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
