import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelModeratorRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetChannelModeratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The moderator was returned.
     */
    user?: shared.User;
}
