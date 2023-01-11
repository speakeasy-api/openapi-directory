import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendchatbotApplicationJson extends SpeakeasyBase {
    accountId: string;
    content: Record<string, any>;
    isMarkdownSupport?: boolean;
    robotJid: string;
    toJid: string;
    userJid?: string;
    visibleToUser?: string;
}
export declare class SendchatbotMultipartFormData extends SpeakeasyBase {
    accountId: string;
    content: Record<string, any>;
    isMarkdownSupport?: boolean;
    robotJid: string;
    toJid: string;
    userJid?: string;
    visibleToUser?: string;
}
export declare class SendchatbotRequests extends SpeakeasyBase {
    object?: SendchatbotApplicationJson;
    object1?: SendchatbotMultipartFormData;
}
export declare class SendchatbotSecurity extends SpeakeasyBase {
    clientCredentials: shared.SchemeClientCredentials;
}
export declare class SendchatbotRequest extends SpeakeasyBase {
    request?: SendchatbotRequests;
    security: SendchatbotSecurity;
}
export declare class SendchatbotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
