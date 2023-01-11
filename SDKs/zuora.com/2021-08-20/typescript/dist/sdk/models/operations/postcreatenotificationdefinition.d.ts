import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCreateNotificationDefinitionHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostCreateNotificationDefinitionRequest extends SpeakeasyBase {
    headers: PostCreateNotificationDefinitionHeaders;
    request: shared.PostPublicNotificationDefinitionRequest;
}
export declare class PostCreateNotificationDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    getPublicNotificationDefinitionResponse?: shared.GetPublicNotificationDefinitionResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
