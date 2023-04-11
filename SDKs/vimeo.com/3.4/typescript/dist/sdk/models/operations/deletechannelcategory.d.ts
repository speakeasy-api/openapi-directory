import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteChannelCategorySecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteChannelCategoryRequest extends SpeakeasyBase {
    /**
     * The name of the category.
     */
    category: string;
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class DeleteChannelCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 8003: The user credentials are invalid.
     */
    error?: shared.ErrorT;
    /**
     * No such channel or category exists.
     */
    legacyError?: shared.LegacyError;
}
