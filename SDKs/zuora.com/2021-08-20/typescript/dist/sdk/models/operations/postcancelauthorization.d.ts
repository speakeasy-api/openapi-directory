import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCancelAuthorizationPathParams extends SpeakeasyBase {
    paymentMethodId: string;
}
export declare class PostCancelAuthorizationHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostCancelAuthorizationRequest extends SpeakeasyBase {
    pathParams: PostCancelAuthorizationPathParams;
    headers: PostCancelAuthorizationHeaders;
    request: shared.PostVoidAuthorize;
}
export declare class PostCancelAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postVoidAuthorizeResponse?: shared.PostVoidAuthorizeResponse;
    statusCode: number;
}
