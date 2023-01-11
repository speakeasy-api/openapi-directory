import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAttachmentsPathParams extends SpeakeasyBase {
    attachmentId: string;
}
export declare class PutAttachmentsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutAttachmentsRequest extends SpeakeasyBase {
    pathParams: PutAttachmentsPathParams;
    headers: PutAttachmentsHeaders;
    request?: shared.PutAttachmentType;
}
export declare class PutAttachmentsResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
