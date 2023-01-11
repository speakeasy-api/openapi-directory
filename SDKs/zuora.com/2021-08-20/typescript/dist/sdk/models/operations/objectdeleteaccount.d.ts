import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeleteAccountPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeleteAccountHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeleteAccountRequest extends SpeakeasyBase {
    pathParams: ObjectDeleteAccountPathParams;
    headers: ObjectDeleteAccountHeaders;
}
export declare class ObjectDeleteAccountResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
