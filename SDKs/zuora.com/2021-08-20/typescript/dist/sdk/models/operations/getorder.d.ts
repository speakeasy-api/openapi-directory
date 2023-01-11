import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderPathParams extends SpeakeasyBase {
    orderNumber: string;
}
export declare class GetOrderHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetOrderRequest extends SpeakeasyBase {
    pathParams: GetOrderPathParams;
    headers: GetOrderHeaders;
}
export declare class GetOrderResponse extends SpeakeasyBase {
    contentType: string;
    getOrderResponse?: shared.GetOrderResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
