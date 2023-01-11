import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPostContactQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPostContactHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPostContactRequest extends SpeakeasyBase {
    queryParams: ObjectPostContactQueryParams;
    headers: ObjectPostContactHeaders;
    request: Record<string, any>;
}
export declare class ObjectPostContactResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyBadRequestResponse?: shared.ProxyBadRequestResponse;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
