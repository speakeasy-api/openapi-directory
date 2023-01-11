import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutInvoiceAdjustmentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutInvoiceAdjustmentQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutInvoiceAdjustmentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutInvoiceAdjustmentRequest extends SpeakeasyBase {
    pathParams: ObjectPutInvoiceAdjustmentPathParams;
    queryParams: ObjectPutInvoiceAdjustmentQueryParams;
    headers: ObjectPutInvoiceAdjustmentHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutInvoiceAdjustmentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
