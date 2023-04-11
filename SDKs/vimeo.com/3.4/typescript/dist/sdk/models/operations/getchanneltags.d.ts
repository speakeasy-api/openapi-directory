import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelTagsRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
}
export declare class GetChannelTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such channel exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The tags were returned.
     */
    tags?: shared.Tag[];
}
