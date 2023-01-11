import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetUnitOfMeasurePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetUnitOfMeasureQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetUnitOfMeasureHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetUnitOfMeasureRequest extends SpeakeasyBase {
    pathParams: ObjectGetUnitOfMeasurePathParams;
    queryParams: ObjectGetUnitOfMeasureQueryParams;
    headers: ObjectGetUnitOfMeasureHeaders;
}
export declare class ObjectGetUnitOfMeasureResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetUnitOfMeasure?: shared.ProxyGetUnitOfMeasure;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
