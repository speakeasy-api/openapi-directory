import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutPaymentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutPaymentQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutPaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutPaymentRequest extends SpeakeasyBase {
    pathParams: ObjectPutPaymentPathParams;
    queryParams: ObjectPutPaymentQueryParams;
    headers: ObjectPutPaymentHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutPaymentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
