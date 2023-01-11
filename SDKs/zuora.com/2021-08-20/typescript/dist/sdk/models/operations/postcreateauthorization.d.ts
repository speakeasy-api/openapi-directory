import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCreateAuthorizationPathParams extends SpeakeasyBase {
    paymentMethodId: string;
}
export declare class PostCreateAuthorizationHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostCreateAuthorizationRequest extends SpeakeasyBase {
    pathParams: PostCreateAuthorizationPathParams;
    headers: PostCreateAuthorizationHeaders;
    request: shared.PostDelayAuthorizeCapture;
}
export declare class PostCreateAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postAuthorizeResponse?: shared.PostAuthorizeResponse;
    statusCode: number;
}
