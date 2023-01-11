import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetAmendmentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetAmendmentQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetAmendmentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetAmendmentRequest extends SpeakeasyBase {
    pathParams: ObjectGetAmendmentPathParams;
    queryParams: ObjectGetAmendmentQueryParams;
    headers: ObjectGetAmendmentHeaders;
}
export declare class ObjectGetAmendmentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetAmendment?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
