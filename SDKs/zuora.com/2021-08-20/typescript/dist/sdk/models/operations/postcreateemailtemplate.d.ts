import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCreateEmailTemplateHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostCreateEmailTemplateRequest extends SpeakeasyBase {
    headers: PostCreateEmailTemplateHeaders;
    request: shared.PostPublicEmailTemplateRequest;
}
export declare class PostCreateEmailTemplateResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    getPublicEmailTemplateResponse?: shared.GetPublicEmailTemplateResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
