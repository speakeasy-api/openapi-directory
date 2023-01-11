import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutBillRunPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutBillRunQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutBillRunHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutBillRunRequest extends SpeakeasyBase {
    pathParams: ObjectPutBillRunPathParams;
    queryParams: ObjectPutBillRunQueryParams;
    headers: ObjectPutBillRunHeaders;
    request: shared.ProxyModifyBillRun;
}
export declare class ObjectPutBillRunResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
