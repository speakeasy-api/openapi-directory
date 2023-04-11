import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadVideoAlt1RequestBodyEmbedButtons extends SpeakeasyBase {
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
export declare class UploadVideoAlt1RequestBodyEmbedLogosCustom extends SpeakeasyBase {
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
export declare class UploadVideoAlt1RequestBodyEmbedLogos extends SpeakeasyBase {
    custom?: UploadVideoAlt1RequestBodyEmbedLogosCustom;
    /**
     * Show or hide the Vimeo logo.
     */
    vimeo?: boolean;
}
/**
 * Show or hide the video title, or enable the user to determine whether the video title appears.
 */
export declare enum UploadVideoAlt1RequestBodyEmbedTitleNameEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
/**
 * Show or hide the owner information, or enable the user to determine whether the owner information appears.
 */
export declare enum UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
/**
 * Show or hide the owner portrait, or enable the user to determine whether the owner portrait appears.
 */
export declare enum UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
export declare class UploadVideoAlt1RequestBodyEmbedTitle extends SpeakeasyBase {
    /**
     * Show or hide the video title, or enable the user to determine whether the video title appears.
     */
    name?: UploadVideoAlt1RequestBodyEmbedTitleNameEnum;
    /**
     * Show or hide the owner information, or enable the user to determine whether the owner information appears.
     */
    owner?: UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum;
    /**
     * Show or hide the owner portrait, or enable the user to determine whether the owner portrait appears.
     */
    portrait?: UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum;
}
export declare class UploadVideoAlt1RequestBodyEmbed extends SpeakeasyBase {
    buttons?: UploadVideoAlt1RequestBodyEmbedButtons;
    /**
     * The main color of the embed player.
     */
    color?: string;
    logos?: UploadVideoAlt1RequestBodyEmbedLogos;
    /**
     * Show or hide the playbar.
     */
    playbar?: boolean;
    title?: UploadVideoAlt1RequestBodyEmbedTitle;
    /**
     * Show or hide the volume selector.
     */
    volume?: boolean;
}
/**
 * The Creative Commons license.
 */
export declare enum UploadVideoAlt1RequestBodyLicenseEnum {
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
export declare enum UploadVideoAlt1RequestBodyPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
/**
 * The video's embed settings. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for details on adding and removing domains.
 */
export declare enum UploadVideoAlt1RequestBodyPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
/**
 * The video's privacy setting. When privacy is `users`, `application/json` is the only valid content type. Basic users can't set privacy to `unlisted`.
 */
export declare enum UploadVideoAlt1RequestBodyPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class UploadVideoAlt1RequestBodyPrivacy extends SpeakeasyBase {
    /**
     * Whether a user can add the video to an album, channel, or group.
     */
    add?: boolean;
    /**
     * The privacy level required to comment on the video.
     */
    comments?: UploadVideoAlt1RequestBodyPrivacyCommentsEnum;
    /**
     * Whether a user can download the video. Not available to users with a Basic membership
     */
    download?: boolean;
    /**
     * The video's embed settings. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for details on adding and removing domains.
     */
    embed?: UploadVideoAlt1RequestBodyPrivacyEmbedEnum;
    /**
     * The video's privacy setting. When privacy is `users`, `application/json` is the only valid content type. Basic users can't set privacy to `unlisted`.
     */
    view?: UploadVideoAlt1RequestBodyPrivacyViewEnum;
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
export declare enum UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum {
    At = "at",
    Bn = "bn",
    N = "n",
    Sl = "sl",
    Ss = "ss",
    V = "v"
}
export declare class UploadVideoAlt1RequestBodyRatingsMpaa extends SpeakeasyBase {
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
    reason?: UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum;
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
export declare enum UploadVideoAlt1RequestBodyRatingsTvReasonEnum {
    D = "d",
    Fv = "fv",
    L = "l",
    Ss = "ss",
    V = "v"
}
export declare class UploadVideoAlt1RequestBodyRatingsTv extends SpeakeasyBase {
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
    reason?: UploadVideoAlt1RequestBodyRatingsTvReasonEnum;
}
export declare class UploadVideoAlt1RequestBodyRatings extends SpeakeasyBase {
    mpaa?: UploadVideoAlt1RequestBodyRatingsMpaa;
    tv?: UploadVideoAlt1RequestBodyRatingsTv;
}
export declare class UploadVideoAlt1RequestBodyReviewPage extends SpeakeasyBase {
    /**
     * Enable or disable video review.
     */
    active?: boolean;
}
export declare class UploadVideoAlt1RequestBodySpatialDirectorTimeline extends SpeakeasyBase {
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
export declare enum UploadVideoAlt1RequestBodySpatialProjectionEnum {
    Cubical = "cubical",
    Cylindrical = "cylindrical",
    Dome = "dome",
    Equirectangular = "equirectangular",
    Pyramid = "pyramid"
}
/**
 * The 360 spatial stereo format.
 */
export declare enum UploadVideoAlt1RequestBodySpatialStereoFormatEnum {
    LeftRight = "left-right",
    Mono = "mono",
    TopBottom = "top-bottom"
}
export declare class UploadVideoAlt1RequestBodySpatial extends SpeakeasyBase {
    /**
     * The 360 director timeline.
     */
    directorTimeline?: UploadVideoAlt1RequestBodySpatialDirectorTimeline[];
    /**
     * The 360 field of view: default 50, minimum 30, maximum 90.
     */
    fieldOfView?: number;
    /**
     * The 360 spatial projection.
     */
    projection?: UploadVideoAlt1RequestBodySpatialProjectionEnum;
    /**
     * The 360 spatial stereo format.
     */
    stereoFormat?: UploadVideoAlt1RequestBodySpatialStereoFormatEnum;
}
/**
 * The upload approach.
 */
export declare enum UploadVideoAlt1RequestBodyUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}
export declare class UploadVideoAlt1RequestBodyUpload extends SpeakeasyBase {
    /**
     * The upload approach.
     */
    approach: UploadVideoAlt1RequestBodyUploadApproachEnum;
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
export declare class UploadVideoAlt1RequestBody extends SpeakeasyBase {
    /**
     * A list of values describing the content in this video. Find the full list in the [/contentratings](https://developer.vimeo.com/api/endpoints/videos#GET/contentratings) endpoint.
     */
    contentRating?: string[];
    /**
     * The description of the video.
     */
    description?: string;
    embed?: UploadVideoAlt1RequestBodyEmbed;
    /**
     * The Creative Commons license.
     */
    license?: UploadVideoAlt1RequestBodyLicenseEnum;
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
    privacy?: UploadVideoAlt1RequestBodyPrivacy;
    ratings?: UploadVideoAlt1RequestBodyRatings;
    reviewPage?: UploadVideoAlt1RequestBodyReviewPage;
    spatial?: UploadVideoAlt1RequestBodySpatial;
    upload: UploadVideoAlt1RequestBodyUpload;
}
export declare class UploadVideoAlt1Response extends SpeakeasyBase {
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
