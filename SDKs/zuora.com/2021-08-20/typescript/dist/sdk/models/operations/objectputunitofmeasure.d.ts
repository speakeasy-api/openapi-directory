import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutUnitOfMeasurePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutUnitOfMeasureQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutUnitOfMeasureHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutUnitOfMeasureRequest extends SpeakeasyBase {
    pathParams: ObjectPutUnitOfMeasurePathParams;
    queryParams: ObjectPutUnitOfMeasureQueryParams;
    headers: ObjectPutUnitOfMeasureHeaders;
    request: shared.ProxyModifyUnitOfMeasure;
}
export declare class ObjectPutUnitOfMeasureResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
