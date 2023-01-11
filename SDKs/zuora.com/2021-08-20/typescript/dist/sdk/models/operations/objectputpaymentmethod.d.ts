import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutPaymentMethodPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutPaymentMethodQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutPaymentMethodHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutPaymentMethodRequest extends SpeakeasyBase {
    pathParams: ObjectPutPaymentMethodPathParams;
    queryParams: ObjectPutPaymentMethodQueryParams;
    headers: ObjectPutPaymentMethodHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutPaymentMethodResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
