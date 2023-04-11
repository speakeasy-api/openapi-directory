import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddTagsToChannelSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddTagsToChannelRequestBody extends SpeakeasyBase {
    /**
     * An array of tags to assign.
     */
    tag: string[];
}
export declare class AddTagsToChannelRequest extends SpeakeasyBase {
    requestBody: AddTagsToChannelRequestBody;
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class AddTagsToChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 8003: The user credentials are invalid.
     */
    error?: shared.ErrorT;
    /**
     * * No such channel exists, or a parameter is invalid.
     *
     * @remarks
     * * Error code 2501: You tried to add more than 20 tags to the channel.
     * * Error code 2205: There was no request body, or the request body is malformed.
     */
    legacyError?: shared.LegacyError;
    /**
     * The tags were added.
     */
    tags?: shared.Tag[];
}
