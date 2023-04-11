import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class GetChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The channel was returned.
     */
    channel?: shared.Channel;
}
