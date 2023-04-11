import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelCategoriesRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class GetChannelCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The categories were returned.
     */
    categories?: shared.Category[];
    /**
     * No such channel exists.
     */
    legacyError?: shared.LegacyError;
}
