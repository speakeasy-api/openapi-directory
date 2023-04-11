import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditChannelSecurity extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The privacy level of the channel.
 */
export declare enum EditChannelRequestBodyPrivacyEnum {
    Anybody = "anybody",
    Moderators = "moderators",
    Users = "users"
}
export declare class EditChannelRequestBody extends SpeakeasyBase {
    /**
     * The description of the channel.
     */
    description?: string;
    /**
     * The link to access the channel. You can use a custom name in the URL in place of a numeric channel ID, as in `/channels/{url_custom}`. Submitting `""` for this field removes the link alias.
     */
    link?: string;
    /**
     * The name of the channel.
     */
    name?: string;
    /**
     * The privacy level of the channel.
     */
    privacy?: EditChannelRequestBodyPrivacyEnum;
}
export declare class EditChannelRequest extends SpeakeasyBase {
    requestBody?: EditChannelRequestBody;
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class EditChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The channel was edited.
     */
    channel?: shared.Channel;
    /**
     * A parameter is invalid.
     */
    legacyError?: shared.LegacyError;
}
