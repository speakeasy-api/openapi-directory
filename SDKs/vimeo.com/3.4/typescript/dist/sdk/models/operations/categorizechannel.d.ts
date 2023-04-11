import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CategorizeChannelSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CategorizeChannelRequest extends SpeakeasyBase {
    /**
     * The name of the category.
     */
    category: string;
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class CategorizeChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 2204: You exceeded the maximum number of channel categories.
     */
    error?: shared.ErrorT;
    /**
     * No such channel or category exists.
     */
    legacyError?: shared.LegacyError;
}
