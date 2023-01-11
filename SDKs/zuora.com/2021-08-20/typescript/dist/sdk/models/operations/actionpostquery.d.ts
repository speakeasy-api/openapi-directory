import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionPosTqueryQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ActionPosTqueryHeaders extends SpeakeasyBase {
    xZuoraWSDLVersion?: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ActionPosTqueryRequest extends SpeakeasyBase {
    queryParams: ActionPosTqueryQueryParams;
    headers: ActionPosTqueryHeaders;
    request: shared.ProxyActionqueryRequest;
}
export declare class ActionPosTqueryResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyActionqueryResponse?: shared.ProxyActionqueryResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
