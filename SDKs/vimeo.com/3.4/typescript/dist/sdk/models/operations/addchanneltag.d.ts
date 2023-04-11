import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddChannelTagSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddChannelTagRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The word to use as the tag.
     */
    word: string;
}
export declare class AddChannelTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 8003: The user credentials are invalid.
     */
    error?: shared.ErrorT;
    /**
     * * The tag is invalid, or a parameter is invalid.
     *
     * @remarks
     * * Error code 2501: The channel has already reached its maximum number of 20 tags.
     */
    legacyError?: shared.LegacyError;
}
