import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutAmendmentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutAmendmentQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutAmendmentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutAmendmentRequest extends SpeakeasyBase {
    pathParams: ObjectPutAmendmentPathParams;
    queryParams: ObjectPutAmendmentQueryParams;
    headers: ObjectPutAmendmentHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutAmendmentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
