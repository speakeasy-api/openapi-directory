import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SendimmessagesSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class SendimmessagesApplicationJSON extends SpeakeasyBase {
    /**
     * IM message content.
     */
    message?: string;
}
export declare class SendimmessagesRequest extends SpeakeasyBase {
    requestBody?: SendimmessagesApplicationJSON;
    /**
     * The email address (registered with Zoom) or the userId of the chat user.
     */
    chatUser?: string;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Message Sent.
 */
export declare class Sendimmessages201ApplicationXML extends SpeakeasyBase {
    /**
     * IM message UUID.
     */
    id?: string;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Message Sent.
 */
export declare class Sendimmessages201ApplicationJSON extends SpeakeasyBase {
    /**
     * IM message UUID.
     */
    id?: string;
}
export declare class SendimmessagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201`<br>
     *
     * @remarks
     * Message Sent.
     */
    sendimmessages201ApplicationJSONObject?: Sendimmessages201ApplicationJSON;
}
