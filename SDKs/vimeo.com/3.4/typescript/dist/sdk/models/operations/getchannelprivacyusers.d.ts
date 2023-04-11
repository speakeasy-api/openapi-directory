import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetChannelPrivacyUsersDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetChannelPrivacyUsersRequest extends SpeakeasyBase {
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The sort direction of the results.
     */
    direction?: GetChannelPrivacyUsersDirectionEnum;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
}
export declare class GetChannelPrivacyUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error code 8003: The user credentials are invalid.
     */
    error?: shared.ErrorT;
    /**
     * The users were returned.
     */
    users?: shared.User[];
}
