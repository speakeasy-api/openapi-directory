import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteChatMessageSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DeleteChatMessageRequest extends SpeakeasyBase {
    /**
     * Message ID
     */
    messageId: string;
    /**
     * The channel Id of the channel where you would like to send the message.
     *
     * @remarks
     *
     * You must provide either `to_contact` or `to_channel` as a query parameter to delete a message that was previously sent to either an individual or a chat channel
     */
    toChannel?: string;
    /**
     * The userId or email address of a chat contact to whom you previously sent the message.
     *
     * @remarks
     *
     * Note: You must provide either `to_contact` or `to_channel` as a query parameter to delete a message that was previously sent to either an individual or a chat channel respectively.
     */
    toContact?: string;
    userId: string;
}
export declare class DeleteChatMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
