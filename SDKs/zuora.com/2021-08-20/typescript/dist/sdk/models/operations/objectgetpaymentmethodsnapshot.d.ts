import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetPaymentMethodSnapshotPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetPaymentMethodSnapshotQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetPaymentMethodSnapshotHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetPaymentMethodSnapshotRequest extends SpeakeasyBase {
    pathParams: ObjectGetPaymentMethodSnapshotPathParams;
    queryParams: ObjectGetPaymentMethodSnapshotQueryParams;
    headers: ObjectGetPaymentMethodSnapshotHeaders;
}
export declare class ObjectGetPaymentMethodSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetPaymentMethodSnapshot?: shared.ProxyGetPaymentMethodSnapshot;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
