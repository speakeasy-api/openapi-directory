import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutCreditBalanceAdjustmentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutCreditBalanceAdjustmentQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutCreditBalanceAdjustmentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutCreditBalanceAdjustmentRequest extends SpeakeasyBase {
    pathParams: ObjectPutCreditBalanceAdjustmentPathParams;
    queryParams: ObjectPutCreditBalanceAdjustmentQueryParams;
    headers: ObjectPutCreditBalanceAdjustmentHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutCreditBalanceAdjustmentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
