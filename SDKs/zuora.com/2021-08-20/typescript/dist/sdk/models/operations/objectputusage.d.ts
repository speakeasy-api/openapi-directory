import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutUsagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutUsageQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutUsageHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutUsageRequest extends SpeakeasyBase {
    pathParams: ObjectPutUsagePathParams;
    queryParams: ObjectPutUsageQueryParams;
    headers: ObjectPutUsageHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutUsageResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
