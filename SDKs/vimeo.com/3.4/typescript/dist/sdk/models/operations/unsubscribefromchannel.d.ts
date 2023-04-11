import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnsubscribeFromChannelSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UnsubscribeFromChannelRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class UnsubscribeFromChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such channel exists.
     */
    legacyError?: shared.LegacyError;
}
