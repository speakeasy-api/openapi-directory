import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionPosTgenerateQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ActionPosTgenerateHeaders extends SpeakeasyBase {
    xZuoraWSDLVersion?: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ActionPosTgenerateRequest extends SpeakeasyBase {
    queryParams: ActionPosTgenerateQueryParams;
    headers: ActionPosTgenerateHeaders;
    request: shared.ProxyActiongenerateRequest;
}
export declare class ActionPosTgenerateResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    saveResults?: shared.SaveResult[];
    statusCode: number;
}
