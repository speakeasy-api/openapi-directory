import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVideoToChannelSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVideoToChannelRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class AddVideoToChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The video can't be added to channels, or the authenticated user isn't the moderator of this channel.
     */
    legacyError?: shared.LegacyError;
}
