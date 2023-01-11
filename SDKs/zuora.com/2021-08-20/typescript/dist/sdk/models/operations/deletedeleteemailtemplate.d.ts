import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDeleteEmailTemplatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteDeleteEmailTemplateHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteDeleteEmailTemplateRequest extends SpeakeasyBase {
    pathParams: DeleteDeleteEmailTemplatePathParams;
    headers: DeleteDeleteEmailTemplateHeaders;
}
export declare class DeleteDeleteEmailTemplateResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
