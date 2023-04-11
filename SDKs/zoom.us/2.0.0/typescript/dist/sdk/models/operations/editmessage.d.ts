import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EditMessageSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class EditMessageApplicationJSON extends SpeakeasyBase {
    /**
     * The edited message.
     */
    message?: string;
    /**
     * The Channel ID of the channel where you sent the message.<br>You must provide either `to_contact` or `to_channel` parameter in the API request.
     *
     * @remarks
     *  Channel ID can be retrieved from List User's Channels API.
     */
    toChannel?: string;
    /**
     * The email address of the contact to whom the message was sent.<br>
     *
     * @remarks
     * You must provide either `to_contact` or `to_channel` parameter in the API request.
     */
    toContact?: string;
}
export declare class EditMessageRequest extends SpeakeasyBase {
    requestBody?: EditMessageApplicationJSON;
    /**
     * Message ID: Unique Identifier of the message.
     */
    messageId: string;
    userId: string;
}
export declare class EditMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
