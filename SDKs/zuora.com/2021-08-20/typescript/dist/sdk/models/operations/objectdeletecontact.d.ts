import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeleteContactPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeleteContactHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeleteContactRequest extends SpeakeasyBase {
    pathParams: ObjectDeleteContactPathParams;
    headers: ObjectDeleteContactHeaders;
}
export declare class ObjectDeleteContactResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
