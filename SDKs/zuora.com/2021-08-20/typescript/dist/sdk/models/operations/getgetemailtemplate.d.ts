import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGetEmailTemplatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGetEmailTemplateHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetGetEmailTemplateRequest extends SpeakeasyBase {
    pathParams: GetGetEmailTemplatePathParams;
    headers: GetGetEmailTemplateHeaders;
}
export declare class GetGetEmailTemplateResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    getPublicEmailTemplateResponse?: shared.GetPublicEmailTemplateResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
