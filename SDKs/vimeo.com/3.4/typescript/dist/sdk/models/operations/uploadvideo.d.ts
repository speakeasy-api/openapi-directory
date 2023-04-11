import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadVideoRequestBodyEmbedButtons extends SpeakeasyBase {
    /**
     * Show or hide the Embed button.
     */
    embed?: boolean;
    /**
     * Show or hide the Fullscreen button.
     */
    fullscreen?: boolean;
    /**
     * Show or hide the HD button.
     */
    hd?: boolean;
    /**
     * Show or hide the Like button.
     */
    like?: boolean;
    /**
     * Show or hide the Scaling button (shown only in Fullscreen mode).
     */
    scaling?: boolean;
    /**
     * Show or hide the Share button.
     */
    share?: boolean;
    /**
     * Show or hide the Watch Later button.
     */
    watchlater?: boolean;
}
export declare class UploadVideoRequestBodyEmbedLogosCustom extends SpeakeasyBase {
    /**
     * Show or hide your custom logo.
     */
    active?: boolean;
    /**
     * The URL that loads when the user clicks your custom logo.
     */
    link?: string;
    /**
     * Whether always to show the custom logo or to hide it after time with the rest of the UI.
     */
    sticky?: boolean;
}
export declare class UploadVideoRequestBodyEmbedLogos extends SpeakeasyBase {
    custom?: UploadVideoRequestBodyEmbedLogosCustom;
    /**
     * Show or hide the Vimeo logo.
     */
    vimeo?: boolean;
}
/**
 * Show or hide the video title, or enable the user to determine whether the video title appears.
 */
export declare enum UploadVideoRequestBodyEmbedTitleNameEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
/**
 * Show or hide the owner information, or enable the user to determine whether the owner information appears.
 */
export declare enum UploadVideoRequestBodyEmbedTitleOwnerEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
/**
 * Show or hide the owner portrait, or enable the user to determine whether the owner portrait appears.
 */
export declare enum UploadVideoRequestBodyEmbedTitlePortraitEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
export declare class UploadVideoRequestBodyEmbedTitle extends SpeakeasyBase {
    /**
     * Show or hide the video title, or enable the user to determine whether the video title appears.
     */
    name?: UploadVideoRequestBodyEmbedTitleNameEnum;
    /**
     * Show or hide the owner information, or enable the user to determine whether the owner information appears.
     */
    owner?: UploadVideoRequestBodyEmbedTitleOwnerEnum;
    /**
     * Show or hide the owner portrait, or enable the user to determine whether the owner portrait appears.
     */
    portrait?: UploadVideoRequestBodyEmbedTitlePortraitEnum;
}
export declare class UploadVideoRequestBodyEmbed extends SpeakeasyBase {
    buttons?: UploadVideoRequestBodyEmbedButtons;
    /**
     * The main color of the embed player.
     */
    color?: string;
    logos?: UploadVideoRequestBodyEmbedLogos;
    /**
     * Show or hide the playbar.
     */
    playbar?: boolean;
    title?: UploadVideoRequestBodyEmbedTitle;
    /**
     * Show or hide the volume selector.
     */
    volume?: boolean;
}
/**
 * The Creative Commons license.
 */
export declare enum UploadVideoRequestBodyLicenseEnum {
    By = "by",
    ByNc = "by-nc",
    ByNcNd = "by-nc-nd",
    ByNcSa = "by-nc-sa",
    ByNd = "by-nd",
    BySa = "by-sa",
    Cc0 = "cc0"
}
/**
 * The privacy level required to comment on the video.
 */
export declare enum UploadVideoRequestBodyPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
/**
 * The video's embed settings. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for details on adding and removing domains.
 */
export declare enum UploadVideoRequestBodyPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
/**
 * The video's privacy setting. When privacy is `users`, `application/json` is the only valid content type. Basic users can't set privacy to `unlisted`.
 */
export declare enum UploadVideoRequestBodyPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class UploadVideoRequestBodyPrivacy extends SpeakeasyBase {
    /**
     * Whether a user can add the video to an album, channel, or group.
     */
    add?: boolean;
    /**
     * The privacy level required to comment on the video.
     */
    comments?: UploadVideoRequestBodyPrivacyCommentsEnum;
    /**
     * Whether a user can download the video. Not available to users with a Basic membership
     */
    download?: boolean;
    /**
     * The video's embed settings. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for details on adding and removing domains.
     */
    embed?: UploadVideoRequestBodyPrivacyEmbedEnum;
    /**
     * The video's privacy setting. When privacy is `users`, `application/json` is the only valid content type. Basic users can't set privacy to `unlisted`.
     */
    view?: UploadVideoRequestBodyPrivacyViewEnum;
}
/**
 * The reason for the video's MPAA rating.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `at` - Adult themes
 *  * `bn` - Brief nudity
 *  * `n` - Nudity
 *  * `sl` - Strong language
 *  * `ss` - Sexual situations
 *  * `v` - Violence
 *
 */
export declare enum UploadVideoRequestBodyRatingsMpaaReasonEnum {
    At = "at",
    Bn = "bn",
    N = "n",
    Sl = "sl",
    Ss = "ss",
    V = "v"
}
export declare class UploadVideoRequestBodyRatingsMpaa extends SpeakeasyBase {
    /**
     * The reason for the video's MPAA rating.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `at` - Adult themes
     *  * `bn` - Brief nudity
     *  * `n` - Nudity
     *  * `sl` - Strong language
     *  * `ss` - Sexual situations
     *  * `v` - Violence
     *
     */
    reason?: UploadVideoRequestBodyRatingsMpaaReasonEnum;
}
/**
 * The reason for the video's TV rating.
 *
 * @remarks
 *
 * Option descriptions:
 *  * `d` - Suggestive dialogue
 *  * `fv` - Fantasy violence
 *  * `l` - Language
 *  * `ss` - Sexual situations
 *  * `v` - Violence
 *
 */
export declare enum UploadVideoRequestBodyRatingsTvReasonEnum {
    D = "d",
    Fv = "fv",
    L = "l",
    Ss = "ss",
    V = "v"
}
export declare class UploadVideoRequestBodyRatingsTv extends SpeakeasyBase {
    /**
     * The reason for the video's TV rating.
     *
     * @remarks
     *
     * Option descriptions:
     *  * `d` - Suggestive dialogue
     *  * `fv` - Fantasy violence
     *  * `l` - Language
     *  * `ss` - Sexual situations
     *  * `v` - Violence
     *
     */
    reason?: UploadVideoRequestBodyRatingsTvReasonEnum;
}
export declare class UploadVideoRequestBodyRatings extends SpeakeasyBase {
    mpaa?: UploadVideoRequestBodyRatingsMpaa;
    tv?: UploadVideoRequestBodyRatingsTv;
}
export declare class UploadVideoRequestBodyReviewPage extends SpeakeasyBase {
    /**
     * Enable or disable video review.
     */
    active?: boolean;
}
export declare class UploadVideoRequestBodySpatialDirectorTimeline extends SpeakeasyBase {
    /**
     * The timeline pitch. This value must be between -90 and 90.
     */
    pitch: number;
    /**
     * The timeline roll.
     */
    roll?: number;
    /**
     * The 360 director timeline time code.
     */
    timeCode: number;
    /**
     * The timeline yaw. This value must be between 0 and 360.
     */
    yaw: number;
}
/**
 * The 360 spatial projection.
 */
export declare enum UploadVideoRequestBodySpatialProjectionEnum {
    Cubical = "cubical",
    Cylindrical = "cylindrical",
    Dome = "dome",
    Equirectangular = "equirectangular",
    Pyramid = "pyramid"
}
/**
 * The 360 spatial stereo format.
 */
export declare enum UploadVideoRequestBodySpatialStereoFormatEnum {
    LeftRight = "left-right",
    Mono = "mono",
    TopBottom = "top-bottom"
}
export declare class UploadVideoRequestBodySpatial extends SpeakeasyBase {
    /**
     * The 360 director timeline.
     */
    directorTimeline?: UploadVideoRequestBodySpatialDirectorTimeline[];
    /**
     * The 360 field of view: default 50, minimum 30, maximum 90.
     */
    fieldOfView?: number;
    /**
     * The 360 spatial projection.
     */
    projection?: UploadVideoRequestBodySpatialProjectionEnum;
    /**
     * The 360 spatial stereo format.
     */
    stereoFormat?: UploadVideoRequestBodySpatialStereoFormatEnum;
}
/**
 * The upload approach.
 */
export declare enum UploadVideoRequestBodyUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}
export declare class UploadVideoRequestBodyUpload extends SpeakeasyBase {
    /**
     * The upload approach.
     */
    approach: UploadVideoRequestBodyUploadApproachEnum;
    /**
     * The public URL at which the video is hosted. The URL must be valid for at least 24 hours. Use this parameter when `approach` is `pull`.
     */
    link?: string;
    /**
     * The app's redirect URL. Use this parameter when `approach` is `post`.
     */
    redirectUrl?: string;
    /**
     * The size in bytes of the video to upload.
     */
    size?: string;
}
export declare class UploadVideoRequestBody extends SpeakeasyBase {
    /**
     * A list of values describing the content in this video. Find the full list in the [/contentratings](https://developer.vimeo.com/api/endpoints/videos#GET/contentratings) endpoint.
     */
    contentRating?: string[];
    /**
     * The description of the video.
     */
    description?: string;
    embed?: UploadVideoRequestBodyEmbed;
    /**
     * The Creative Commons license.
     */
    license?: UploadVideoRequestBodyLicenseEnum;
    /**
     * The video's default language. For a full list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.
     */
    locale?: string;
    /**
     * The title of the video.
     */
    name?: string;
    /**
     * The password. When you set `privacy.view` to `password`, you must provide the password as an additional parameter.
     */
    password?: string;
    privacy?: UploadVideoRequestBodyPrivacy;
    ratings?: UploadVideoRequestBodyRatings;
    reviewPage?: UploadVideoRequestBodyReviewPage;
    spatial?: UploadVideoRequestBodySpatial;
    upload: UploadVideoRequestBodyUpload;
}
export declare class UploadVideoRequest extends SpeakeasyBase {
    requestBody: UploadVideoRequestBody;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class UploadVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * Error code 2205: The body of the request isn't formatted properly.
     *
     * @remarks
     * * Error code 2204: The request contains invalid parameters.
     * * Error code 2204: The request contains invalid body parameters.
     * * Error code 2230: The upload type is invalid.
     * * Error code 3116: If a `type` payload parameter was supplied instead of `upload.approach`.
     */
    error?: shared.ErrorT;
    /**
     * The upload procedure has begun.
     */
    video?: shared.Video;
}
