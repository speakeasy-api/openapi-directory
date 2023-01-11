import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutFeaturePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutFeatureQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutFeatureHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutFeatureRequest extends SpeakeasyBase {
    pathParams: ObjectPutFeaturePathParams;
    queryParams: ObjectPutFeatureQueryParams;
    headers: ObjectPutFeatureHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutFeatureResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyBadRequestResponse?: shared.ProxyBadRequestResponse;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
