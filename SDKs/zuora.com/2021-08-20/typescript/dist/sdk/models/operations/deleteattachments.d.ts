import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAttachmentsPathParams extends SpeakeasyBase {
    attachmentId: string;
}
export declare class DeleteAttachmentsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteAttachmentsRequest extends SpeakeasyBase {
    pathParams: DeleteAttachmentsPathParams;
    headers: DeleteAttachmentsHeaders;
}
export declare class DeleteAttachmentsResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
