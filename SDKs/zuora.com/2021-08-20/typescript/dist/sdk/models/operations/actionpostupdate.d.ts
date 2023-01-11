import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionPosTupdateQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ActionPosTupdateHeaders extends SpeakeasyBase {
    xZuoraWSDLVersion?: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ActionPosTupdateRequest extends SpeakeasyBase {
    queryParams: ActionPosTupdateQueryParams;
    headers: ActionPosTupdateHeaders;
    request: shared.ProxyActionupdateRequest;
}
export declare class ActionPosTupdateResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    saveResults?: shared.SaveResult[];
    statusCode: number;
}
