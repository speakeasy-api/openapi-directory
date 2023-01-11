import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionPosTdeleteQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ActionPosTdeleteHeaders extends SpeakeasyBase {
    xZuoraWSDLVersion?: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ActionPosTdeleteRequest extends SpeakeasyBase {
    queryParams: ActionPosTdeleteQueryParams;
    headers: ActionPosTdeleteHeaders;
    request: shared.ProxyActiondeleteRequest;
}
export declare class ActionPosTdeleteResponse extends SpeakeasyBase {
    contentType: string;
    deleteResults?: shared.DeleteResult[];
    headers: Record<string, string[]>;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
