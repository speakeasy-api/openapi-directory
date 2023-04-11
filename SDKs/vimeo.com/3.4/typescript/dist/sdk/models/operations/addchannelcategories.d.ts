import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddChannelCategoriesRequestBody extends SpeakeasyBase {
    /**
     * The array of category URIs to add.
     */
    channels: string[];
}
export declare class AddChannelCategoriesRequest extends SpeakeasyBase {
    requestBody: AddChannelCategoriesRequestBody;
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class AddChannelCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * Error code 2205: There was no request body, or the request body is malformed.
     *
     * @remarks
     * * Error code 2204: You exceeded the maximum number of channel categories.
     */
    error?: shared.ErrorT;
    /**
     * No such channel exists.
     */
    legacyError?: shared.LegacyError;
}
