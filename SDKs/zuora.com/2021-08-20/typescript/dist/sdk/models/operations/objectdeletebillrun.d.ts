import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeleteBillRunPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeleteBillRunHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeleteBillRunRequest extends SpeakeasyBase {
    pathParams: ObjectDeleteBillRunPathParams;
    headers: ObjectDeleteBillRunHeaders;
}
export declare class ObjectDeleteBillRunResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
