import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteChatMessagePathParams extends SpeakeasyBase {
    messageId: string;
    userId: string;
}
export declare class DeleteChatMessageQueryParams extends SpeakeasyBase {
    toChannel?: string;
    toContact?: string;
}
export declare class DeleteChatMessageSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DeleteChatMessageRequest extends SpeakeasyBase {
    pathParams: DeleteChatMessagePathParams;
    queryParams: DeleteChatMessageQueryParams;
    security: DeleteChatMessageSecurity;
}
export declare class DeleteChatMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
