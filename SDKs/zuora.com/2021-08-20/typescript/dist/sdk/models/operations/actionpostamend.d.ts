import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionPosTamendQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ActionPosTamendHeaders extends SpeakeasyBase {
    xZuoraWSDLVersion?: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ActionPosTamendRequest extends SpeakeasyBase {
    queryParams: ActionPosTamendQueryParams;
    headers: ActionPosTamendHeaders;
    request: shared.ProxyActionamendRequest;
}
export declare class ActionPosTamendResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyActionamendResponse?: shared.ProxyActionamendResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
