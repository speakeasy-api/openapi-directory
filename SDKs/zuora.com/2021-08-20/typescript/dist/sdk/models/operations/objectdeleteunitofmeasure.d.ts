import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeleteUnitOfMeasurePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeleteUnitOfMeasureHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeleteUnitOfMeasureRequest extends SpeakeasyBase {
    pathParams: ObjectDeleteUnitOfMeasurePathParams;
    headers: ObjectDeleteUnitOfMeasureHeaders;
}
export declare class ObjectDeleteUnitOfMeasureResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
