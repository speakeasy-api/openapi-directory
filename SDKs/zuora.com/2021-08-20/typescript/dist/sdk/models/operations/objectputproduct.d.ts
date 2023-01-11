import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutProductPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutProductQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutProductHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutProductRequest extends SpeakeasyBase {
    pathParams: ObjectPutProductPathParams;
    queryParams: ObjectPutProductQueryParams;
    headers: ObjectPutProductHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutProductResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
