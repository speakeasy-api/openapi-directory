import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutAccountPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutAccountQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutAccountHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutAccountRequest extends SpeakeasyBase {
    pathParams: ObjectPutAccountPathParams;
    queryParams: ObjectPutAccountQueryParams;
    headers: ObjectPutAccountHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutAccountResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
