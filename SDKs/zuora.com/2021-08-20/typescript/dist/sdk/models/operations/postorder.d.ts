import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOrderQueryParams extends SpeakeasyBase {
    returnIds?: boolean;
}
export declare class PostOrderHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class PostOrderRequest extends SpeakeasyBase {
    queryParams: PostOrderQueryParams;
    headers: PostOrderHeaders;
    request: shared.PostOrderRequestType;
}
export declare class PostOrderResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postOrderResponseType?: shared.PostOrderResponseType;
    statusCode: number;
}
