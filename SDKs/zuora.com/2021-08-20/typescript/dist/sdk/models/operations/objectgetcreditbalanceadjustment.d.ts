import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetCreditBalanceAdjustmentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetCreditBalanceAdjustmentQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetCreditBalanceAdjustmentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetCreditBalanceAdjustmentRequest extends SpeakeasyBase {
    pathParams: ObjectGetCreditBalanceAdjustmentPathParams;
    queryParams: ObjectGetCreditBalanceAdjustmentQueryParams;
    headers: ObjectGetCreditBalanceAdjustmentHeaders;
}
export declare class ObjectGetCreditBalanceAdjustmentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetCreditBalanceAdjustment?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
