import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateChannelSecurity extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The privacy level of the channel.
 */
export declare enum CreateChannelRequestBodyPrivacyEnum {
    Anybody = "anybody",
    Moderators = "moderators",
    User = "user"
}
export declare class CreateChannelRequestBody extends SpeakeasyBase {
    /**
     * The description of the channel.
     */
    description?: string;
    /**
     * The link to access the channel. You can use a custom name in the URL in place of a numeric channel ID, as in `/channels/{url_custom}`.
     */
    link?: string;
    /**
     * The name of the channel.
     */
    name: string;
    /**
     * The privacy level of the channel.
     */
    privacy: CreateChannelRequestBodyPrivacyEnum;
}
export declare class CreateChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The channel was created.
     */
    channel?: shared.Channel;
    /**
     * A parameter is invalid.
     */
    legacyError?: shared.LegacyError;
}
