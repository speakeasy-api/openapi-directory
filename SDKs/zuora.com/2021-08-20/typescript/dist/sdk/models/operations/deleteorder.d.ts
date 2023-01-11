import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteOrderPathParams extends SpeakeasyBase {
    orderNumber: string;
}
export declare class DeleteOrderHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteOrderRequest extends SpeakeasyBase {
    pathParams: DeleteOrderPathParams;
    headers: DeleteOrderHeaders;
}
export declare class DeleteOrderResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
