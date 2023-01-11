import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutContactPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutContactQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutContactHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutContactRequest extends SpeakeasyBase {
    pathParams: ObjectPutContactPathParams;
    queryParams: ObjectPutContactQueryParams;
    headers: ObjectPutContactHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutContactResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
