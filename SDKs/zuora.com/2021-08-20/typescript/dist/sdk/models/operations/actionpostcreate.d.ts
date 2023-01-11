import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionPosTcreateQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ActionPosTcreateHeaders extends SpeakeasyBase {
    xZuoraWSDLVersion?: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ActionPosTcreateRequest extends SpeakeasyBase {
    queryParams: ActionPosTcreateQueryParams;
    headers: ActionPosTcreateHeaders;
    request: shared.ProxyActioncreateRequest;
}
export declare class ActionPosTcreateResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    saveResults?: shared.SaveResult[];
    statusCode: number;
}
