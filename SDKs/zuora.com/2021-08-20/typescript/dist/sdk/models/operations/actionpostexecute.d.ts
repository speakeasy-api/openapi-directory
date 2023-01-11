import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionPosTexecuteQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ActionPosTexecuteHeaders extends SpeakeasyBase {
    xZuoraWSDLVersion?: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ActionPosTexecuteRequest extends SpeakeasyBase {
    queryParams: ActionPosTexecuteQueryParams;
    headers: ActionPosTexecuteHeaders;
    request: shared.ProxyActionexecuteRequest;
}
export declare class ActionPosTexecuteResponse extends SpeakeasyBase {
    contentType: string;
    executeResults?: shared.ExecuteResult[];
    headers: Record<string, string[]>;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
