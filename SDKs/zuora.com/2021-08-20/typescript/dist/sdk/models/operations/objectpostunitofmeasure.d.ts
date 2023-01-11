import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPostUnitOfMeasureQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPostUnitOfMeasureHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPostUnitOfMeasureRequest extends SpeakeasyBase {
    queryParams: ObjectPostUnitOfMeasureQueryParams;
    headers: ObjectPostUnitOfMeasureHeaders;
    request: shared.ProxyCreateUnitOfMeasure;
}
export declare class ObjectPostUnitOfMeasureResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyBadRequestResponse?: shared.ProxyBadRequestResponse;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
