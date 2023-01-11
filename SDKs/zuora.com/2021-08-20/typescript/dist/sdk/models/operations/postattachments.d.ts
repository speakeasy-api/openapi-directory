import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAttachmentsQueryParams extends SpeakeasyBase {
    associatedObjectKey: string;
    associatedObjectType: shared.GlobalHeaderZuoraEntityIdsSingleEnum;
    description?: string;
}
export declare class PostAttachmentsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostAttachmentsRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PostAttachmentsRequestBody extends SpeakeasyBase {
    file: PostAttachmentsRequestBodyFile;
}
export declare class PostAttachmentsRequest extends SpeakeasyBase {
    queryParams: PostAttachmentsQueryParams;
    headers: PostAttachmentsHeaders;
    request: PostAttachmentsRequestBody;
}
export declare class PostAttachmentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postAttachmentResponseType?: shared.PostAttachmentResponseType;
    statusCode: number;
}
