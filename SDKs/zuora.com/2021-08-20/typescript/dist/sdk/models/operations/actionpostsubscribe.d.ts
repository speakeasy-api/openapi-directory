import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionPosTsubscribeQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ActionPosTsubscribeHeaders extends SpeakeasyBase {
    xZuoraWSDLVersion?: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ActionPosTsubscribeRequest extends SpeakeasyBase {
    queryParams: ActionPosTsubscribeQueryParams;
    headers: ActionPosTsubscribeHeaders;
    request: shared.ProxyActionsubscribeRequest;
}
export declare class ActionPosTsubscribeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
    subscribeResults?: shared.SubscribeResult[];
}
