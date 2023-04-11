import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFeedSecurity extends SpeakeasyBase {
    oauth2: string;
}
/**
 * The feed type.
 */
export declare enum GetFeedTypeEnum {
    Appears = "appears",
    CategoryFeatured = "category_featured",
    Channel = "channel",
    FacebookFeed = "facebook_feed",
    Following = "following",
    Group = "group",
    Likes = "likes",
    OndemandPublish = "ondemand_publish",
    Share = "share",
    TaggedWith = "tagged_with",
    TwitterTimeline = "twitter_timeline",
    Uploads = "uploads"
}
export declare class GetFeedRequest extends SpeakeasyBase {
    /**
     * Necessary for proper pagination. You shouldn't provide this value yourself, and instead use the pagination links in the feed response. Please see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter) for more information.
     */
    offset?: string;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
    /**
     * The feed type.
     */
    type?: GetFeedTypeEnum;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetFeedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The videos were returned.
     */
    activity31s?: shared.Activity31[];
}
