import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAChatbotMessagePathParams extends SpeakeasyBase {
    messageId: string;
}
export declare class DeleteAChatbotMessageApplicationJson extends SpeakeasyBase {
    accountId: string;
    robotJid: string;
    userJid?: string;
}
export declare class DeleteAChatbotMessageMultipartFormData extends SpeakeasyBase {
    accountId: string;
    robotJid: string;
    userJid?: string;
}
export declare class DeleteAChatbotMessageRequests extends SpeakeasyBase {
    object?: DeleteAChatbotMessageApplicationJson;
    object1?: DeleteAChatbotMessageMultipartFormData;
}
export declare class DeleteAChatbotMessageSecurity extends SpeakeasyBase {
    clientCredentials: shared.SchemeClientCredentials;
}
export declare class DeleteAChatbotMessage200ApplicationJson extends SpeakeasyBase {
    messageId?: string;
    robotJid?: string;
    sentTime?: string;
    toJid?: string;
    userJid?: string;
}
export declare class DeleteAChatbotMessageRequest extends SpeakeasyBase {
    pathParams: DeleteAChatbotMessagePathParams;
    request?: DeleteAChatbotMessageRequests;
    security: DeleteAChatbotMessageSecurity;
}
export declare class DeleteAChatbotMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteAChatbotMessage200ApplicationJSONObject?: DeleteAChatbotMessage200ApplicationJson;
}
