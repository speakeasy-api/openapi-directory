import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetBillRunPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetBillRunQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetBillRunHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetBillRunRequest extends SpeakeasyBase {
    pathParams: ObjectGetBillRunPathParams;
    queryParams: ObjectGetBillRunQueryParams;
    headers: ObjectGetBillRunHeaders;
}
export declare class ObjectGetBillRunResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetBillRun?: shared.ProxyGetBillRun;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
