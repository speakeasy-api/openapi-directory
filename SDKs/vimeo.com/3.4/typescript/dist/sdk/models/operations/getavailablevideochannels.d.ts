import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAvailableVideoChannelsRequest extends SpeakeasyBase {
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class GetAvailableVideoChannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The channels were returned.
     */
    channels?: shared.Channel[];
    /**
     * The authenticated user can't add or remove this video from any channel.
     */
    legacyError?: shared.LegacyError;
}
