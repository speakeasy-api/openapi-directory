import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckIfUserSubscribedToChannelRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class CheckIfUserSubscribedToChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such channel exists.
     */
    legacyError?: shared.LegacyError;
}
