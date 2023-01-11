import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeleteProductPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeleteProductHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeleteProductRequest extends SpeakeasyBase {
    pathParams: ObjectDeleteProductPathParams;
    headers: ObjectDeleteProductHeaders;
}
export declare class ObjectDeleteProductResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
