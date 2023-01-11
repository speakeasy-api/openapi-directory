import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeleteProductFeaturePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeleteProductFeatureHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeleteProductFeatureRequest extends SpeakeasyBase {
    pathParams: ObjectDeleteProductFeaturePathParams;
    headers: ObjectDeleteProductFeatureHeaders;
}
export declare class ObjectDeleteProductFeatureResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
