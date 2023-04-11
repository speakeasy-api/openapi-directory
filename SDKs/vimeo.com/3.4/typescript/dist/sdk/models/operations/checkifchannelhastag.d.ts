import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckIfChannelHasTagRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The word to use as the tag.
     */
    word: string;
}
export declare class CheckIfChannelHasTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 5000: The tag exists, but the channel isn't tagged by it.
     */
    error?: shared.ErrorT;
    /**
     * No such tag exists.
     */
    legacyError?: shared.LegacyError;
}
