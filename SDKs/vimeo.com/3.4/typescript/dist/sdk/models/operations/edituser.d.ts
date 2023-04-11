import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Who can comment on the video. This value becomes the default comment setting for all future videos that this user uploads.
 */
export declare enum EditUserRequestBodyVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
/**
 * The privacy for embed videos. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for adding and removing domains.
 */
export declare enum EditUserRequestBodyVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
/**
 * Who can view the video. This value becomes the default view setting for all future videos that this user uploads.
 */
export declare enum EditUserRequestBodyVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class EditUserRequestBodyVideosPrivacy extends SpeakeasyBase {
    /**
     * Whether a user can add the video to an album, channel, or group. This value becomes the default add setting for all future videos uploaded by the user.
     */
    add?: boolean;
    /**
     * Who can comment on the video. This value becomes the default comment setting for all future videos that this user uploads.
     */
    comments?: EditUserRequestBodyVideosPrivacyCommentsEnum;
    /**
     * Whether a user can download the video. This value becomes the default download setting for all future videos that this user uploads.
     */
    download?: boolean;
    /**
     * The privacy for embed videos. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for adding and removing domains.
     */
    embed?: EditUserRequestBodyVideosPrivacyEmbedEnum;
    /**
     * Who can view the video. This value becomes the default view setting for all future videos that this user uploads.
     */
    view?: EditUserRequestBodyVideosPrivacyViewEnum;
}
export declare class EditUserRequestBodyVideos extends SpeakeasyBase {
    privacy?: EditUserRequestBodyVideosPrivacy;
}
export declare class EditUserRequestBody extends SpeakeasyBase {
    /**
     * The user's bio.
     */
    bio?: string;
    /**
     * A list of values describing the content in this video. Find the full list in the [/contentratings](https://developer.vimeo.com/api/endpoints/videos#GET/contentratings) endpoint. You must provide a comma-separated list if you are using a query string or an array if you are using JSON.
     */
    contentFilter?: string[];
    /**
     * The user's custom Vimeo URL slug.
     */
    link?: string;
    /**
     * The user's location.
     */
    location?: string;
    /**
     * The user's display name.
     */
    name?: string;
    /**
     * The default password for all future videos that this user uploads. To use this field, the `videos.privacy.view` field must be `password`.
     */
    password?: string;
    videos?: EditUserRequestBodyVideos;
}
export declare class EditUserRequest extends SpeakeasyBase {
    requestBody?: EditUserRequestBody;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class EditUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The user was edited.
     */
    user?: shared.User;
}
