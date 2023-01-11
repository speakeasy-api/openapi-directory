import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditChatbotMessagePathParams extends SpeakeasyBase {
    messageId: string;
}
export declare class EditChatbotMessageApplicationJson extends SpeakeasyBase {
    accountId: string;
    content: Record<string, any>;
    isMarkdownSupport?: boolean;
    robotJid: string;
    userJid?: string;
}
export declare class EditChatbotMessageMultipartFormData extends SpeakeasyBase {
    accountId: string;
    content: Record<string, any>;
    isMarkdownSupport?: boolean;
    robotJid: string;
    userJid?: string;
}
export declare class EditChatbotMessageRequests extends SpeakeasyBase {
    object?: EditChatbotMessageApplicationJson;
    object1?: EditChatbotMessageMultipartFormData;
}
export declare class EditChatbotMessageSecurity extends SpeakeasyBase {
    clientCredentials: shared.SchemeClientCredentials;
}
export declare class EditChatbotMessage200ApplicationJson extends SpeakeasyBase {
    messageId?: string;
    robotJid?: string;
    sentTime?: Date;
    toJid?: string;
    userJid?: string;
}
export declare class EditChatbotMessageRequest extends SpeakeasyBase {
    pathParams: EditChatbotMessagePathParams;
    request?: EditChatbotMessageRequests;
    security: EditChatbotMessageSecurity;
}
export declare class EditChatbotMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    editChatbotMessage200ApplicationJSONObject?: EditChatbotMessage200ApplicationJson;
}
