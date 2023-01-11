import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionPosTqueryMoreQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ActionPosTqueryMoreHeaders extends SpeakeasyBase {
    xZuoraWSDLVersion?: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ActionPosTqueryMoreRequest extends SpeakeasyBase {
    queryParams: ActionPosTqueryMoreQueryParams;
    headers: ActionPosTqueryMoreHeaders;
    request: shared.ProxyActionqueryMoreRequest;
}
export declare class ActionPosTqueryMoreResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyActionqueryMoreResponse?: shared.ProxyActionqueryMoreResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
