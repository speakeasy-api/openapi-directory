import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPostCreditBalanceAdjustmentQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPostCreditBalanceAdjustmentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPostCreditBalanceAdjustmentRequest extends SpeakeasyBase {
    queryParams: ObjectPostCreditBalanceAdjustmentQueryParams;
    headers: ObjectPostCreditBalanceAdjustmentHeaders;
    request: Record<string, any>;
}
export declare class ObjectPostCreditBalanceAdjustmentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyBadRequestResponse?: shared.ProxyBadRequestResponse;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
