import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeleteFeaturePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeleteFeatureHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeleteFeatureRequest extends SpeakeasyBase {
    pathParams: ObjectDeleteFeaturePathParams;
    headers: ObjectDeleteFeatureHeaders;
}
export declare class ObjectDeleteFeatureResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
