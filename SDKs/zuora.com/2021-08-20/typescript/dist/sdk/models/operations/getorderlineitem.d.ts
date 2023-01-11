import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderLineItemPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetOrderLineItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetOrderLineItemRequest extends SpeakeasyBase {
    pathParams: GetOrderLineItemPathParams;
    headers: GetOrderLineItemHeaders;
}
export declare class GetOrderLineItemResponse extends SpeakeasyBase {
    contentType: string;
    getOrderLineItemResponseType?: shared.GetOrderLineItemResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
