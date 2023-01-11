import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPostProductQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPostProductHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPostProductRequest extends SpeakeasyBase {
    queryParams: ObjectPostProductQueryParams;
    headers: ObjectPostProductHeaders;
    request: Record<string, any>;
}
export declare class ObjectPostProductResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyBadRequestResponse?: shared.ProxyBadRequestResponse;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
