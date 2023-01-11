import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAttachmentsPathParams extends SpeakeasyBase {
    attachmentId: string;
}
export declare class GetAttachmentsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetAttachmentsRequest extends SpeakeasyBase {
    pathParams: GetAttachmentsPathParams;
    headers: GetAttachmentsHeaders;
}
export declare class GetAttachmentsResponse extends SpeakeasyBase {
    contentType: string;
    getAttachmentResponseType?: shared.GetAttachmentResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
