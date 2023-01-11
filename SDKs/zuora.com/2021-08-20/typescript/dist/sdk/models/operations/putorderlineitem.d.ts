import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutOrderLineItemPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class PutOrderLineItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutOrderLineItemRequest extends SpeakeasyBase {
    pathParams: PutOrderLineItemPathParams;
    headers: PutOrderLineItemHeaders;
    request: shared.OrderLineItemCommon;
}
export declare class PutOrderLineItemResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putOrderLineItemResponseType?: shared.PutOrderLineItemResponseType;
    statusCode: number;
}
