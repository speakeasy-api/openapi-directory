import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUpdateEmailTemplatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutUpdateEmailTemplateHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutUpdateEmailTemplateRequest extends SpeakeasyBase {
    pathParams: PutUpdateEmailTemplatePathParams;
    headers: PutUpdateEmailTemplateHeaders;
    request: shared.PutPublicEmailTemplateRequest;
}
export declare class PutUpdateEmailTemplateResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    getPublicEmailTemplateResponse?: shared.GetPublicEmailTemplateResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
