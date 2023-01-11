import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeleteAmendmentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeleteAmendmentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeleteAmendmentRequest extends SpeakeasyBase {
    pathParams: ObjectDeleteAmendmentPathParams;
    headers: ObjectDeleteAmendmentHeaders;
}
export declare class ObjectDeleteAmendmentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
